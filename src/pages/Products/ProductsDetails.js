import React from 'react';
import { MdVerified } from "react-icons/md";
import useCheckAccType from '../../hooks/useCheckAccType';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { format } from 'date-fns';
import toast, { Toaster } from 'react-hot-toast';

const ProductsDetails = ({ product, setItem }) => {
    const { user } = useContext(AuthContext);
    const [accType] = useCheckAccType(user?.email);

    const { condition, description, engineCapacity, img, location, mobile, name, originalPrice, postedTime, purchasedYear, resalePrice, totalRun, usedYear, sellerName, sellerVerified } = product;

    const handleReportItem = (product, user) => {
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
        <div className="card card-compact border w-full shadow-2xl text-gray-800">
            <Toaster></Toaster>
            <figure><img className='w-full h-80 lg:h-[500px] rounded-t-lg relative' src={img} alt="bike" /></figure>
            <h2 className="text-center text-xl md:text-2xl font-bold bg-primary p-2 text-white uppercase">{name}</h2>
            <div className="card-body">
                <div className={`${accType === 'Buyer' ? 'mb-10 md:mb-15' : undefined}`}>
                    <div className='sm:flex justify-around text-lg lg:text-sm'>
                        <div className='sm:w-1/2 text-center'>
                            <p className='text-sm lg:text-base'><span className='font-bold'>Location:</span> {location}</p>
                            <p className='text-sm lg:text-base'><span className='font-bold'>Mobile No:</span> {mobile}</p>
                            <p className='text-sm lg:text-base'><span className='font-bold'>Posted Time:</span> {postedTime}</p>
                            <p className='text-sm lg:text-base'><span className='font-bold'>Purchased Year:</span> {purchasedYear}</p>
                            <p className='text-sm lg:text-base flex justify-center gap-1'>
                                <span className='font-bold items-center'>Seller: </span>
                                <span className='sm:flex gap-2 items-center'>
                                    <span>{sellerName}</span>
                                    <span>{sellerVerified ? <MdVerified className="w-4 h-4 inline text-blue-500" /> : undefined}</span>
                                </span>
                            </p>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className='sm:w-1/2 text-center'>
                            <p className='text-sm lg:text-base'><span className='font-bold'>Condition: </span>{condition}</p>
                            <p className='text-sm lg:text-base'><span className='font-bold'>Engine Capacity:</span> {engineCapacity}cc</p>
                            <p className='text-sm lg:text-base'><span className='font-bold'>Original Price:</span> {originalPrice} TK</p>
                            <p className='text-sm lg:text-base'><span className='font-bold'>Total Run:</span> {totalRun} KM</p>
                            <p className='text-sm lg:text-base'><span className='font-bold'>Used:</span> {usedYear} Year(s)</p>
                        </div>
                    </div>
                    <p title={description} className='text-sm lg:text-base text-center py-2'><span className='font-bold' >Details:</span> {description.length > 100 ? description.slice(0,100)+'...' : description}</p>
                </div>
                <div className={`text-lg lg:text-base md:w-1/3 rounded-lg bg-fifth text-white absolute p-2 top-5`}>
                    <p className='text-center text-sm lg:text-xl font-bold'>TK. {resalePrice}/= </p>
                </div>
                {
                    accType === 'Buyer' &&
                    <div className="flex absolute bottom-0 rounded-b-lg w-full right-0 left-0">
                        <button className='btn btn-sm lg:btn-md border-none bg-red-700 hover:bg-red-800 text-white rounded-t-none rounded-br-none w-1/2' onClick={() => handleReportItem(product, user)}>Report to Admin</button>
                        <label onClick={() => setItem(product)} className="btn btn-secondary btn-sm lg:btn-md w-1/2  rounded-t-none rounded-bl-none" htmlFor="product-booking-modal">Book Now</label>
                    </div>
                }
            </div>
        </div>
    );
};

export default ProductsDetails;