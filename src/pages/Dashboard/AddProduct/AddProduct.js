import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { format } from 'date-fns';

const AddProduct = () => {
    const {user} = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imgHostKey);

    const handleAddProduct = (data) => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=7371ad88e02d46173fd5251181daa069`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imageData=>{
            if(imageData.success){


                const { condition, description, engineCapacity, location, mobile, name, originalPrice, purchasedYear, resalePrice, totalRun, usedYear, brandName } = data;
                let product = {
                    name,
                    brandName,
                    condition,
                    location,
                    originalPrice,
                    resalePrice,
                    usedYear,
                    totalRun,
                    engineCapacity,
                    purchasedYear,
                    mobile,
                    description
                }
                product.img = imageData.data.url;
                const date = format(new Date(), 'PP');
                product.postedTime = date;
                product.sellerName = user?.displayName;
                product.sellerEmail= user?.email;
                product.status = 'Available';
                product.sellerVerified = false;
                if(brandName === 'Hero'){
                    product.brandId = 1;
                }
                if(brandName === 'Honda'){
                    product.brandId = 2;
                }
                if(brandName === 'Lifan'){
                    product.brandId = 3;
                }
                if(brandName === 'Suzuki'){
                    product.brandId = 4;
                }
                if(brandName === 'TVS'){
                    product.brandId = 5;
                }
                if(brandName === 'Yamaha'){
                    product.brandId = 6;
                }
                if(brandName === 'Bajaj'){
                    product.brandId = 7;
                }
        
                console.log(product);

                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${name} is added successfully`);
                })
                
            }
        })



    }
    return (
        <div>
            <Toaster></Toaster>
            <div className=''>
                <h2 className="text-3xl text-center">Add A Product</h2>

                <form onSubmit={handleSubmit(handleAddProduct)} className='mx-auto max-w-xl'>

                    <div className="max-w-3xl flex justify-between items-start my-5">
                        <label className='block'> <span className="text-lg">Product Name:</span></label>
                        <div>
                            <input type="text" {...register("name", {
                                required: "Product Name is Required"
                            })} className="input input-bordered w-96" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                    </div>

                    <div className="max-w-3xl flex justify-between items-start my-5">
                        <label className="block"> <span className="text-lg">Brand Name:</span></label>
                        <select
                            {...register('brandName')}
                            className="select input-bordered w-96">
                            <option value="Hero">Hero</option>
                            <option value="Honda">Honda</option>
                            <option value="Yamaha">Yamaha</option>
                            <option value="Suzuki">Suzuki</option>
                            <option value="Lifan">Lifan</option>
                            <option value="Bazaz">Bazaz</option>
                        </select>
                    </div>

                    <div className="max-w-3xl flex justify-between items-start my-5">
                        <label className="block"> <span className="text-lg">Condition</span></label>
                        <select
                            {...register('condition')}
                            className="select input-bordered w-96">
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>
                    </div>

                    <div className="max-w-3xl flex justify-between items-start mb-5">
                        <label className='block'> <span className="text-lg">Total Run (KM):</span></label>
                        <div>
                            <input type="text" {...register("totalRun", {
                                required: "Total Run is Required"
                            })} className="input input-bordered w-96" />
                            {errors.totalRun && <p className='text-red-500'>{errors.totalRun.message}</p>}
                        </div>
                    </div>

                    <div className="max-w-3xl flex justify-between items-start mb-5">
                        <label className='block'> <span className="text-lg">Engine Capacity:</span></label>
                        <div>
                            <input type="text" {...register("engineCapacity", {
                                required: "Engine Capacity is Required"
                            })} className="input input-bordered w-96" />
                            {errors.engineCapacity && <p className='text-red-500'>{errors.engineCapacity.message}</p>}
                        </div>
                    </div>

                    <div className="max-w-3xl flex justify-between items-start mb-5">
                        <label className='block'> <span className="text-lg">Used Time (Year):</span></label>
                        <div>
                            <input type="text" {...register("usedYear", {
                                required: "Used Time is Required"
                            })} className="input input-bordered w-96" />
                            {errors.usedYear && <p className='text-red-500'>{errors.usedYear.message}</p>}
                        </div>
                    </div>

                    <div className="max-w-3xl flex justify-between items-start mb-5">
                        <label className='block'> <span className="text-lg">Purchased Year:</span></label>
                        <div>
                            <input type="text" {...register("purchasedYear", {
                                required: "Purchased Year is Required"
                            })} className="input input-bordered w-96" />
                            {errors.purchasedYear && <p className='text-red-500'>{errors.purchasedYear.message}</p>}
                        </div>
                    </div>

                    <div className="max-w-3xl flex justify-between items-start mb-5">
                        <label className='block'> <span className="text-lg">Original Price:</span></label>
                        <div>
                            <input type="text" {...register("originalPrice", {
                                required: "Original Price is Required"
                            })} className="input input-bordered w-96" />
                            {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                        </div>
                    </div>

                    <div className="max-w-3xl flex justify-between items-start mb-5">
                        <label className='block'> <span className="text-lg">Selling Price:</span></label>
                        <div>
                            <input type="text" {...register("resalePrice", {
                                required: "Selling Price is Required"
                            })} className="input input-bordered w-96" />
                            {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
                        </div>
                    </div>

                    <div className="max-w-3xl flex justify-between items-start mb-5">
                        <label className='block'> <span className="text-lg">Location:</span></label>
                        <div>
                            <input type="text" {...register("location", {
                                required: "Location is Required"
                            })} className="input input-bordered w-96" />
                            {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                        </div>
                    </div>

                    <div className="max-w-3xl flex justify-between items-start mb-5">
                        <label className='block'> <span className="text-lg">Mobile:</span></label>
                        <div>
                            <input type="text" {...register("mobile", {
                                required: "Mobile No. is Required"
                            })} className="input input-bordered w-96" />
                            {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
                        </div>
                    </div>

                    <div className="max-w-3xl flex justify-between items-start mb-5">
                        <label className='block'> <span className="text-lg">Description:</span></label>
                        <div>
                            <textarea type="text" {...register("description", {
                                required: "Description is Required"
                            })} className="textarea textarea-bordered w-96" />
                            {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                        </div>
                    </div>

                    <div className="max-w-3xl flex justify-between items-start mb-5">
                        <label className="block"> <span className="text-lg">Photo:</span></label>
                        <div>
                            <input type="file" {...register("image", {
                                required: "Photo is Required"
                            })} className="input input-bordered w-96" />
                            {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                        </div>
                    </div>


                    <input className='btn btn-secondary w-full mt-4' value="Add Product" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;