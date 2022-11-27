import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { useContext, useState } from 'react';
import './MyOrders.css'
import { Link } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';

const MyOrders = () => {
    const [loading, setLoading] = useState(false);
    const {user} = useContext(AuthContext);

    const url = `https://next-rep-server.vercel.app/bookings?email=${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            setLoading(true);
            const res = await fetch(url,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            setLoading(false);
            return data;
        }
    })
    
    if(loading){
        return <Spinner></Spinner>
    }
    // console.log(orders);
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
                                    <Link to={`/dashboard/payment/${order._id}`}><button disabled={order.payment==='Paid'} className='btn btn-secondary btn-sm'>{
                                    order.payment === 'Paid' ? 'Paid' : 'Pay'}</button></Link>
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