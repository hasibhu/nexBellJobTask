import Filters from "../components/Products/Filters";
import ProductGrid from "../components/Products/ProductGrid";
import { customFetch } from "../utils";


const url = '/products';

export const loader = async () => {
    try {
        const response = await customFetch.get(url); 
        // console.log(response.data); 
        return response.data; 
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; 
    }
};

const Products = () => {
    return (
        <div className="h-screen mt-8">
            <Filters />
            <ProductGrid/>
        </div>
    );
};

export default Products;