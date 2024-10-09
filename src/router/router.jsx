import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Landing from "../pages/Landing";
import ErrorPage from "../pages/ErrorPage";
import Products from "../pages/Products";
import Error from "../pages/Error";
import Dashboard from "../pages/Dashboard";
import AddProduct from "../Dashboard/AddProduct";
import ProductDetails from "../components/Products/ProductDetails";

import {loader as productsLoader } from '../pages/Products'
import {loader as singleProductLoader } from '../pages/Products'


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Landing />,
                errorElement: <ErrorPage></ErrorPage>,
                // loader: landingLoader
            },
            {
                path: '/products',
                element: <Products></Products>,
                errorElement: <ErrorPage></ErrorPage>,
                loader: productsLoader
            },
            {
                path: '/SingleProduct/:id',
                element: <ProductDetails/>,
                errorElement: <ErrorPage></ErrorPage>,
                loader: singleProductLoader
            },
        ]
    },
    {
        path: '/dashboard', 
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path:'/dashboard',
                element: <Dashboard></Dashboard>, 
            },
            {
                path: 'addProduct',
                element: <AddProduct/>
            }
        ],
    }
])

export default router;
