import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div>
            <div data-aos="zoom-in" data-aos-duration="2000" className="hero" style={{ backgroundImage: `url("https://i.ibb.co/BKNzDnL/yzf-r15-right-front-three-quarter-7.png")` }}>
                <div className="hero-overlay bg-opacity-80 py-48 lg:py-72 2xl:py-96"></div>
                <div className="hero-content text-center">
                    <div className="">
                        <p className='mb-2 lg:mb-4 lg:text-3xl font-bold text-red-500 uppercase'>Making Your Dreams Come True</p>
                        <div className="mb-2 lg:mb-5 text-3xl lg:text-5xl text-white font-bold font-primary">
                            <Typewriter
                                options={{
                                    strings: ['GET YOUR DREAM MOTORCYCLE'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                        <p className="mb-2 lg:mb-5 lg:text-xl 2xl:text-3xl text-white">Buy or sell your motorcycle with our growing community.</p>
                        <Link to='/categories'><button className="btn-sm btn lg:btn-md btn-secondary text-white">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;