import React, { useState } from 'react';
import BookingModal from './BookingModal';
import ProductsDetails from './ProductsDetails';
import { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { useParams} from "react-router-dom"
import Spinner from '../../components/Spinner/Spinner';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import useCheckAccType from '../../hooks/useCheckAccType';

const Products = () => {
    const [item, setItem] = useState(null);
    const { user } = useContext(AuthContext);
    const [accType] = useCheckAccType(user?.email);
    const params = useParams();
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/category/${params.id}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <div className="custom-align"><Spinner></Spinner></div>
    }
    return (
        <div data-aos="fade-up"
        data-aos-duration="1000" className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 min-h-screen font-primary'>
            <Toaster></Toaster>
            <h2 className='text-gray-900 text-xl md:text-3xl font-bold text-center mb-5 lg:mb-10 uppercase divider'>Products</h2>

            <div className='grid lg:grid-cols-2 3xl:grid-cols-3 gap-5 font-secondary justify-center'>
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