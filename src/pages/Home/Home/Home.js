import React from 'react';
import AdertisedItems from '../AdvertisedItems/AdertisedItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdertisedItems></AdertisedItems>
        </div>
    );
};

export default Home;