


import Filters from "../components/Products/Filters";
import ProductGrid from "../components/Products/ProductGrid";
import { customFetch } from "../utils";

export const loader = async ({ request }) => {
    try {
        // Get URL params for search, category, brand, and sort, with default sort as 'any'
        const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
        const { search = '', category = 'all', brand = 'all', sort = 'any' } = params; // Default sort to 'any'

        // Fetch all products once
        const allProductsResponse = await customFetch.get('products');
        const allProducts = allProductsResponse.data.products || [];

        // Apply filters locally
        let filteredProducts = allProducts;

        // Filter by search
        if (search) {
            filteredProducts = filteredProducts.filter(product =>
                product.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Filter by category
        if (category && category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === category);
        }

        // Filter by brand, checking if brand exists in product
        if (brand && brand !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.brand && product.brand === brand);
        }

        // Apply sorting by price only if a valid sorting option is selected
        if (sort === 'low-high') {
            filteredProducts.sort((a, b) => a.price - b.price); // Sort by ascending price
        } else if (sort === 'high-low') {
            filteredProducts.sort((a, b) => b.price - a.price); // Sort by descending price
        }
        // If sort is 'any', don't change the product order (use database order)

        // Get all unique categories and brands from the fetched products
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
        <div className="h-screen pt-20 bg-blue-300 rounded-md">
            <Filters />
            <ProductGrid />
        </div>
    );
};

export default Products;

