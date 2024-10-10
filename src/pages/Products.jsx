


import Filters from "../components/Products/Filters";
import ProductGrid from "../components/Products/ProductGrid";
import { customFetch } from "../utils";

export const loader = async ({ request }) => {

    try {
      
        const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
      
        const { search = '', category = 'all', brand = 'all', sort = 'any' } = params; // Default sort to 'any'

        
        const allProductsResponse = await customFetch.get('products');
        const allProducts = allProductsResponse.data.products || [];

        let filteredProducts = allProducts;
  
        if (search) {
            filteredProducts = filteredProducts.filter(product =>
                product.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category && category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === category);
        }

      
        if (brand && brand !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.brand && product.brand === brand);
        }

       
        if (sort === 'low-high') {
            filteredProducts.sort((a, b) => a.price - b.price); // Sort by ascending price
        } else if (sort === 'high-low') {
            filteredProducts.sort((a, b) => b.price - a.price); // Sort by descending price
        }
       
        const allCategories = [...new Set(allProducts.map(p => p.category))];
        const allBrands = [...new Set(allProducts.map(p => p.brand).filter(Boolean))];

        return {
            products: filteredProducts,
            params,
            categories: allCategories,
            brands: allBrands,
        };
    } catch (error) {
        console.error("Error fetching products or categories:", error);
        throw error;
    }
};



const Products = () => {
    return (
        <div className=" pt-20 bg-blue-100 rounded-md">
            <Filters />
            <ProductGrid />
        </div>
    );
};

export default Products;

