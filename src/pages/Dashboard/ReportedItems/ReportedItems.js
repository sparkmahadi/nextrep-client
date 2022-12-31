import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../components/Spinner/Spinner';

const ReportedItems = () => {
    const { data: reportedItems = [], refetch, isLoading, isFetching } = useQuery({
        queryKey: ['reportedItems'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reportedItems', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteProduct = (id, name) => {
        const agree = window.confirm(`Are you sure to delete ${name}?`);
        if (agree) {
            handleDeleteReport(id, name);
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        toast.success(`${name} is deleted from products`);
                    }
                })
        }
    }

    const handleDeleteReport = (id, name) => {
        fetch(`http://localhost:5000/reportedItems/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data);
                    console.log(`${name} is deleted from Reported Items`);
                    refetch();
                }
            })
    }
    return (
        <div>
            {
                isLoading && <Spinner></Spinner>
            }
            {
                
                isFetching && <Spinner></Spinner>
            }
            <div className="overflow-x-auto">
                <table className="lg:table lg:w-full">

                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Buyer Email</th>
                            <th>Reported Time</th>
                            <th>Delete</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reportedItems?.map((pd) => <tr key={pd._id}>
                                <td>{pd.productName}</td>
                                <td>{pd.buyerEmail}</td>
                                <td>{pd.reportedTime}</td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteProduct(pd.productId, pd.productName)}
                                        className='bg-red-600 p-1 lg:p-2 rounded-lg text-white'
                                    >Accept & Delete</button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteReport(pd.productId, pd.productName)}
                                        className='bg-slate-600 p-1 lg:p-2 rounded-lg text-white'
                                    >Reject</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;