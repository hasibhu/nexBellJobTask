import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <h3 className='text-2xl font-extrabold'>TShopp</h3>
            <div className='space-x-6'>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/dashboard'}>Dashboard</Link>
            </div>
        </div>
    );
};

export default Navbar;