import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';
import NewNavbar from './../pages/Shared/Navbar/NewNavbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <NewNavbar></NewNavbar> */}
            <div className='my-outlet min-h-screen pt-20'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;