import React from 'react';
import AdertisedItems from '../AdvertisedItems/AdertisedItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import PowerfulBike from '../PowerfulBike/PowerfulBike';

const Home = () => {
    return (
        <div className='my-home font-primary'>
            <Banner></Banner>
            <Categories></Categories>
            <AdertisedItems></AdertisedItems>
            <PowerfulBike></PowerfulBike>
        </div>
    );
};

export default Home;