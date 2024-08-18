import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const BannerCarousel = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} interval={3000} transitionTime={1000} showThumbs={false} showStatus={false} showArrows={false}>
                <div>
                    <img src="https://i.ibb.co/7j9chXC/kawasaki-ninja.png" alt=''/>
                </div>
                
                <div>
                    <img src="https://i.ibb.co/z4PZQ24/intruder.png" alt=''/>
                </div>
                <div>
                    <img src="https://i.ibb.co/XDFjc0J/Bajaj-Avenger-160-ABS.webp" alt=''/>
                </div>
                <div>
                    <img src="https://i.ibb.co/hs6KLVG/TVS-Stryker-125-01-Red-Black.png" alt=''/>
                </div>
                <div>
                    <img src="https://i.ibb.co/85fKPJY/4v.png" alt=''/>
                </div>
            </Carousel>
        </div>
    );
};

export default BannerCarousel;