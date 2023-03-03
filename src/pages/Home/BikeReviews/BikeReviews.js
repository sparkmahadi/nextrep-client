import React from 'react';
import { useState } from 'react';

const BikeReviews = () => {
    const [showedReview, setShowedReview] = useState({});
    const reviews = [
        {
            title: 'TVS Apache RTR 160 4V X-Connect ABS Test Ride Review',
            details: "It’s a comfortable motorcycle with a pipe handlebar, space for 2 elder people to sit on it, and a very powerful engine under the fuel tank, that’s the main thing about an RTR, it must be extremely fast.So let's go & see what is what!  The name Smart X Connect refers to the Bluetooth connectivity you have now with this bike which can be used with the help of an app & it has many many features on its sleeves. First, it will notify you about any incoming phone call or SMSThen when you will run low on fuel, using google Maps will redirect you to the nearest fuel pump.Using the app’s map you can select a destination and on the speedometer, it will show the turn by turn navigation. With the help of the app, you can see many telemetries of your ride,  including top speed, average mileage & many othersFinally with the help of a gyroscope you can see the lean angle of the bike on a particular corner at a particular speed.& to maintain all this they have a dedicated I button on the top of the switch gears. The onboard speedometer like much other info also shares the average top speed, top speed achieved & lap timer. With the expectation of adding this software TVS also added a brand new LED headlight, a first for RTR 4V. This new LED headlight makes the bike more powerful which showcased its tremendous power. They also changed the decal off the bike & now added a dual-tone seat cover. Front indicators are now moved a bit higher.",
            img: 'https://i.ibb.co/85fKPJY/4v.png',
            date: '26-Feb-2022'
        },
        {
            title: 'Suzuki Gixxer 155 Fi ABS Test Ride Review',
            details: "Launched back in 2014 the basic design of the bike hasn’t changed for a long time, they changed the graphics of the bike with new colour option & added a rear disc brake but last year they did it, Suzuki bought out the new Suzuki Gixxer but now the bike comes with a new fuel injected system in the bike & add to that single-channel ABS with the front wheel. Lets see the test ride review of Suzuki Gixxer 155 Fi ABS. Launched back in 2014 the basic design of the bike hasn’t changed for a long time, they changed the graphics of the bike with new colour option & added a rear disc brake but last year they did it, Suzuki bought out the new Suzuki Gixxer but now the bike comes with a new fuel injected system in the bike & add to that single-channel ABS with the front wheel. Lets see the test ride review of Suzuki Gixxer 155 Fi ABS. Suzuki Gixxer 155 Fi ABS Test Ride Review - Team BikeBD. They made lots of cosmetic changes to the bike, the bike now has a new full-LED headlight assembly with no front fender over it, it does look NAKED & gives more of a Streetfighter attitude. The new plastic panel is of good quality but in this segment, I was expecting it to be better, there isn’t any complaint about the fit & finish of the bike. I love the headlight illumination, some companies mess it up with LED headlights but this one is good, very very good for highway riding.",
            img: 'https://i.ibb.co/ng8BH5R/gsxr.jpg',
            date: '26-Feb-2022'
        },
        // {
        //     title: 'Yamaha R15 Fi-ABS Test Ride Review ',
        //     details: "Yamaha r15 is beautiful in look and power bike.It mileage is 45 better than copaired to other sports bike.The price is uder 2lakhs with all paper works.Good comfort in riding.Excellent grip in wheels.Good shock ups.Good control in riding at speed also.Good look from all the angles.The headlight is also better one.It is comfortable for sitting two persons also.Goodlook for all persons.Keep ride better and enjoy.",
        //     img: 'https://i.ibb.co/Rp1TTJC/yamaha-r15-v4-dark-right-side-view-930x620.webp',
        //     date: '26-Feb-2022'
        // },
        {
            title: 'Honda CB Hornet 160R 10,000 KM Test Ride Review',
            details: "Bangladesh Honda Pvt Ltd unveiled the street naked sports bike Honda CB Hornet 160R on 16th February 2018 at ICCB near Purbachol 300 feet. The bike was the first from Honda to enter in the premium segment in Bangladesh with a muscular look and a wider rear tyre. Today I will talk about the 10,000 km riding Experience with Honda CB Hornet 160R.  We have already published the Test Ride Review report after we tested the bike for 2500 km. Now in this article, we will talk about what are the issues we faced in our 10,000 km testing which will further elaborate on the performance of the motorcycle. Muscular fuel tank with attractive graphics,140 section wider rear tyre.,276 mm petal disc brake with Nissin calliper.,X Shaped LED tail light,5- spoke split black alloys wheels,163 cc powerful HET (Honda Eco Technology) engine.,3 step adjustable mono-shock suspension,MF (Maintenance Free) Battery,Viscous air filter.,AHO ( Automation Headlight On),Sealed Chain (From October 2018)",
            img: 'https://i.ibb.co/pft8Qfg/hornet.webp',
            date: '26-Feb-2022'
        },

    ]
    return (
        <div data-aos="fade-right" data-aos-duration="2000" className='px-4 py-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h2 className='text-xl md:text-2xl font-bold text-center uppercase divider'>Bike Reviews</h2>
            <div className='pt-5 grid lg:grid-cols-3 gap-5 lg:gap-10'>
                {
                    reviews.map((review, i) =>
                        <div data-aos="zoom-in" data-aos-duration="2000" key={i} className="card w-96 bg-base-100 shadow-xl">
                            <figure className='h-64'><img src={review.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{review.title}</h2>
                                <p>{review.details.slice(0, 200)}...</p>
                                <div className="card-actions justify-end">
                                    <label onClick={() => setShowedReview(review)} htmlFor="bike-review-modal" className="btn btn-sm btn-secondary normal-case">View Details</label>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="bike-review-modal" className="modal-toggle" />

            <label htmlFor="bike-review-modal" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="text-lg font-bold text-center mb-5">{showedReview.title}</h3>
                    <img src={showedReview.img} alt="" />
                    <p className="py-4">{showedReview.details}</p>

                    <div className="modal-action">
                        <label htmlFor="bike-review-modal" className="btn">Close</label>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default BikeReviews;