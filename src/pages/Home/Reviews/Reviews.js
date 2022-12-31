import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { BiCommentDetail } from 'react-icons/bi';
import './Reviews.css'

const Reviews = () => {
    const reviews = [
        {
            name: 'Tamjid ahmed',
            details: "Look wise it's the best bike in this price range and in my opinion. The mileage is pretty average, but a city ride may be a good choice. But for long tours, you may have some problems with mileage, but the riding experience is excellent, in my opinion overall a good bike for city rides and looks."
        },
        {
            name: 'Volodymyr Nesterenko',
            details: "Everything worked well. We appreciated a simple process. Listing page, chat with a seller, the auction, escrow service – everything was great and we didn’t need anything on top."
        },
        {
            name: 'Md. Sojib',
            details: 'The best darn place for sellers, run by progressive humans with your happiness in mind. Fair and honest for sellers and buyers. No upfront fees.'
        },
        {
            name: 'John Chen',
            details: 'Life changing site. I sold for $5000. It gave me what I wanted.'
        },
        {
            name: 'Rofique Mia',
            details: 'This is an amazing bike, it offered a good mileage and the experience was great. It comes with good features. Its engine is just amazing. Go for it.'
        },
        
    ]
    return (
        <div data-aos="zoom-in" className='px-4 py-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h2 className='text-xl md:text-3xl font-bold text-center uppercase divider'>User Reviews</h2>
            <div className='pt-3'>
                <div data-aos="fade-left" className=''>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        speed={800}
                        effect='cards'
                        loop
                        spaceBetween={30}
                        breakpoints={{
                            640: {
                              width: 640,
                              slidesPerView: 1,
                            },
                            768: {
                              width: 768,
                              slidesPerView: 2,
                            },
                          }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                    <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {
                            reviews.map((review, i) =>
                                <SwiperSlide>
                                    <div key={i} className="flex flex-col justify-between p-5 rounded shadow-lg h-56 bg-card">
                                        <div className=''>
                                            <div className='flex justify-between mb-2 items-center'>
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50">
                                                    <BiCommentDetail className='w-6 h-6 text-gray-900' />
                                                </div>
                                                <h6 className="font-semibold">{review.name}</h6>
                                            </div>
                                            <p className="mb-3 text-sm">
                                                {review.details}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }

                    </div>
                    
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Reviews;