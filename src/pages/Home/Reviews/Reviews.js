import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { BiCommentDetail } from 'react-icons/bi';
import './Reviews.css'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import Spinner from '../../../components/Spinner/Spinner';
import { useState } from 'react';

const Reviews = () => {
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const { data: reviews = [], refetch, isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/reviews`);
            const data = await res.json();
            return data;
        }
    })

    const handleAddReview = (event) => {
        event.preventDefault();
        setLoading(true);
        const reviewDetails = event.target.reviewDetails.value;
        const review = { name: user.displayName, details: reviewDetails }
        if (review) {
            fetch('http://localhost:5000/reviews', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success('Review Added Successfully');
                        refetch();
                        event.target.reset();
                        setLoading(false);
                    }
                })
        }
    }
    return (
        <div data-aos="zoom-in" className='px-4 py-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h2 className='text-xl md:text-2xl font-bold text-center uppercase divider'>User Reviews</h2>
            {
                isLoading && <div className="custom-align"><Spinner></Spinner></div>
            }
            {
                loading && <div className="custom-align"><Spinner></Spinner></div>
            }
            <div className='pt-5'>
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
                                reviews?.map((review, i) =>
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

            <div className='mt-5'>
                <h5 className='text-center mb-3 font-semibold'>Add Your Review</h5>
                {
                    user &&
                    <form data-aos="fade-right" data-aos-duration="1000" onSubmit={handleAddReview} className='container mx-auto bg-white px-10  rounded-lg text-gray-900 md:w-2/3 lg:w-1/2'>

                        <div className="mb-3">
                            <textarea type="text" name='reviewDetails' id="reviewDetails" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Write your opinions..." required />
                        </div>
                        <button type="submit" className="btn btn-sm btn-primary block mx-auto normal-case">Submit</button>
                    </form>
                }
            </div>
        </div>
    );
};

export default Reviews;