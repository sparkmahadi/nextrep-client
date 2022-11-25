import React from 'react';
import AdertisedItems from '../AdvertisedItems/AdertisedItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import PowerfulBike from '../PowerfulBike/PowerfulBike';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-3xl font-bold text-center mt-6 uppercase'>Brands</h2>
            <Categories></Categories>
            <h2 className='text-3xl font-bold text-center mt-6 uppercase'>Advertised Items</h2>
            <AdertisedItems></AdertisedItems>
            <h2 className='text-3xl font-bold text-center mt-6 uppercase'>World's Most Powerful Bike</h2>
            <PowerfulBike></PowerfulBike>
        </div>
    );
};

export default Home;