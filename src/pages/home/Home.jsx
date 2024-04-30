// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import Slider from "../../layouts/Slider";
import AllCard from "../allArtCard/AllCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


// import { Slide } from "react-toastify";

const Home = () => {

    const crafts = useLoaderData();
    const ccrafts = crafts.slice(0, 9);
    const newCrafts = crafts.slice(-3);


    const [loading1, setLoading1] = useState(true);



    const [categoryData, setCategoryData] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(response => response.json())
            .then(data => {
                setCategoryData(data);
                setLoading1(false)
            })
            .catch(error => {
                console.error('Error fetching category data:', error);
            });
    }, [])


    // useEffect(() => {
    //     if (loading) {
    //     return <span className="loading loading-spinner text-info"></span>
    // }
    // if (categoryData) {
    //     return categoryData;
    // }
    // }, [])

    // if (loading) {
    //     return <span className="loading loading-spinner text-info"></span>
    // }
    // if (user) {
    //     return children;
    // }

    console.log(categoryData)





    return (
        <div className="mt-8">
            <div className="flex
            justify-center items-center">{loading1 ? <span className="loading loading-spinner text-info"></span> : <p></p>}</div>
            {/* <p>{crafts.length}</p> */}
            {/* <p>{categoryData.length}</p> */}

            <Slider></Slider>

            <div>
                <div className="container mx-auto">
                    <div>
                        <p data-aos="fade-down"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-yellow-700 py-8 mt-6 mb-2 text-white"> Craft Items</p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                        {
                            ccrafts.map(craft => <AllCard key={craft._id}
                                craft={craft}></AllCard>)
                        }

                    </div>

                </div>



                {/* Item Category */}
                <div className="container mt-14 mb-6 mx-auto">
                    <div>
                        <p data-aos="fade-down"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" className=" text-3xl font-bold rounded-2xl text-center bg-yellow-700 py-8 mt-6 mb-10 text-white"> Art and Craft Categories</p>
                    </div>





                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4   mx-auto" >

                        {loading1 ? (<span className="loading loading-spinner text-info"></span>) : (
                            categoryData.map(category => <div key={category.index} >
                                <div className="bg-base-300 shadow-xl text-center   rounded-2xl">
                                    <Link to={`/category/${category.subcategory}`}>
                                        <div className="flex justify-center items-center ">
                                            <img src={category.image} alt="Movie" className=" max-h-[300px] w-full   " />
                                        </div>


                                        <h2 className="font-extrabold text-2xl flex justify-center items-center py-4">
                                            {category.subcategory}
                                        </h2>

                                    </Link>
                                </div>
                            </div>)
                        )}


                    </div>

                </div>




                {/* new added item */}
                <div className="containerb mt-14 mx-auto">
                    <div>
                        <p data-aos="fade-down"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-yellow-700 py-8 mt-6 mb-10 text-white"> New Added Craft Items</p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                        {
                            newCrafts.map(craft => <AllCard key={craft._id}
                                craft={craft}></AllCard>)
                        }

                    </div>

                </div>


                {/* stat */}

                <div className="containerb mt-14 mx-auto">
                    <div>
                        <p data-aos="fade-down"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-yellow-700 py-8 mt-6 mb-10 text-white"> New Added Craft Items</p>
                    </div>
                    <div className="stats shadow">

                        <div className="stat place-items-center">
                            <div className="stat-title">Successful purchase</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">From January 1st to February 1st</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Users</div>
                            <div className="stat-value text-secondary">4,200</div>
                            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">New Registers</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;