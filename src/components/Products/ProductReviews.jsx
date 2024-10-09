/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa";

const ProductReviews = ({ product }) => {
    console.log(product);
    return (
        <div className="my-6">
            <div>
                <p className="md:text-2xl font-semibold my-6 border-b-4 pt-6">Customer Reviews</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8 gap-3 grow">
                {product?.reviews.map((review) => {
                    const isoDate = review?.date;
                    const digitalDate = new Date(isoDate).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: true,
                    });

                    return (
                        <div key={review?.reviewerEmail} className="border p-4 rounded-xl"> {/* Add key here */}
                            <div className="flex items-center gap-2">
                                <div>
                                    <p className="text-gray-600">{digitalDate}</p>
                                    <p className="font-semibold flex items-center mb-3 gap-2">
                                        {review.reviewerName}
                                        <span className="text-gray-700 flex items-center">
                                            <FaStar className="text-lg text-yellow-500" /> {review.rating}
                                        </span>
                                    </p>
                                    <p className="text-gray-600">{review.comment}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductReviews;
