import React from 'react';
import { useState } from 'react';
import BookingModal from '../../Products/BookingModal';
import { useQuery } from '@tanstack/react-query';
import ProductsDetails from '../../Products/ProductsDetails';
import Spinner from '../../../components/Spinner/Spinner';

const AdertisedItems = () => {
    const [item, setItem] = useState(null);
    const {data: advertisedProducts = [], refetch, isLoading} = useQuery({
        queryKey: ['advertisedProducts'],
        queryFn: async () =>{
            const res = await fetch(`https://next-rep-server.vercel.app/advertisedProducts`);
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <div className='custom-align'><Spinner></Spinner></div>
    }
    return (
        <>
        {
            advertisedProducts.length > 0 &&
            <div className='px-4 pb-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h2 className='text-xl pb-7 md:text-3xl font-bold text-center uppercase divider'>Advertised Items</h2>
            <div className=''>
                
                <div className='grid lg:grid-cols-2 3xl:grid-cols-3 gap-5 font-secondary'>
                    {
                        advertisedProducts.map(product => <ProductsDetails
                            key={product._id}
                            product={product}
                            setItem={setItem}
                        ></ProductsDetails>)
                    }
                </div>

                {
                    item &&
                    <BookingModal item={item} setItem={setItem} refetch={refetch}></BookingModal>
                }
            </div>
        </div>
        }
        </>
    );
};

export default AdertisedItems;