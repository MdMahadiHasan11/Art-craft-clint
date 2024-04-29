// import React from 'react';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllCard from "../allArtCard/AllCard";

const Category = () => {

    const { subcategory } = useParams();
    


    // const [products, setProducts] = useState({});



    const [item, setItem] = useState([]);
    useEffect(() => {

        fetch(`http://localhost:5000/category/${subcategory}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);

            })

    }, [subcategory])


    return (
        <div>
            <div className="container mx-auto">
                <div>
                    <p data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-yellow-700 py-8 mt-6 mb-2 text-white"><span>{subcategory}</span> Craft Items</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                    {
                        item.map(craft => <AllCard key={craft._id}
                            craft={craft}></AllCard>)
                    }

                </div>

            </div>
        </div>
    );
};

export default Category;