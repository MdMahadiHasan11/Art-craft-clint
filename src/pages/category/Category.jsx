// import React from 'react';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Category = () => {

    const { subcategory } = useParams();
    console.log(subcategory);


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

           <p>{item.length}</p> 

        </div>
    );
};

export default Category;