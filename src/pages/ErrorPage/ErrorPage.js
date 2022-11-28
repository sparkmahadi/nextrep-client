import React from 'react';
import { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from './../../contexts/UserContext';

const ErrorPage = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
             })
            .catch(err => console.log(err));
    }
    return (
        <div className='custom-align font-secondary'>
            <img className='w-96 lg:w-full max-w-xl' src="https://i.ibb.co/ZNb2STf/error-Image.jpg" alt="" />
            <h2 className='lg:text-4xl text-center mb-2'>Sorry! Something Went Wrong!!!</h2>
            <p className='text-red-400 lg:text-3xl text-center mb-2'>{error.statusText || error.message ? "You're not Permitted to Visit this Route" : undefined}!!!</p>
            <h4 className="lg:text-2xl text-center"> You Can <button onClick={handleLogOut} className='text-secondary'>Log Out</button> and Log Back in</h4>
            <div className='divider'>OR</div>
            <p className='lg:text-2xl text-center pt-2'>Go Back to <span className='text-secondary'>Homepage</span></p>
        </div>
    );
};

export default ErrorPage;