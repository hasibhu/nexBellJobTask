import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    const { products } = useLoaderData()
    console.log(products);
    return (
        <div>
           
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-10 p-2">
                    {products.map((product) => (
                        <ProductCard key={product?.id} product={product} />
                    ))}
                </div>
        </div>
    );
};

export default ProductGrid;