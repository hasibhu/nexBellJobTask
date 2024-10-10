
import { Link, Outlet } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";


const Dashboard = () => {
    return (
         <div className="lg:flex mt-8 border-t-4 border-yellow-500 rounded-xl pt-3  ">
           
            <div className="lg:w-64  pt-24 items-center flex flex-col bg-amber-400 border-r-4 lg:h-screen rounded-xl">
                <AiFillDashboard className='text-7xl' />
                <h1 className='text-3xl pb-6 border-b-4 mb-8 border-green-600'>Dashboard</h1>
                <Link to={'addProduct'}>
                    <button className='btn '> <IoIosAddCircle className='text-3xl' />Add product</button>
                </Link>
                <Link to={'productList'}>
                
                    <button className='btn  mt-5'> <FaList className='text-xl' />   Product List</button>
                </Link>
                



                <div className='lg:mt-28 mt-5'>
                    <Link to={'/'} className='flex flex-row justify-center items-center gap-5 text-2xl bg-green-200 rounded-xl p-2'>
                         <IoHome />Home
                    </Link>
                    <Link to={'/products'} className='flex flex-row justify-center items-center gap-5 text-2xl bg-green-200 rounded-xl p-2 mt-2'>
                         <AiFillProduct /> Products
                    </Link>
                </div>
            </div>
            
            

            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;