import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsDetails from './ProductsDetails';

const Products = () => {
    const products = useLoaderData();
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h2 className='text-gray-900 md:text-3xl font-bold text-center mb-5 uppercase'>Products</h2>

            <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-5 font-secondary'>
                {
                    products.map(product => <ProductsDetails key={product._id} product={product}></ProductsDetails>)
                }
            </div>
        </div>
    );
};

export default Products;