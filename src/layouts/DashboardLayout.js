import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';
import './DashboardLayout.css';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='custom-grid lg:grid px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div>
                    <ul className="menu bg-base-100 w-56">
                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        <li><Link to='/dashboard/sellers'>All Sellers</Link></li>
                        <li><Link to='/dashboard/buyers'>All Buyers</Link></li>
                    </ul>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;