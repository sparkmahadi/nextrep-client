import React from 'react';
import { MdVerified } from "react-icons/md";
import { format } from 'date-fns';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { BsThreeDots } from 'react-icons/bs';
import ProductDetailsModal from './ProductDetailsModal';
import { useState } from 'react';

const ProductDetailsModified = ({ product, item, setItem, accType, user }) => {
    const [productShow, setProductShow] = useState(null);

    const navigate = useNavigate();
    const { condition, description, engineCapacity, img, location, mobile, name, originalPrice, postedTime, purchasedYear, resalePrice, totalRun, usedYear, sellerName, sellerVerified } = product;

    const handleReportItem = (product, user) => {
        if (!user) {
            return navigate('/login')
        }
        const report = {
            productName: product.name,
            productId: product._id,
            buyerEmail: user.email,
            buyerName: user.displayName,
            reportedTime: format(new Date(), 'PP')
        }
        const agree = window.confirm(`Are you sure to report ${product.name}`)
        if (agree) {
            fetch(`https://next-rep-server.vercel.app/reportedItems?email=${user.email}&productId=${product._id}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(report)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success(`${product.name} is reported successfully!`)
                    }
                    else {
                        toast.error(data.message);
                    }
                })
        }
    }

    return (
        <div>

            <div data-aos='zoom-in' data-aos-duration='2000' key={name} className="flex flex-col overflow-hidden rounded-lg shadow-lg border">
                <Toaster></Toaster>
                <div className="flex-shrink-0">
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img className="h-48 w-full object-cover cursor-pointer" src={img} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                </div>

                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                        <div className='flex justify-between items-center'>
                            <p className="text-sm font-medium text-cyan-600">
                                {condition}
                            </p>

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="">
                                    <BsThreeDots className='w-8 h-8 cursor-pointer hover:bg-gray-300 rounded-full p-1.5' />
                                </label>
                                <ul tabIndex={0} className="dropdown-content border menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <label onClick={() => setProductShow(product)} htmlFor="product-details-modal" className="">View Details</label>
                                    </li>
                                    <li>
                                        <button onClick={()=>handleReportItem(product, user)}>Report</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-2 block">
                            <p className="text-xl font-semibold text-gray-900">{name}</p>
                            <p className="mt-3 md:h-20 text-gray-500 text-sm xl:text-base">{description.slice(0, 120) + '...'}</p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between md:text-sm xl:text-base font-semibold">
                        <div >
                            <p>{resalePrice} BDT</p>
                        </div>
                        {/* <p>|</p> */}
                        <div className="">
                            <p className="">
                                {/* {location} */}
                                {totalRun} KM
                            </p>
                        </div>
                        {/* <p>|</p> */}
                        <div className="flex space-x-1">
                            <p>{usedYear} Year(s)</p>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        accType === 'Buyer' || !accType ?
                            <label onClick={() => setItem(product)} className="btn btn-secondary btn-sm lg:btn-md w-full rounded-t-none rounded-bl-none" htmlFor="product-booking-modal">Book Now</label>
                            :
                            undefined
                    }
                </div>
            </div>

            {
                productShow &&
                <ProductDetailsModal
                condition={condition}
                description={description}
                engineCapacity={engineCapacity}
                img={img}
                location={location}
                mobile={mobile}
                name={name}
                originalPrice={originalPrice}
                postedTime={postedTime}
                purchasedYear={purchasedYear}
                resalePrice={resalePrice}
                totalRun={totalRun}
                usedYear={usedYear}
                sellerName={sellerName}
                sellerVerified={sellerVerified}
                setProductShow={setProductShow}
                handleReportItem={handleReportItem}
                setItem={setItem}
                product={product}
                user={user}
                    />
            }

        </div>
    );
};

export default ProductDetailsModified;