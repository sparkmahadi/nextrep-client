import React from 'react';
import CategoriesDetails from './CategoriesDetails';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(function (response) {
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <div className='"px-4 py-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h2 className='text-xl md:text-3xl font-bold text-center uppercase divider'>Brands</h2>
            <p className='md:text-xl text-center my-3'>Please Select Your Favorite Brand</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>

                {
                    categories?.map(category => <CategoriesDetails key={category._id} category={category}></CategoriesDetails>)
                }

            </div>
        </div>
    );
};

export default Categories;