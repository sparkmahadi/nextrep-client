import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
    const bookedInfo = useLoaderData();
    const { productName, sellerName, sellerEmail, sellerPhone, sellerLocation, price, meetingLocation } = bookedInfo;
    return (
        <div>
            <Helmet>
                <title>NextRep | Payment</title>
            </Helmet>
            <div className="card lg:w-2/3 mx-auto bg-fifth text-primary-content">
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center text-white">Make Payment for <span className='font-bold'>{productName}</span></h2>
                    <div className='bg-gray-100 p-5 rounded-lg'>
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
                </div>
            </div>
        </div>
    );
};

export default Payment;