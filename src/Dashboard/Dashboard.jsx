
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
         <div className="lg:flex mt-8 border-t-4 border-yellow-500 rounded-xl pt-3  ">
           
            <div className="lg:w-64  pt-24 items-center flex flex-col bg-amber-400 border-r-4 lg:h-screen rounded-xl">
                <Link to={'addProduct'}>
                    Add product
                </Link>
                <Link to={'productList'}>
                    Product List
                </Link>
                



                <div className='lg:mt-28'>
                <Link to={'/'}>Home</Link>
                </div>
            </div>
            
            

            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;