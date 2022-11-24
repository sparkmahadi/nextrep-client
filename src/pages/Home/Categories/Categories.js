import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoriesDetails from './CategoriesDetails';

const Categories = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                
                <div className="hero-content text-center text-neutral-content">
                    <div className='grid grid-cols-6 gap-5'>

                        {
                            categories.map(category => <CategoriesDetails key={category._id} category={category}></CategoriesDetails>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;