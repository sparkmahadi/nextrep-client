import React from 'react';

const Payment = () => {
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
            <h2>This is payment</h2>
        </div>
    );
};

export default Payment;