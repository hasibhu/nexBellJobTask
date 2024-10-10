


import { customFetch } from "../utils";
import ProductListTable from "./ProductListTable";


const url = '/products';
export const loader = async () => {
    try {
        const response = await customFetch.get(url); 
        const products = response?.data?.products; 
      
        return {products}; 
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; 
    }
};

const ProductList = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center border-b-4 m-4 pb-4">All Listed Products</h1>
           <ProductListTable></ProductListTable>
        </div>
    );
};

export default ProductList;