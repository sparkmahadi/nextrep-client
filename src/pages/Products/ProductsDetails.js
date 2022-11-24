import React from 'react';
import { MdVerified } from "react-icons/md";

const ProductsDetails = ({ product, setItem }) => {
    const { condition, description, engineCapacity, img, location, mobile, name, originalPrice, postedTime, purchasedYear, resalePrice, totalRun, usedYear, sellerName, sellerVerified } = product;
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
                        <p className=''>
                            <span className='font-bold items-center'>Seller: </span>
                            <span className='flex gap-2 items-center'>
                                <span>{sellerName}</span>
                                <span>{sellerVerified ? <MdVerified className="w-4 h-4 inline text-blue-500" /> : undefined}</span>
                            </span>
                        </p>
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
                    <label onClick={()=>setItem(product)} className="btn btn-primary w-full" htmlFor="product-booking-modal">open modal</label>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;