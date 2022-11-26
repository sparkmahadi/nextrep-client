import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { useContext } from 'react';
import './MyOrders.css'

const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log(orders);
    return (
        <div className='min-h-screen'>
            <div className="overflow-x-auto">
                <table className="lg:table lg:w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Meeting Location</th>
                            <th>Seller</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders?.map((order, i) => <tr key={order._id}>
                                <th>{i+1}</th>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.meetingLocation}</td>
                                <td>{order.sellerName}</td>
                                <td>
                                    <button className='btn btn-secondary btn-sm'>Pay Now</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;