import React from 'react';

const CategoriesDetails = ({category}) => {
    return (
        <div className="card card-compact w-44 h-32 bg-base-100 shadow-xl">
            <figure><img className='w-36' src={category.img} alt="Shoes" /></figure>
        </div>
    );
};

export default CategoriesDetails;