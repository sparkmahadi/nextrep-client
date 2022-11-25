import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState('');
    const { createNewUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const accountType = form.accountType.value;

        console.log(accountType);

        createNewUser(email, password)
            .then(r => {
                const user = r.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                saveUser(name, email, accountType);
                toast.success("Account Registered Successfully");
                navigate('/');

            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => {})
            .catch(e => console.error(e));
    }

    const saveUser = (name, email, accountType) =>{
        let user ={name, email, accountType, verified: false};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }

    return (
        <div>
            <h2 data-aos="fade-left" data-aos-duration="1000" className='bg-sky-600 p-2 text-white text-center text-2xl font-semibold'>Registration...</h2>
            <form data-aos="fade-right" data-aos-duration="1000" onSubmit={handleSubmit} className='container mx-auto bg-white px-10 py-10 rounded-lg text-gray-900 md:w-2/3 lg:w-1/2'>

                <div className="mb-6 flex justify-center items-center gap-5 p-5">
                    <label htmlFor="accountType" className="block text-lg font-medium">Account Type:</label>
                    <select className=' text-lg' name="accountType" id="accountType">
                        <option value="Buyer">Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>
                </div>
                
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-lg font-medium">Your Full Name:</label>
                    <input type="text" name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter Your Full Name" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="photoURL" className="block mb-2 text-lg font-medium">Your Photo URL</label>
                    <input type="text" name='photoURL' id="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter Your Full Name" />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-lg font-medium">Your email</label>
                    <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter Your Email" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-lg font-medium">Your password</label>
                    <input type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5" placeholder='Enter Your Password' required />
                </div>
                <p className='text-red-600 mb-2'>{error}</p>
                <p className='pb-2'>Already have an account? Please <Link className='text-blue-700 font-semibold' to='/login'>Login</Link> Now!</p>

                <button type="submit" className="text-white bg-secondary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5">Register</button>
            </form>
        </div>
    );
};

export default Register;