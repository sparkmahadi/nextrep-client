import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchOnNav = () => {
    const navigate = useNavigate();

    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const searchText = form.searchText.value;
        form.reset();

        if (searchText) {
            navigate(`/search/${searchText}`)
        }
    }

    return (
        <div className=''>
            <form onSubmit={handleSearch} className='hidden xl:flex justify-center items-center'>
                <input name='searchText' className='h-8 border-none rounded-l-lg w-80' type="text" placeholder='Search locations, product names, brands...' />
                <button type='submit' className='btn btn-sm btn-secondary normal-case rounded-l-none'>Search</button>
            </form>
        </div>
    );
};

export default SearchOnNav;