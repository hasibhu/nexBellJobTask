import { createHashRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Landing from "../pages/Landing";
import ErrorPage from "../pages/ErrorPage";
import Products from "../pages/Products";
import Error from "../pages/Error";
import ProductDetails, { singleProductLoader } from "../components/Products/ProductDetails";
import {loader as productsLoader } from '../pages/Products'
import {loader as landingLoader } from '../pages/Products'
import {loader as productListLoader } from '../Dashboard/ProductList'
import Dashboard from "../Dashboard/Dashboard";
import AddProduct from "../Dashboard/AddProduct";
import ProductList from "../Dashboard/ProductList";



const router = createHashRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Landing />,
                errorElement: <ErrorPage></ErrorPage>,
                loader: landingLoader
            },
            {
                path: '/products',
                element: <Products></Products>,
                errorElement: <ErrorPage></ErrorPage>,
                loader: productsLoader
            },
            {
                path: '/SingleProduct/:id',
                element: <ProductDetails />,
                errorElement: <ErrorPage />, 
                loader: singleProductLoader
            }
        ]
    },
    {
        path: 'dashboard/',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'addProduct',
                element: <AddProduct></AddProduct>

            },
            {
                path: 'productList',
                element: <ProductList></ProductList>,
                loader: productListLoader
            },
        ]
    }
])

export default router;
