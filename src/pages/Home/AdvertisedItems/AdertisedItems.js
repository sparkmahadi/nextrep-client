import React from 'react';
import { useState } from 'react';
import BookingModal from '../../Products/BookingModal';
import { useQuery } from '@tanstack/react-query';
import ProductsDetails from '../../Products/ProductsDetails';
import Spinner from '../../../components/Spinner/Spinner';
import { AuthContext } from '../../../contexts/UserContext';
import { useContext } from 'react';
import useCheckAccType from '../../../hooks/useCheckAccType';
import ProductDetailsModified from './../../Products/ProductDetailsModified';

const AdertisedItems = () => {
    const [item, setItem] = useState(null);
    const { user } = useContext(AuthContext);
    const [accType] = useCheckAccType(user?.email);

    const { data: advertisedProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['advertisedProducts'],
        queryFn: async () => {
            const res = await fetch(`https://next-rep-server.vercel.app/advertisedProducts`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <div className='custom-align'><div className="custom-align"><Spinner></Spinner></div></div>
    }
    return (
        <>
            {
                advertisedProducts.length > 0 &&
                <div className='px-4 pb-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                    <h2 data-aos="fade-up"
                        data-aos-duration="2000" className='text-xl pb-7 md:text-2xl font-bold text-center uppercase divider mb-3'>Advertised Items
                        </h2>
                    <div className=''>

                        <div className='grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-5 font-secondary'>
                            {
                                advertisedProducts.map(product => <ProductDetailsModified
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