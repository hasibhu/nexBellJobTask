/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const ProductCard = ({product}) => {
    const { id, title, images, price, rating, description } = product;
    

    return (
        <div className=" p-3 w-full bg-white border border-gray-200 rounded-lg  transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col shadow-lg">

            <img src={images[0]} className="w-full h-48  rounded-t-lg object-cover" />

           

            {/* product info part  */}
            <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold cursor-pointer hover:underline text-center">
                    {title}
                </h3>

                <p className="text-sm  line-clamp-3 min-h-[55px] text-gray-500">
                    {description}
                </p>
                <p className="mt-2 text-xl font-bold"><span className="text-3xl">$</span>{price}</p>
                
            </div>
             {/* icons and Ratings part */}
            <div className="flex justify-between items-center">

                <p className="">Rating: {rating}  ⭐</p>

                <div className=" mt-2 flex space-x-3">
                    <button
                        aria-label="Add to wishlist"
                        className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md hover:bg-red-100 transition-transform transform hover:scale-110"
                    >
                        <FaHeart className="text-red-500" />
                    </button>
                    {/* <button
                        aria-label="View product"
                        className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow hover:bg-blue-100 transition-transform transform hover:scale-110"
                    >
                        <FaEye />
                    </button> */}
                </div>
            </div>

            {/* view details part  */}
            <div className="mt-5">
                <Link to={`/SingleProduct/${id}`}>
                    <button
                        className="w-full bg-black text-white  rounded hover:bg-green-600 transition  py-2 px-4"
                    >
                        View details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;