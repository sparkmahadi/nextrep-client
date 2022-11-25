import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/UserContext';

const BookingModal = ({ item, setItem }) => {
    const { location, mobile, sellerName, name, resalePrice, sellerEmail, _id } = item;

    const { user } = useContext(AuthContext);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;

        const buyerName = form.name.value;
        const buyerEmail = form.email.value;
        const buyerPhone = form.phone.value;
        const meetingLocation = form.location.value;

        const booking = {
            productName: name,
            buyerName,
            buyerEmail,
            buyerPhone,
            sellerName,
            sellerEmail,
            productId: _id,
            sellerPhone: mobile,
            sellerLocation: location,
            price: resalePrice,
            meetingLocation
        }

        const booked = {status: 'Sold'}

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setItem(null);
                    toast.success('Bike is booked');

                    // have to set product as sold

                    fetch(`http://localhost:5000/products/${_id}`,{
                        method: 'PUT',
                        headers:
                        {'content-type' : 'application/json'},
                        body: JSON.stringify(booked)
                    })
                    .then(res=>res.json())
                    .then(data=>console.log(data))
                }
                else {
                    toast.error(data.message);
                }
            })

        setItem(null);
    }
    return (
        <div className='text-gray-900'>
            <input type="checkbox" id="product-booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="text-lg input-bordered" />

                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="text-lg input-bordered" />

                        <input name="product" type="text" defaultValue={name} disabled className="text-lg input-bordered" />

                        <input name="price" type="text" defaultValue={resalePrice} disabled placeholder="Email Address" className="input-bordered text-lg" />

                        <input name="phone" type="text" placeholder="Your Mobile Number" className="text-lg input-bordered" />

                        <input name="location" type="text" placeholder="Meeting Location" className="text-lg input-bordered" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                    </form>

                <div className="modal-action">
                    <label htmlFor="product-booking-modal" className="btn btn-accent w-full">Cancel</label>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;