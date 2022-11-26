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

    const handleReportItem = (product, user) =>{
        const report = {
            productName: product.name,
            productId: product._id,
            buyerEmail: user.email,
            buyerName: user.displayName,
            reportedTime: format(new Date(), 'PP')
        }
        const agree = window.confirm(`Are you sure to report ${product.name}`)
        if(agree){
            fetch(`http://localhost:5000/reportedItems?email=${user.email}&productId=${product._id}`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(report)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                toast.success(`${product.name} is reported successfully!`)
            }
            else {
                toast.error(data.message);
            }
        })
        }
    }
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl text-gray-800">
            <Toaster></Toaster>
            <figure><img className='w-full h-[500px]' src={img} alt="bike" /></figure>
            <div className="card-body">
                <h2 className="text-center md:text-2xl font-bold">{name}</h2>
                <div className='sm:flex justify-around text-lg lg:text-sm'>
                    <div className='sm:w-1/2'>
                        <p><span className='font-bold'>Location:</span> {location}</p>
                        <p><span className='font-bold'>Mobile No:</span> {mobile}</p>
                        <p><span className='font-bold'>Posted Time:</span> {postedTime}</p>
                        <p><span className='font-bold'>Purchased Year:</span> {purchasedYear}</p>
                        <p className=''>
                            <span className='font-bold items-center'>Seller: </span>
                            <span className='sm:flex gap-2 items-center'>
                                <span>{sellerName}</span>
                                <span>{sellerVerified ? <MdVerified className="w-4 h-4 inline text-blue-500" /> : undefined}</span>
                            </span>
                        </p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className='sm:w-1/2'>
                        <p><span className='font-bold'>Condition: </span>{condition}</p>
                        <p><span className='font-bold'>Engine Capacity:</span> {engineCapacity}cc</p>
                        <p><span className='font-bold'>Original Price:</span> {originalPrice} TK</p>
                        <p><span className='font-bold'>Total Run:</span> {totalRun} KM</p>
                        <p><span className='font-bold'>Used:</span> {usedYear} Year(s)</p>
                    </div>
                </div>
                <div className='text-lg lg:text-base pb-28'>
                    <p className='text-center'><span className='font-bold'>Details:</span> {description}</p>
                    <p className='text-center font-bold'>Reselling Price: {resalePrice}/= TK</p>
                </div>
                {
                    accType === 'Buyer' &&
                    <div className="">
                        <label onClick={() => setItem(product)} className="btn btn-primary rounded-t-none absolute bottom-0 w-full right-0 left-0" htmlFor="product-booking-modal">Book Now</label>
                        <button className='btn btn-error hover:bg-red-600 text-white rounded-none absolute bottom-16 w-full right-0 left-0' onClick={()=>handleReportItem(product, user)}>Report to Admin</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default ProductsDetails;