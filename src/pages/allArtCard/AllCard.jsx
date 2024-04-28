// import React from 'react';

import { Link, NavLink } from "react-router-dom";

const AllCard = ({ craft }) => {

    const {
        _id, displayName, email, item_name, subcategoryName, description, price, rating,
        processingTime, customization, stockStatus, image
    } = craft;
    return (
        <div>
            {/* <p className="border">
                estate title :{estate_title}
                <button className="btn btn-secondary m-8"><Link to={`/details/${id}`}>view Details</Link> </button>
            </p> */}

            <div className="p-4 bg-base-200 rounded-lg">
                <div className=" flex-col lg:flex">

                    <div className="relative ">
                        <img src={image} className="max-h-[230px] w-full rounded-lg shadow-2xl" />

                        <div className="absolute -top-6 -left-8 p-4">
                            <p className="text-white bg-blue-500 rounded-full w-10 text-center justify-center items-center h-10 font-semibold">NEW</p>
                        </div>


                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">{item_name}</h1>
                        <div className="mb-6 mt-3">
                            <p>CategoryName: {subcategoryName}</p>
                        </div>

                        <hr className="border-b border-gray-300 my-4" />

                        <div className="flex justify-between text-xl font-semibold">
                            <p>Taka:{price}</p>
                            <p>Rating:{rating}</p>
                        </div>
                        <div className="flex my-6 justify-between text-xl font-semibold">
                        <p className="font-bold">
                            Availability:{stockStatus}
                        </p>
                        <p>Customization:{customization}</p>
                    </div>
                        <div className="flex mt-4 ">
                        </div>

                        <Link to={`/details/${_id}`}><button className="btn bg-orange-600">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
{/* <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link> */ }
export default AllCard;