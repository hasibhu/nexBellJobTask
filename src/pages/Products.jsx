




import Filters from "../components/Products/Filters";
import ProductGrid from "../components/Products/ProductGrid";
import { customFetch } from "../utils";

export const loader = async ({ request }) => {
    try {
        // Get URL params for search, category, and brand
        const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
        const { search = '', category = 'all', brand = 'all' } = params;

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
        <div className="h-screen pt-28 bg-blue-300 rounded-md">
            <Filters />
            <ProductGrid />
        </div>
    );
};

export default Products;
