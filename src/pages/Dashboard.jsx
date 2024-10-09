import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div>Dashboard
                <Link to={'/dashboard/addProduct'}>Add product</Link>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;