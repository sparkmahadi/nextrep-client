import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='my-outlet min-h-screen lg:pt-[4.5rem]'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;