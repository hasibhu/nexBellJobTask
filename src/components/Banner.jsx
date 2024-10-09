


import React, { useEffect, useState } from 'react';
import banner from '../../public/banner.png';
import img2 from '../../public/2.png'; 
import img3 from '../../public/3.png'; 
import img4 from '../../public/4.png';
import g from '../../public/g.png'; 
import chair from '../../public/chair.png'; 
import { Link } from 'react-router-dom';

const images = [g, chair, banner, img2, img3, img4]; 

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0); 

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length); 
        }, 3000); 

        return () => clearInterval(intervalId); 
    }, []);

    return (
        <div className='pt-28 lg:flex justify-around items-center'>
            <div className=''>
                <div>
                    <h1 className='text-5xl font-bold text-center'>
                        <span className='text-black'>Welcome to</span>
                        <span className='text-green-500'> Our Shop</span>
                    </h1>
                </div>
                <div className='flex items-center justify-center'>
                     <button className='btn bg-green-500 pt-6 pb-8 pl-5 pr-5 text-white mt-6'><Link to={'/products'}>Our Products</Link></button>
               </div>
            </div>

            <div>
                <img src={images[currentIndex]} alt="Banner Image" className='w-[550px] h-[450px] transition-opacity duration-300' />
            </div>
        </div>
    );
};

export default Banner;
