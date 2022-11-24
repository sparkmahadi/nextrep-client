import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesDetails = ({ category }) => {
    const {img, brandName, brandId} = category;
    return (
        <Link to={`/category/${brandId}`}>
            <div className="card card-compact w-44 bg-base-100 shadow-xl">
                <figure><img className='' src={img} alt="brands" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-gray-900 justify-center">{brandName}</h2>
                </div>
            </div>
        </Link>
    );
};

export default CategoriesDetails;