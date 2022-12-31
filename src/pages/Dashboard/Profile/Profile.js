import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import toast, { Toaster } from 'react-hot-toast';
import Spinner from '../../../components/Spinner/Spinner';

const Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [userFromDB, setUserFromDB] = useState({});

    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        if (!loading) {
            if (user) {
                const displayName = user.displayName;
                const email = user.email;
                const photoURL = user.photoURL;
                    setName(displayName);
                    setEmail(email);
                    setPhotoURL(photoURL);

                    fetch(`http://localhost:5000/users/${email}`)
                    .then(res=>res.json())
                    .then(data=>setUserFromDB(data))
            }
            else {
                toast.error("You're not logged in")
            }
        }
    }, [loading, user])

    console.log(userFromDB);

    return (
        <div className='min-h-custom font-secondary'>
            <Toaster />
            {
                loading && <Spinner></Spinner>
            }
            <h2 className='p-2 text-gray-900 text-center text-2xl font-semibold'>My Profile</h2>
            <div className='mx-auto bg-gray-200 px-10 my-5 py-10 rounded-lg text-gray-900 md:w-2/3'>

                <div className="max-w-3xl mb-5">
                    <img className='w-40 mx-auto rounded-lg' src={photoURL} alt="" />
                </div>

                <div className="max-w-md mx-auto bg-gray-300 px-2 rounded-md  flex justify-between items-center mb-5">
                    <h5 className="lg:text-lg font-medium w-1/3">Full Name:</h5>
                    <p type="text" className="lg:text-lg rounded-lg p-2 w-2/3">{name}</p>
                </div>

                <div className="max-w-md mx-auto  bg-gray-300 px-2 rounded-md flex justify-between items-center mb-5">
                    <h5 className="lg:text-lg font-medium w-1/3">Email:</h5>
                    <p type="email" className="lg:text-lg rounded-lg p-2 w-2/3">{email}</p>
                </div>

                <div className="max-w-md mx-auto  bg-gray-300 px-2 rounded-md flex justify-between items-center mb-5">
                    <h5 className="lg:text-lg font-medium w-1/3">Role:</h5>
                    <p type="email" className="lg:text-lg rounded-lg p-2 w-2/3">{userFromDB.accountType}</p>
                </div>

                <div className="max-w-md mx-auto  bg-gray-300 px-2 rounded-md flex justify-between items-center mb-5">
                    <h5 className="lg:text-lg font-medium w-1/3">Verification:</h5>
                    <p type="email" className="lg:text-lg rounded-lg p-2 w-2/3">{userFromDB.verified ? 'Verified' : 'Not Yet'}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Profile;