// import React from 'react';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {


    const { id } = useParams();
    console.log(id);

    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch(`https://art-craft-server-cyan.vercel.app/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data)
            })
    }, [id])

    return (
        <div className="hero min-h-screen mt-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={products.image} className="max-h-[550px] w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="lg:text-4xl md:text-2xl text-xl font-bold">{products.item_name}</h1>
                    <p className="py-6 font-bold">{products.description}</p>

                    <p className="font-bold">Categoru: <span>{products.subcategoryName}</span></p>
                    <hr className="border-b border-gray-300 my-4" />
                    <div className="flex justify-between text-xl font-semibold">
                        <p>Taka:{products.price}</p>
                        <p><span className="ml-4">Rating:</span>{products.rating}</p>
                    </div>
                    <div className="flex my-6 justify-between text-xl font-semibold">
                        <p className="font-bold">
                            Availability:{products.stockStatus}
                        </p>
                        <p>Customization:{products.customization}</p>
                    </div>


                    <div className="flex justify-center items-center"><button className="btn px-12 bg-orange-600">Buy</button></div>
                    
                </div>
            </div>
        </div>
    );
};

export default Details;