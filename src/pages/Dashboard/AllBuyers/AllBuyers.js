import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllBuyers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers');
            const data = await res.json();
            return data;
        }
    });
    console.log(users);
    return (
        <div className='min-h-screen'>
            <div className="overflow-x-auto">
                <table className="lg:table lg:w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>Verification</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.accountType}</td>
                                <td>{user.verified ? 'Verified' : 'Not Verified'}</td>
                                <td>
                                    <button className='bg-secondary p-1 rounded-lg text-white'>
                                        {user.isAdmin ? 'Admin' : 'Make'}
                                    </button>
                                </td>
                                <td>
                                    <button className='bg-red-600 p-1 rounded-lg text-white'>
                                        Delete
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;