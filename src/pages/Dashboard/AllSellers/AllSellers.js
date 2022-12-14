import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { MdVerified } from 'react-icons/md';
import Spinner from '../../../components/Spinner/Spinner';

const AllSellers = () => {
    const { data: users = [], isLoading, isFetching, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://next-rep-server.vercel.app/sellers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleVerifyUser = (email, name) => {
        const agree = window.confirm(`Are you sure to verifiy '${name}' with email: '${email}'?`);
        const verified = { verified: true }
        if (agree) {
            fetch(`https://next-rep-server.vercel.app/users/${email}`, {
                method: 'PUT',
                headers:
                {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(verified)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                        fetch(`https://next-rep-server.vercel.app/products/sellerVerification/${email}`, {
                            method: 'PUT',
                            headers:
                            {
                                'content-type': 'application/json',
                                authorization: `bearer ${localStorage.getItem('accessToken')}`
                            },
                            body: JSON.stringify(verified)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.modifiedCount > 0) {
                                    refetch();
                                    toast.success(`${name} is verified successfully`);
                                }
                            })
                    }
                })
        }
    }

    const handleDeleteUser = user => {
        const agree = window.confirm(`Are you sure to delete ${user?.email}?`);
        if (agree) {
            fetch(`https://next-rep-server.vercel.app/users/${user._id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success(`${user?.email} is deleted successfully`);
                        refetch();
                    }
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
                                <td><p className='flex items-center gap-2'>{user.name} <span className='text-sky-600'>{user.verified ? <MdVerified /> : undefined}</span></p></td>
                                <td className='break-words'>{user.email}</td>
                                <td>{user.accountType}</td>
                                <td onClick={() => handleVerifyUser(user.email, user.name)}>
                                    <button disabled={user.verified} className='btn-sm btn btn-primary'>{user.verified ? 'Verified' : 'Verify'}</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className='bg-red-600 p-1 rounded-lg text-white'>
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

export default AllSellers;