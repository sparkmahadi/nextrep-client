import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import toast from 'react-hot-toast';
import Spinner from '../../../components/Spinner/Spinner';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/myProducts?email=${user?.email}`;

    const { data: myProducts = [], isLoading, isFetching, refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleAdvertiseProduct = (id, name) => {
        const agree = window.confirm(`Are you sure to advertise ${name}?`);
        const advertised = { advertised: true };
        if (agree) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'PUT',
                headers:
                    { 'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(advertised)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                        toast.success(`${name} is advertised successfully`);
                        refetch();
                    }
                })
        }
    }

    const handleDeleteProduct = (id, name) => {
        const agree = window.confirm(`Are you sure to delete ${name}?`);
        if (agree) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success(`${name} is deleted successfully`);
                    refetch();
                })
        }
    }
    return (
        <div className='min-h-screen'>
            {
                isLoading && <div className="custom-align"><Spinner></Spinner></div>
            }
            {
                
                isFetching && <div className="custom-align"><Spinner></Spinner></div>
            }
            <div className="overflow-x-auto">
                <table className="lg:table lg:w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product Name</th>
                            <th>Photo</th>
                            <th>Posted Time</th>
                            <th>Price</th>
                            <th>Sales Status</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts?.map((pd, i) => <tr key={pd._id}>
                                <th>{i + 1}</th>
                                <td>{pd.name}</td>
                                <td><img className='w-8 h-8' src={pd.img} alt="" /></td>
                                <td>{pd.postedTime}</td>
                                <td>{pd.resalePrice}</td>
                                <td>{pd.status}</td>
                                <td>
                                        {
                                            pd.advertised ?
                                                <button className='btn btn-sm rounded-lg btn-accent' disabled>Advertised</button>
                                                :
                                                <button onClick={() => handleAdvertiseProduct(pd._id, pd.name)} className={`btn btn-sm rounded-lg btn-secondary`}> Advertise </button>
                                        }
                                    </td>

                                <td><button onClick={() => handleDeleteProduct(pd._id, pd.name)} className='bg-red-600 p-1 lg:p-2 rounded-lg text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;