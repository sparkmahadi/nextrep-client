import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/BKNzDnL/yzf-r15-right-front-three-quarter-7.png")` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center">
                    <div className="">
                        <p className='mb-4 text-xl font-bold text-red-500 uppercase'>Making Your Dreams Come True</p>
                        <h2 className="mb-5 lg:text-7xl font-bold font-primary">FIND YOUR MOTORCYCLE</h2>
                        <p className="mb-5 lg:text-3xl">Buy or sell your motorcycle with our growing community.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;