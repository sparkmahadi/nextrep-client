import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoriesDetails from './CategoriesDetails';

const Categories = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div className='"px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                    <div className='grid grid-cols-6 gap-6'>

                        {
                            categories.map(category => <CategoriesDetails key={category._id} category={category}></CategoriesDetails>)
                        }

                    </div>
        </div>
    );
};

export default Categories;