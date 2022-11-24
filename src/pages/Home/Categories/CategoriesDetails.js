import React from 'react';

const CategoriesDetails = ({ category }) => {
    return (
        <div className="card card-compact w-44 bg-base-100 shadow-xl">
            <figure><img className='' src={category.img} alt="brands" /></figure>
            <div className="card-body">
                <h2 className="card-title text-gray-900 justify-center">{category.brandName}</h2>
            </div>
        </div>
    );
};

export default CategoriesDetails;