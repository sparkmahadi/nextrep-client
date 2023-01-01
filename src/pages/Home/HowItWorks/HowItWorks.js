import React from 'react';

const HowItWorks = () => {
    return (
        <div className='px-4 py-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h2 data-aos="fade-left" data-aos-duration="1000" className='text-xl md:text-2xl font-bold text-center uppercase divider whitespace-normal lg:whitespace-nowrap'>How it works!</h2>
            <div data-aos="fade-right" data-aos-duration="1000" className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 pt-5'>
                <div data-aos="zoom-in" data-aos-duration="1000" className='bg-sky-700 p-5 rounded-lg text-white'>
                    <p className='lg:text-lg font-semibold text-center mb-5'>1. Choose Your Bike</p>
                    <img className='w-24 lg:w-36 mx-auto rounded-lg' src="choose.png" alt="" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className='bg-sky-700 p-5 rounded-lg text-white'>
                    <p className='lg:text-lg font-semibold text-center mb-5'>2. Book the Bike</p>
                    <img className='w-24 lg:w-36 mx-auto rounded-lg' src="booking.png" alt="" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className='bg-sky-700 p-5 rounded-lg text-white'>
                    <p className='lg:text-lg font-semibold text-center mb-5'>3. Set Your Location</p>
                    <img className='w-24 lg:w-36 mx-auto rounded-lg' src="set-location.png" alt="" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className='bg-sky-700 p-5 rounded-lg text-white'>
                    <p className='lg:text-lg font-semibold text-center mb-5'>4. Meet at the location</p>
                    <img className='w-24 lg:w-36 mx-auto rounded-lg' src="meet.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;