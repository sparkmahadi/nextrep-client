import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import BookingModal from '../../Products/BookingModal';
import { useQuery } from '@tanstack/react-query';
import ProductsDetails from '../../Products/ProductsDetails';

const AdertisedItems = () => {
    const [item, setItem] = useState(null);
    // const advertised = true;
    const {data: advertisedProducts = [], refetch, isLoading} = useQuery({
        queryKey: ['advertisedProducts'],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/advertisedProducts`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-3xl text-center font-bold uppercase'>Advertised Items</h2>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <Toaster></Toaster>

                <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-5 font-secondary'>
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
                    <BookingModal item={item} setItem={setItem}></BookingModal>
                }
            </div>
        </div>
    );
};

export default AdertisedItems;