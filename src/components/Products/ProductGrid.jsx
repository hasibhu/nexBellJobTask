
// import { useLoaderData } from 'react-router-dom';
// import ProductCard from './ProductCard';

// const ProductGrid = () => {
//     const { products } = useLoaderData();

//     // Log products to see what is being returned
//     // console.log("Products:", products);

//     // Check if products is an array
//     if (!Array.isArray(products)) {
//         return <div>No products available.</div>; // Handle case when products is not an array
//     }

//     return (
//         <div>
//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-10 p-2">
//                 {products.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductGrid;





import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    const { products } = useLoaderData();

    // Debugging: Ensure filtered products are being received
    console.log("Filtered Products in Grid:", products);

    if (!products || products.length === 0) {
        return <div>No products found.</div>;
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-10 p-2">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
