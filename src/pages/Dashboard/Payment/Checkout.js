import React from 'react';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import Spinner from '../../../components/Spinner/Spinner';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';


const Checkout = ({ bookedInfo }) => {
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { price, buyerName, buyerEmail, _id, productId } = bookedInfo;

    useEffect(() => {
        setProcessing(true);
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret);
                setProcessing(false);
            });
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card });
        if (error) {
            console.log(error);
            setError(error.message);
        }
        else {
            setError('');
        }

        stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail
                    },
                },
            })
            .then(function (result) {
                if (result.error) {
                    setError(result.error.message);
                    setProcessing(false);
                    return;
                }
                if (result.paymentIntent.status === 'succeeded') {
                    toast.success(`Congrats! Your Payment of ${result.paymentIntent.amount / 100} TK is completed`);
                    setTransactionId(result.paymentIntent.id);

                    const paymentInfo = {
                        payment: 'Paid',
                        paymentTime: format(new Date(), 'PP')
                    };
                    fetch(`http://localhost:5000/bookings/${_id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(paymentInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.modifiedCount > 0) {
                                console.log('updated as paid in orders');
                                // to update the product as sold in productsCollection. First get with id(string), then update with id(objectId)
                                fetch(`http://localhost:5000/products/${productId}`)
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log(data)
                                        const sold = {status: 'Sold'};
                                        if(Object.keys(data).length){
                                            fetch(`http://localhost:5000/products/${data._id}`,{
                                                method: 'PUT',
                                                headers: {
                                                    'content-type' : 'application/json',
                                                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                                                },
                                                body: JSON.stringify(sold)
                                            })
                                            .then(res=>res.json())
                                            .then(data=>{
                                                console.log(data);
                                                if(data.modifiedCount > 0){
                                                    console.log('product status updated as sold');
                                                }
                                            })
                                        }
                                    })}
                    })
                }
                setProcessing(false);
            });
    }
    return (
        <div>
            <Toaster></Toaster>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn mt-5 btn-sm btn-secondary' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-error">{error}</p>
            {
                transactionId &&
                <>
                <p className='text-secondary py-2 break-words'>Last Transaction Id : <span className='font-semibold'>{transactionId}</span></p>
                <p className='text-primary'>Go Back to <Link to='/' className='font-semibold underline'>Homepage</Link></p>
                </>
            }
            {
                processing && <Spinner></Spinner>
            }
        </div>
    );
};

export default Checkout;