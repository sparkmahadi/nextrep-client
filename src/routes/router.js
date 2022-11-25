import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Main from '../layouts/Main';
import AddProduct from '../pages/Dashboard/AddProduct/AddProduct';
import AllBuyers from '../pages/Dashboard/AllBuyers/AllBuyers';
import AllSellers from '../pages/Dashboard/AllSellers/AllSellers';
import MyOrders from '../pages/Dashboard/MyOrders/MyOrders';
import MyProducts from '../pages/Dashboard/MyProducts/MyProducts';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Logging/Login/Login';
import Products from '../pages/Products/Products';
import Register from './../pages/Logging/Register/Register';
import ResetPassword from './../pages/Logging/ResetPassword/ResetPassword';
import PrivateRoute from './PrivateRoute';
import CheckingRoute from './CheckingRoute';
import Profile from '../pages/Dashboard/Profile/Profile';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Blog from '../pages/Blog/Blog';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('http://localhost:5000/categories')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: ()=>fetch('http://localhost:5000/categories')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/reset-password',
                element: <ResetPassword></ResetPassword>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <CheckingRoute><Profile></Profile></CheckingRoute>
            },
            {
                path: '/dashboard/profile',
                element: <CheckingRoute><Profile></Profile></CheckingRoute>
            },
            {
                path: '/dashboard/myorders',
                element: <CheckingRoute><MyOrders></MyOrders></CheckingRoute>
            },
            {
                path: '/dashboard/sellers',
                element: <CheckingRoute><AllSellers></AllSellers></CheckingRoute>
            },
            {
                path: '/dashboard/buyers',
                element: <CheckingRoute><AllBuyers></AllBuyers></CheckingRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <CheckingRoute><AddProduct></AddProduct></CheckingRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <CheckingRoute><MyProducts></MyProducts></CheckingRoute>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])