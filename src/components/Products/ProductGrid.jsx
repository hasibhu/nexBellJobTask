import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductGrid = () => {
    const { products } = useLoaderData()
    console.log(products);
    return (
        <div>
            All products will be shown here 
        </div>
    );
};

export default ProductGrid;