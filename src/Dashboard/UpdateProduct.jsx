
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import Swal from "sweetalert2";

export const singleProductLoader = async ({ params }) => {
    const productId = params.id; 
    const response = await customFetch(`/products/${productId}`);
    
    if (!response.ok) {
        throw new Response('Product not found', { status: 404 });
    }

    return response.json(); // Assuming customFetch returns a JSON response
};

const UpdateProduct = () => {
    const product = useLoaderData();
    const navigate = useNavigate();
    const { title, category, brand, price, discountPercentage, stock, tags, sku, weight, returnPolicy, description, dimensions } = product;

   const handleClick = () => {
        Swal.fire({
            title: "Your Product has been updated successfully!!",
            timer: 2000, // Close after 2 seconds (2000 ms)
            showConfirmButton: false,
            icon: "success"
        }).then(() => {
            navigate('/dashboard/productList'); // Redirect after the alert
        });
    };

    return (
        <div className="mb-5">
            <h2 className="text-4xl font-bold text-center border-b-4 pb-3">Update Product</h2>
            <Form className="mt-4 ml-1 border-2 border-green-300 p-6">
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Product Title</label>
                    <input
                        type="text"
                        defaultValue={title}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Category</label>
                    <input
                        type="text"
                        defaultValue={category}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Brand</label>
                    <input
                        type="text"
                        defaultValue={brand}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Price</label>
                    <input
                        type="number"
                        defaultValue={price}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Discount Percentage</label>
                    <input
                        type="number"
                        defaultValue={discountPercentage}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Stock</label>
                    <input
                        type="number"
                        defaultValue={stock}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Tags</label>
                    <input
                        type="text"
                        defaultValue={tags}
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold">SKU</label>
                    <input
                        type="text"
                        defaultValue={sku}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Weight (KG)</label>
                    <input
                        type="text"
                        defaultValue={weight}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Return Policy</label>
                    <input
                        type="text"
                        defaultValue={returnPolicy}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Description</label>
                    <input
                        type="text"
                        defaultValue={description}
                        className="input input-bordered w-full h-28"
                    />
                </div>
                <div >
                    <h1 className="pb-3 font-bold">Dimension: </h1> 

                    <div className="flex flex-row justify-center items-center gap-3">
                        <div className="mb-4">
                        <label className="block mb-2 ">Depth</label>
                        <input
                            type="text"
                            defaultValue={dimensions.depth}
                            className="input input-bordered "
                        />
                        </div>
                        <div className="mb-4">
                        <label className="block mb-2 ">Width</label>
                        <input
                            type="text"
                            defaultValue={dimensions.width}
                            className="input input-bordered "
                        />
                        </div>
                        <div className="mb-4">
                        <label className="block mb-2 ">Height</label>
                        <input
                            type="text"
                            defaultValue={dimensions.height}
                            className="input input-bordered "
                        />
                        </div>
                        
                    </div>
                </div>
                {/* Add other fields as necessary */}
                
                <div onClick={handleClick} className="flex items-center justify-center">
                    <button type="submit" className="btn btn-primary mt-4">
                        Update Product
                    </button>
               </div>
            </Form>
        </div>
    );
};

export default UpdateProduct;
