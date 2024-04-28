// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'

const Update = () => {
    const { id } = useParams();
    console.log(id);

    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data)
            })
    }, [id])


    const { user } = useContext(AuthContext);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const item_name = form.get('item_name');
        const subcategoryName = form.get('subcategoryName');
        const description = form.get('description');
        const price = form.get('price')
        const rating = form.get('rating')
        const processingTime = form.get('processingTime')
        const customization = form.get('customization')
        const stockStatus = form.get('stockStatus');
        const image = form.get('image')
        const displayName = user.displayName;
        const email = user.email;



        const updateCraft = { displayName, email, item_name, subcategoryName, description, price, rating, processingTime, customization, stockStatus, image }

        console.log(updateCraft);


        fetch(`http://localhost:5000/updateProduct/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Art and Craft Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })

    }

    return (
        <div>
            {/* a. image
            b. item_name
            c. subcategory_Name
            d. short description
            e. price
            f. rating
            g. customization- example- yes, no
            h. processing_time
            i. stockStatus - example- In stock, Made to Order
            j. “Update” button */}

            <form onSubmit={handleUpdate} className="mx-auto">
                <div className="lg:flex">
                    <div className="lg:w-full lg:mr-4 ">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">item_name</span>
                            </label>
                            <input type="text" name="item_name" placeholder="item_name" className="input input-bordered"
                                defaultValue={products.item_name}
                                required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">subcategory_Name</span>
                            </label>
                            <input type="text" name="subcategoryName" placeholder="subcategory_Name" className="input input-bordered"
                                defaultValue={products.subcategoryName}
                                required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">short description</span>
                            </label>
                            <input type="text" name="description" placeholder="short description" className="input input-bordered"
                                defaultValue={products.description}
                                required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">price</span>
                            </label>
                            <input type="number" name="price" placeholder="price" className="input input-bordered"
                                defaultValue={products.price}
                                required />
                        </div>



                    </div>


                    <div className="lg:w-full">

                        <label className="form-control">
                            <div className="label font-bold">
                                <span className="label-text">stockStatus</span>
                            </div>
                            <select defaultValue={products.stockStatus} name="stockStatus" className="select select-bordered ">
                                <option disabled selected>Pick one</option>
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                        </label>


                        <label className="form-control">
                            <div className="label font-bold">
                                <span className="label-text">customization</span>
                            </div>
                            <select defaultValue={products.customization} name="customization" className="select select-bordered ">
                                <option disabled selected>Pick one</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="rating" className="input input-bordered"
                                defaultValue={products.rating}
                                required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">processingTime</span>
                            </label>
                            <input type="date" name="processingTime" placeholder="processing_time" className="input input-bordered"
                                defaultValue={products.processingTime}
                                required />
                        </div>



                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">image</span>
                    </label>
                    <input type="text" name="image" placeholder="enter photo url" className="input input-bordered"
                        defaultValue={products.image}
                        required />
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>

        </div>
    );
};

export default Update;