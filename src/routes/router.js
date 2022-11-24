import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Main from '../layouts/Main';
import AllBuyers from '../pages/Dashboard/AllBuyers/AllBuyers';
import AllSellers from '../pages/Dashboard/AllSellers/AllSellers';
import MyOrders from '../pages/Dashboard/MyOrders/MyOrders';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Logging/Login/Login';
import Products from '../pages/Products/Products';
import Register from './../pages/Logging/Register/Register';
import ResetPassword from './../pages/Logging/ResetPassword/ResetPassword';
import PrivateRoute from './PrivateRoute';

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
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
        ],
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/sellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/buyers',
                element: <AllBuyers></AllBuyers>
            }
        ]
    }
])