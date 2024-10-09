
import { FaStar } from "react-icons/fa";
// import { MdShoppingCartCheckout } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../../utils";
import ProductReviews from "./ProductReviews";

// eslint-disable-next-line react-refresh/only-export-components
export const singleProductLoader = async ({ params }) => {
    const { id } = params; 
    const url = `/products/${id}`; 
    try {
        const response = await customFetch.get(url);
        return response.data; 
    } catch (error) {
        console.error("Error fetching single product:", error);
        throw error; 
    }
};

const ProductDetails = () => {
  const  product  = useLoaderData()
    console.log(product);

    return (
        <section className="mt-5 p-4 mx-auto pt-24">
            <div className="max-w-screen-xl px-4 mx-auto">
                <div className="flex flex-col md:flex-row gap-4 lg:gap-8 xl:gap-16">
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto bg-green-50">
                        <img
                            className="w-full"
                            src={product?.images[0]}
                            alt={product?.title}
                        />
                    </div>

                    <div className="mt-6 lg:mt-0 flex flex-col justify-center">
                        <h1 className="text-xl md:text-3xl mb-5 font-bold text-gray-700 sm:text-2xl ">
                            {product?.title}
                        </h1>
                        <div>
                            <p className="text-2xl font-extrabold text-gray-700 sm:text-3xl">
                                {product?.discountPercentage ? (
                                    <>
                                        <div className=" flex gap-2 items-center">
                                            <h2 className="font-light text-red-400 text-4xl">- <span> {product?.discountPercentage}%</span></h2>
                                            
                                            <h2 className="font-light text-xl text-green-500 "><span className="text-5xl">$</span>{product?.price}</h2>
                                            
                                            {/* <span className="text-green-500">
                                                {product.discountPrice}</span> */}
                                        </div>
                                    </>
                                ) : (
                                    product?.price
                                )}
                            </p>

                            {/* <div>Discount {product?.discountPercentage}%</div> */}

                            

                            <p className="flex items-center gap-2">{product.rating} <FaStar className="text-yellow-400"></FaStar></p>
                            <p>Abailable : <span className="text-green-500">{product.stock}</span></p>
                        </div>
                        <div className="flex flex-row gap-5">
                            {product.tags.map((tag, index) => (
                                <h2  key={index}>
                                     #{tag}
                                </h2>
                            ))}
                        </div>
                        <div className="my-5 md:my-10">
                            <p>{product?.description}</p>
                        </div>

                        <div className="flex gap-4">
                            {/* <button className="flex items-center btn">Check Out <MdShoppingCartCheckout className="text-2xl" /></button> */}
                            <button onClick={()=>alert('Added to the cart')} className="flex items-center btn">Add to Cart <FaCartShopping className="text-2xl" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
             
                

                <div>
                    <div>
                        <p className=" md:text-2xl font-semibold my-6 border-b-4 pt-6">Product Details</p>
                    </div>
                    <table className="min-w-full border-collapse border border-gray-500">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 bg-green-100 text-left">
                                    Name
                                </th>
                                <th className="border border-gray-300 px-4 py-2 bg-green-100 text-left">
                                    Info
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Brand</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {product?.brand || "No-Brand"}
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Warranty</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {product?.warrantyInformation || "No-Warranty"}
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">
                                    Shipping Information
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {product?.shippingInformation || "N/A"}
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">
                                    Minimum Order Quantity
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {product?.minimumOrderQuantity || 1}
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">
                                    Return Policy
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {product?.returnPolicy || "N/A"}
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">
                                    Dimensions
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    width: {product?.dimensions.width}, height:{" "}
                                    {product?.dimensions.height}, depth: {product?.dimensions.depth}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <ProductReviews product={product}></ProductReviews>
                





               


            </div>
        </section >
    );
};

export default ProductDetails;