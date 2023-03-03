import React from 'react';
import { Helmet } from 'react-helmet-async';
import AdertisedItems from '../AdvertisedItems/AdertisedItems';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner/Banner2';
import BikeReviews from '../BikeReviews/BikeReviews';
import Categories from '../Categories/Categories';
import HowItWorks from '../HowItWorks/HowItWorks';
import PowerfulBike from '../PowerfulBike/PowerfulBike';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className='my-home font-primary'>
            <Helmet>
                <title>NextRep | Home</title>
            </Helmet>
            {/* <Banner></Banner> */}
            <Banner2></Banner2>
            <Categories></Categories>
            <AdertisedItems></AdertisedItems>
            <HowItWorks></HowItWorks>
            <Reviews></Reviews>
            <PowerfulBike></PowerfulBike>
            <BikeReviews></BikeReviews>
        </div>
    );
};

export default Home;