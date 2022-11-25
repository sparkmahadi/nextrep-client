import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';

const AllBuyers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers');
            const data = await res.json();
            return data;
        }
    });

    const handleVerifyUser = (email, name) => {
        const agree = window.confirm(`Are you sure to verifiy '${name}' with email: '${email}'?`);
        const verified = { verified: true }
        if (agree) {
            fetch(`http://localhost:5000/users/${email}`, {
                method: 'PUT',
                headers:
                    { 'content-type': 'application/json' },
                body: JSON.stringify(verified)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                        refetch();
                        toast.success(`${name} is verified successfully`);
                    }
                })
        }
    }
    
    return (
        <div className='min-h-screen'>
            <Toaster></Toaster>
            <div className="overflow-x-auto">
                <table className="lg:table lg:w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>Verification</th>
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
                                <td onClick={() => handleVerifyUser(user.email, user.name)}>
                                    <button disabled={user.verified} className='btn-sm btn btn-primary'>{user.verified ? 'Verified' : 'Verify'}</button>
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