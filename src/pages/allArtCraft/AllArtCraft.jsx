// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import AllCard from "../allArtCard/AllCard";

const AllArtCraft = () => {
    const crafts = useLoaderData();


    return (

        <div className="mt-10 overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead >
                    <tr className=" border-2" >
                        <th className="text-lg border-2 font-bold" >
                            Si No
                        </th >
                        <th className="text-lg border-2 font-bold">Item Name</th>
                        <th className="text-lg  border-2font-bold">Category</th>
                        <th className="text-lg border-2 font-bold">Price</th>
                        <th className="text-lg border-2 font-bold"></th>
                    </tr>
                </thead>


                {
                    crafts.map((craft , index ) => <tbody key={craft._id}
                    >

                        {/* row 1 */}
                        <tr className=" border-2">
                            <th className=" border-2">
                                {index+1}
                            </th>
                            <td className=" border-2">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={craft.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold">{craft.item_name}</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td className="text-lg font-bold border-2">
                                {craft.subcategoryName}
                            </td>
                            <td className="text-lg border-2 font-bold">{craft.price}</td>
                            <th className="border-2">
                            <Link to={`/details/${craft._id}`}><button className="btn bg-orange-600 ">View Details</button></Link>
                            </th>
                        </tr>

                    </tbody>)
                }


            </table>
        </div>





    );
};

export default AllArtCraft;


{/* <div className="container mx-auto">
                <div>
                    <p data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-yellow-700 py-8 mt-6 mb-2 text-white">All Craft Items</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                    {
                        crafts.map(craft => <AllCard key={craft._id}
                            craft={craft}></AllCard>)
                    }

                </div>

            </div> */}