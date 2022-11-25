import React from 'react';

const ErrorPage = () => {
    return (
        <div className='custom-align'>
            <img className='w-96 lg:w-full max-w-xl' src="https://i.ibb.co/ZNb2STf/error-Image.jpg" alt="" />
            <h2 className='lg:text-4xl text-center'>Sorry! The Page Is Not Found!!!</h2>
            <p className='lg:text-2xl text-center pt-2'>Go Back to <span className='text-secondary'>Homepage</span></p>
        </div>
    );
};

export default ErrorPage;