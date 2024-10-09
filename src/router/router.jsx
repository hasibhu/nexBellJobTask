import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Landing from "../pages/Landing";
import ErrorPage from "../pages/ErrorPage";
import Products from "../pages/Products";
import Error from "../pages/Error";
import Dashboard from "../pages/Dashboard";
import AddProduct from "../Dashboard/AddProduct";




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
                // loader: productsLoader
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
