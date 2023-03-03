import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import Spinner from '../../../components/Spinner/Spinner';
import { AuthContext } from '../../../contexts/UserContext';
import useCheckAccType from '../../../hooks/useCheckAccType';
import BookingModal from '../../Products/BookingModal';
import { useParams } from 'react-router-dom';
import ProductDetailsModified from './../../Products/ProductDetailsModified';

const Search = () => {
    const [loading, setLoading] = useState(false);
    const [found, setFound] = useState([]);
    const [displayFound, setDisplayFound] = useState(false);
    const [item, setItem] = useState(null);
    const { user } = useContext(AuthContext);
    const [accType] = useCheckAccType(user?.email);

    const params = useParams();
    const searchedText = params.searchedText;

    const fetchProduct = (searchedText) => {
        fetch(`https://next-rep-server.vercel.app/search/${searchedText}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFound(data);
                setDisplayFound(true);
                setLoading(false);
            })
    }

useEffect(()=>{
    setLoading(true);
    if(searchedText){
        fetchProduct(searchedText)
    }
},[searchedText])

    const handleSearch = event => {
        event.preventDefault();
        setLoading(true);
        const form = event.target;
        const searchText = form.searchText.value;

        if (searchText) {
            fetchProduct(searchText);
        }
    }

    return (
        <div data-aos="fade-up"
            data-aos-duration="2000" className='px-4 py-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h2 className='text-xl md:text-2xl font-bold text-center uppercase divider'>Find Your Bike</h2>
            <p className='md:text-xl text-center my-3'>Find your desired motorcycle with filters</p>

            {/* <form onSubmit={handleSearch} className='flex justify-center gap-5 items-center lg:py-5'>
                <input name='searchText' className='input input-bordered w-1/2' type="text" placeholder={searchedText ? searchedText : 'Search locations, product names, brands...'} />
                <button type='submit' className='btn btn-secondary'>Search</button>
            </form> */}
            {
                found.length > 0 && displayFound && <p className='text-center text-lg mb-5'>{found.length} items found!!!</p>
            }
            {
                !found.length && displayFound && <p className='text-center text-lg mb-5'>Sorry, No items found!!!</p>
            }
            <div className='my-5'>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-5 font-secondary'>
                {
                                found.map(product => <ProductDetailsModified
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
                    <BookingModal item={item} setItem={setItem}></BookingModal>
                }
            </div>
            {
                loading && <div className="custom-align"><Spinner></Spinner></div>
            }
        </div>
    );
};

export default Search;