import React from 'react';
import { Toaster } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { MdVerified } from 'react-icons/md';
import { useState } from 'react';

const ProductDetailsModal = ({condition, description, engineCapacity, img, location, mobile, name, originalPrice, postedTime, purchasedYear, resalePrice, totalRun, usedYear, sellerName, sellerVerified, accType, setProductShow, handleReportItem, setItem, product, user}) => {
    const [loading, setLoading] = useState(false);

    // console.log(productShow, product, item, setItem, accType, user, handleReportItem);

    // const { condition, description, engineCapacity, img, location, mobile, name, originalPrice, postedTime, purchasedYear, resalePrice, totalRun, usedYear, sellerName, sellerVerified } = productShow;

    const bikeProperties = [
        { title: "Location", value: location },
        { title: "Mobile No", value: mobile },
        { title: "Posted Time", value: postedTime },
        { title: "Purchased Year", value: purchasedYear },
        { title: "Condition", value: condition },
        { title: "Engine Capacity", value: engineCapacity + ' cc' },
        { title: "Original Price", value: originalPrice + " TK" },
        { title: "Total Run", value: totalRun + ' KM' },
        { title: "Used", value: usedYear + " Year(s)" },
    ]

    console.log(bikeProperties);
    return (
        <>
            {/* <label onClick={() => setProductShow(product)} htmlFor="product-details-modal" className="">View Details</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="product-details-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl relative">
                <label onClick={()=>setProductShow(null)} htmlFor="product-details-modal" className="btn btn-sm btn-circle absolute right-2 top-2 z-10">✕</label>

                    {/* modal card */}
                    <div className="card card-compact border w-full shadow-2xl text-gray-800">
                        <Toaster></Toaster>
                        <figure>
                            <PhotoProvider>
                                <PhotoView src={img}>
                                    <img className='object-cover object-center w-full rounded-md  rounded-t-lg relative' src={img} alt="bike" />
                                </PhotoView>
                            </PhotoProvider>
                        </figure>
                        <h2 className="text-center text-xl md:text-2xl font-bold bg-primary p-2 text-white uppercase">{name}</h2>
                        <div className="card-body">
                            <div className={`${accType === 'Buyer' || !accType ? 'mb-10 md:mb-15' : undefined}`}>
                                <div className='text-lg lg:text-base lg:px-20'>

                                    <div className="overflow-x-auto w-full">
                                        <table className="table w-full border">
                                            <tbody>
                                                {
                                                    bikeProperties.map((property =>
                                                        <tr>
                                                            <td>{property.title}</td>
                                                            <td>{property.value}</td>
                                                        </tr>
                                                    ))
                                                }
                                                <tr>
                                                    <td>Seller:</td>
                                                    <td>
                                                        <p className='text-sm lg:text-base flex gap-1'>
                                                            <span className='sm:flex gap-2 items-center'>
                                                                <span>{sellerName}</span>
                                                                <span>{sellerVerified ? <MdVerified className="w-4 h-4 inline text-blue-500" /> : undefined}</span>
                                                            </span>
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>


                                    <div className=''>
                                        <p className='text-sm lg:text-base py-5'><span className='font-bold' >Details:</span> {description}</p>
                                    </div>
                                </div>


                            </div>
                            <div className={`text-lg lg:text-base md:w-1/3 rounded-lg bg-fifth text-white absolute p-2 top-5`}>
                                <p className='text-center text-sm lg:text-xl font-bold'>TK. {resalePrice}/= </p>
                            </div>
                            {
                                accType === 'Buyer' || !accType ?
                                    <div className="flex absolute bottom-0 rounded-b-lg w-full right-0 left-0">
                                        <button className='btn btn-sm lg:btn-md border-none bg-red-700 hover:bg-red-800 text-white rounded-t-none rounded-br-none w-1/2' onClick={() => handleReportItem(product, user)}>Report to Admin</button>
                                        <label onClick={() => setItem(product)} className="btn btn-secondary btn-sm lg:btn-md w-1/2  rounded-t-none rounded-bl-none" htmlFor="product-booking-modal">Book Now</label>
                                    </div>
                                    :
                                    undefined
                            }
                        </div>
                    </div>



                    <div className="modal-action">
                        <label onClick={()=>setProductShow(null)} htmlFor="product-details-modal" className="btn w-1/3 mx-auto">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsModal;