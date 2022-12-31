import React from 'react';
import { Helmet } from 'react-helmet-async';
import AdertisedItems from '../AdvertisedItems/AdertisedItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import PowerfulBike from '../PowerfulBike/PowerfulBike';
import Reviews from '../Reviews/Reviews';
import Search from '../Search/Search';

const Home = () => {
    return (
        <div className='my-home font-primary'>
            <Helmet>
                <title>NextRep | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <Search></Search>
            <AdertisedItems></AdertisedItems>
            <Reviews></Reviews>
            <PowerfulBike></PowerfulBike>
        </div>
    );
};

export default Home;