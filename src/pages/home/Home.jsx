// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Slider from "../../layouts/Slider";
import AllCard from "../allArtCard/AllCard";


// import { Slide } from "react-toastify";

const Home = () => {

    const crafts = useLoaderData();
    return (
        <div>

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
                            crafts.map(craft => <AllCard key={craft._id}
                                craft={craft}></AllCard>)
                        }

                    </div>

                </div>



                {/* Item Category */}
                <div className="container mx-auto">
                    <div>
                        <p data-aos="fade-down"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-yellow-700 py-8 mt-6 mb-2 text-white"> Art and Craft Categories</p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                        {
                            crafts.map(craft => <AllCard key={craft._id}
                                craft={craft}></AllCard>)
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;