/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";


const ProductCard = ({product}) => {
    const { id, title, images, price, rating, description, brand, category } = product;
    
     const handleClick = () => {
        Swal.fire({
            title: "Added to wishlist successfully!!",
            timer: 2000, // Close after 2 seconds (2000 ms)
            showConfirmButton: false,
            icon: "success"
        });

    };

    return (
        <div className=" p-3 w-full bg-white border border-gray-200 rounded-lg  transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col shadow-lg">

            <img src={images[0]} className="w-full h-48  rounded-t-lg object-cover" />

           

            {/* product info part  */}
            <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold cursor-pointer hover:underline text-center">
                    {title.slice(0,15)}...
                </h3>

                <p className="text-sm  line-clamp-3 min-h-[55px] text-gray-500">
                    {description.slice(0, 120)}
                    
                </p>
                
                    <p className="mt-2 text-xl font-bold"><span className="text-3xl">$</span>{price}</p>
                <div className="flex  justify-between items-center">
                    <div className="flex pt-3 gap-3">
                        <p className="flex flex-row">Brand:</p>
                        <p>{ brand}</p>
                     </div>
                </div>
                <div className="flex  justify-between items-center">
                    <div className="flex pt-3 gap-3">
                        <p className="flex flex-row">Category:</p>
                        <p>{ category}</p>
                     </div>
                </div>
                
            </div>
             {/* icons and Ratings part */}
            <div className="flex justify-between items-center">

                <p className="">Rating: {rating}  ⭐</p>

                <div className=" mt-2 flex space-x-3">
                    <button
                        aria-label="Add to wishlist"
                        className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md hover:bg-red-100 transition-transform transform hover:scale-110"
                    >
                        
                        <button onClick={handleClick}> <FaHeart  className="text-red-500" /></button>
                    </button>
                   
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