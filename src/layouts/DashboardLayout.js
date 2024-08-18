import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import useCheckAccType from '../hooks/useCheckAccType';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';
import './DashboardLayout.css';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [accType] = useCheckAccType(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <Helmet>
                <title>NextRep | Dashboard</title>
            </Helmet>
            <Toaster></Toaster>
            <div className='custom-grid lg:grid gap-5 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:mt-20'>
                <div data-aos="fade-up"
                    data-aos-duration="2000" className='mx-auto'>
                    <ul className="menu bg-base-100 sm:w-56 mx-auto">
                        <li className='lg:text-lg font-semibold bg-primary text-white rounded-lg mb-2'><NavLink to='/dashboard/profile'>My Profile</NavLink></li>
                        {
                            accType === 'Buyer' &&
                            <li className='lg:text-lg font-semibold bg-primary text-white rounded-lg mb-2'><NavLink to='/dashboard/myorders'>My Orders</NavLink></li>
                        }

                        {
                            accType === 'Seller' &&
                            <>
                                <li className='lg:text-lg font-semibold bg-primary text-white rounded-lg mb-2'><NavLink to='/dashboard/addproduct'>Add Products</NavLink></li>
                                <li className='lg:text-lg font-semibold bg-primary text-white rounded-lg mb-2'><NavLink to='/dashboard/myproducts'>My Products</NavLink></li>
                            </>
                        }

                        {
                            accType === 'Admin' &&
                            <>
                                <li className='lg:text-lg font-semibold bg-primary text-white rounded-lg mb-2'><NavLink to='/dashboard/sellers'>All Sellers</NavLink></li>
                                <li className='lg:text-lg font-semibold bg-primary text-white rounded-lg mb-2'><NavLink to='/dashboard/buyers'>All Buyers</NavLink></li>
                                <li className='lg:text-lg font-semibold bg-primary text-white rounded-lg mb-2'><NavLink to='/dashboard/reporteditems'>Reported Items</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
                <div data-aos="fade-down"
                    data-aos-duration="2000" className='min-h-screen'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;