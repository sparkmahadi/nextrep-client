import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import toast, { Toaster } from 'react-hot-toast';

const Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    const { user, loading, updateUserProfile } = useContext(AuthContext);

    useEffect(() => {
        if (!loading) {
            if (user) {
                const displayName = user.displayName;
                const email = user.email;
                const photoURL = user.photoURL;
                if (displayName) {
                    setName(displayName);
                }
                if (email) {
                    setEmail(email);
                }
                if (photoURL) {
                    setPhotoURL(photoURL);
                }
            }
            else {
                toast.error("You're not logged in")
            }
        }
    }, [loading])

    const handleUpdateUserProfile = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;

        const profile = {
            displayName: name,
            photoURL: photoURL,
            email: email
        }
        updateUserProfile(profile)
            .then(() => {
                toast.success("Profile Updated Successfully!")
            })
            .catch(e => console.error(e));
    }

    return (
        <div className='min-h-custom'>
            <Toaster />
            <h2 className='p-2 text-gray-900 text-center text-2xl font-semibold'>Your Profile</h2>
            <form onSubmit={handleUpdateUserProfile} className='container mx-auto bg-white px-10 my-5 py-10 rounded-lg text-gray-900 md:w-2/3 lg:w-1/2'>

                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-lg font-medium">Your Full Name:</label>
                    <input type="text" name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" defaultValue={name} required />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-lg font-medium">Your email</label>
                    <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" defaultValue={email} required />
                </div>

                <div className="mb-6">
                    <label htmlFor="photoURL" className="block mb-2 text-lg font-medium">Your Photo URL</label>
                    <input type="text" name='photoURL' id="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" defaultValue={photoURL} />
                </div>
                <button type="submit" className="text-white btn-primary hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5">Update</button>
            </form>
        </div>
    );
};

export default Profile;