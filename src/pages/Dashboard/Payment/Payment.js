import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
    const bookedInfo = useLoaderData();
    const { productName, sellerName, sellerEmail, sellerPhone, sellerLocation, price, meetingLocation } = bookedInfo;
    const booked = { status: 'Sold' }

    // fetch(`http://localhost:5000/products/${_id}`, {
    //     method: 'PUT',
    //     headers:
    //         { 'content-type': 'application/json' },
    //     body: JSON.stringify(booked)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         // refetch();
    //     })
    return (
        <div>
            <div className="card w-2/3 mx-auto bg-fifth text-primary-content">
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Make Payment for <span className='font-bold'>{productName}</span></h2>
                    <div className='bg-gray-300 p-5'>
                        <Elements stripe={stripePromise}>
                            <Checkout bookedInfo={bookedInfo}/>
                        </Elements>
                    </div>
                    <p className='p-3 text-lg bg-primary rounded-lg'>Seller Name: {sellerName}</p>
                    <p className='p-3 text-lg bg-primary rounded-lg'>Seller Email: {sellerEmail}</p>
                    <p className='p-3 text-lg bg-primary rounded-lg'>Seller Phone: {sellerPhone}</p>
                    <p className='p-3 text-lg bg-primary rounded-lg'>Seller Location: {sellerLocation}</p>
                    <p className='p-3 text-lg bg-primary rounded-lg'>Product Price: <span className='font-semibold'>${price}</span></p>
                    <p className='p-3 text-lg bg-primary rounded-lg'>Meeting Location: {meetingLocation}</p>
                    <div className="card-actions justify-end">
                        <button className="btn-secondary btn mx-auto">Pay Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;