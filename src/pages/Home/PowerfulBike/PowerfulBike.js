import React from 'react';

const PowerfulBike = () => {
    return (
        <div className='px-4 py-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h2 className='text-xl md:text-2xl font-bold text-center uppercase divider whitespace-normal lg:whitespace-nowrap'>World's Most Powerful Bike</h2>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos='fade-left' data-aos-duration='1000' src="https://i.ibb.co/7j9chXC/kawasaki-ninja.png" alt='' className="max-w-2xl w-full rounded-lg" />
                    <div data-aos="fade-right" data-aos-duration='1000'>
                        <h3 className="text-2xl md:text-3xl">Kawasaki Ninja H2R</h3>
                        <p className="py-4">Some Kawasaki Ninjas (like the 400) are widely regarded as beginner sport bikes—but the Ninja H2R is no such beast. Make no mistake: the H2R has always been a mean, track-only machine, and that hasn’t changed one bit for the 2022 Kawasaki lineup.
                            <br />
                            The major Japanese bike brands all have a reputation for making killer track bikes, but Kawasaki has done everything in their power to push the envelope with the H2R—which is so streamlined that it doesn’t even have mirrors, turn signals, or headlights. What it does have is a 998cc in-line four supercharged engine, which produces 326 HP and 121.7 lb-ft at 12500 rpm, giving the bike a top speed of approximately 400 km/h. Let us reiterate that this is not a bike for beginners.
                        </p>
                            <p className='text-lg font-bold'>Key Features:</p>
                        <div className='px-4'>
                        <ul className='list-disc list-outside'>
                            <li>Kawasaki Engine Brake Control</li>
                            <li>KCMF (Kawasaki Cornering Management Function)</li>
                            <li>KCLM (Kawasaki Launch Control Mode)</li>
                            <li>KQS (Kawasaki Quick Shifter)</li>
                            <li>KTRC (Kawasaki Traction Control)</li>
                            <li>Supercharged Engine</li>
                            <li>KIBS (Kawasaki Intelligent Anti-Lock Brake System)</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PowerfulBike;