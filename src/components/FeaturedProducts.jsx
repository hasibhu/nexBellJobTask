import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Products/ProductCard';

const FeaturedProducts = () => {
    const { products } = useLoaderData();

    // Function to shuffle the array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Get 6 random products
    const getRandomProducts = (products, count) => {
        const shuffledProducts = shuffleArray([...products]); // Create a copy and shuffle
        return shuffledProducts.slice(0, count); // Return the first `count` products
    };

    const featuredProducts = getRandomProducts(products, 6); // Get 6 random products

    return (
        <div>
            <h2 className='text-4xl text-center p-10 font-bold'>Featured Products</h2>
             <div className='grid lg:grid-cols-3 gap-3'>
                
                {featuredProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)}
            </div>
       </div>
    );
};

export default FeaturedProducts;
