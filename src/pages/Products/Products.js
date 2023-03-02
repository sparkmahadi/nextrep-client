import React, { useState } from 'react';
import BookingModal from './BookingModal';
import ProductsDetails from './ProductsDetails';
import { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { useParams } from "react-router-dom"
import Spinner from '../../components/Spinner/Spinner';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import useCheckAccType from '../../hooks/useCheckAccType';
import ProductDetailsModified from './ProductDetailsModified';

const Products = () => {
    const [item, setItem] = useState(null);
    const { user } = useContext(AuthContext);
    const [accType] = useCheckAccType(user?.email);
    const params = useParams();
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://next-rep-server.vercel.app/category/${params.id}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <div className="custom-align"><Spinner></Spinner></div>
    }
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 min-h-screen font-primary'>
            <Toaster></Toaster>
            <h2 data-aos="fade-down"
                data-aos-duration="2000" className='text-gray-900 text-xl md:text-3xl font-bold text-center mb-5 lg:mb-10 uppercase divider'>Products</h2>

            {/* <div data-aos="fade-right"
                data-aos-duration="2000" className='grid lg:grid-cols-2 3xl:grid-cols-3 gap-5 font-secondary justify-center'>
                {
                    products.map(product => <ProductsDetails
                        key={product._id}
                        product={product}
                        setItem={setItem}
                        accType={accType}
                        user={user}
                        refetch={refetch}
                    ></ProductsDetails>)
                }
            </div> */}

            <div className='grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-5 font-secondary'>
                {
                    products.map(product => <ProductDetailsModified
                        key={product._id}
                        product={product}
                        item={item}
                        setItem={setItem}
                        accType={accType}
                        user={user}
                    ></ProductDetailsModified>)
                }
            </div>
            {
                products.length === 0 &&
                <h2 className='text-center text-lg lg:text-3xl custom-align'>No Products Are Available!!!</h2>
            }
            {
                item &&
                <BookingModal item={item} setItem={setItem} refetch={refetch}></BookingModal>
            }
        </div>
    );
};

export default Products;