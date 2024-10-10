
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import notFound from '../../../public/notFound.jpg'


const ProductGrid = () => {
    const { products } = useLoaderData();


    if (!products || products.length === 0) {
        return <div >
            <h2 className='text-center mt-16 text-red-600 text-3xl pb-8'>No product has been found with your search.</h2>
            <img src={notFound} alt="notFound Image" className='w-[490px] h-[490px] mx-auto' />
        </div>;
    }

    return (
        <div >
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-4 p-2 items-center">
            {/* <div className="flex flex-wrap fle gap-3 my-10 p-2"> */}
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;

