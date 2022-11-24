import React from 'react';

const ProductsDetails = ({ product }) => {
    const { condition, description, engineCapacity, img, location, mobile, name, originalPrice, postedTime, purchasedYear, resalePrice, totalRun, usedYear, sellerName } = product;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl text-gray-800">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center md:text-2xl font-bold">{name}</h2>
                <div className='flex justify-around text-lg lg:text-sm'>
                    <div>
                        <p><span className='font-bold'>Location:</span> {location}</p>
                        <p><span className='font-bold'>Mobile No:</span> {mobile}</p>
                        <p><span className='font-bold'>Posted Time:</span> {postedTime}</p>
                        <p><span className='font-bold'>Purchased Year:</span> {purchasedYear}</p>
                        <p><span className='font-bold'>Seller: </span>{sellerName}</p>
                    </div>
                    <div className="divider divider-horizontal"></div> 
                    <div>
                        <p><span className='font-bold'>Condition: </span>{condition}</p>
                        <p><span className='font-bold'>Engine Capacity:</span> {engineCapacity}cc</p>
                        <p><span className='font-bold'>Original Price:</span> {originalPrice} TK</p>
                        <p><span className='font-bold'>Total Run:</span> {totalRun} KM</p>
                        <p><span className='font-bold'>Used:</span> {usedYear} Year(s)</p>
                    </div>
                </div>
                    <div className='text-lg lg:text-base'>
                    <p className='text-center'><span className='font-bold'>Details:</span> {description}</p>
                    <p className='text-center font-bold'>Reselling Price: {resalePrice}/= TK</p>
                    </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;