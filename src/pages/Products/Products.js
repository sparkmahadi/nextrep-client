import React, { useState } from 'react';
import BookingModal from './BookingModal';
import ProductsDetails from './ProductsDetails';
import { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { useParams } from "react-router-dom"
import Spinner from '../../components/Spinner/Spinner';

const Products = () => {
    const [item, setItem] = useState(null);

    let params = useParams();
    const {data: products = [], refetch, isLoading} = useQuery({
        queryKey: ['products'],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/category/${params.id}`);
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <div className='custom-align'><Spinner></Spinner></div>
    }
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <Toaster></Toaster>
            <h2 className='text-gray-900 md:text-3xl font-bold text-center mb-5 uppercase'>Products</h2>

            <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-5 font-secondary'>
                {
                    products.map(product => <ProductsDetails
                         key={product._id} 
                         product={product}
                         setItem={setItem}
                         refetch={refetch}
                         ></ProductsDetails>)
                }
            </div>
            
            {
                item &&
                <BookingModal item={item} setItem={setItem} refetch={refetch}></BookingModal>
            }
        </div>
    );
};

export default Products;