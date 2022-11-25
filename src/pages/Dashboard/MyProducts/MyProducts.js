import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';

const MyProducts = () => {
    const {user, loading} = useContext(AuthContext);
    const url = `http://localhost:5000/myProducts?email=${user?.email}`;

    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });
    console.log(myProducts);
    return (
        <div className='min-h-screen'>
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
                                    <button className='btn-primary p-1 lg:p-2 rounded-lg text-white'>Advertise</button>
                                </td>
                                <td><button className='bg-red-600 p-1 lg:p-2 rounded-lg text-white'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;