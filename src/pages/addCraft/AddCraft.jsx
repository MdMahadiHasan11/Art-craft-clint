// import React from 'react';
import Swal from 'sweetalert2'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProvider";
import useAuth from '../../layouts/useAuth';

const AddCraft = () => {

    const { user } = useContext(AuthContext);
    // const { user } = useAuth() || {};




    const handleAdd = e => {
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



        const newCraft = { displayName, email, item_name, subcategoryName, description, price, rating, processingTime, customization, stockStatus, image }

        console.log(newCraft)


        // send data

        fetch('https://art-craft-server-cyan.vercel.app/addCrafts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){

                    Swal.fire({
                        title: 'Success!',
                        text: 'Art and Craft Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                      e.target.reset();

                }
            })












        // signIn(email, password)
        //     .then(result => {
        //         toast.success("Successfully Login");
        //         console.log(result.user)
        //         navigate(location?.state ? location.state : '/')
        //     })
        //     .catch(error => {
        //         console.error(error);
        //         toast.success("password or email not matching!!");
        //     })

    }

    return (
        <div className=" bg-slate-100 mt-10">
            <div>
                <div className="text-center lg:text-left">
                    <div className="flex justify-center items-center"
                    ><h1 className="text-5xl mb-7 font-bold">Added Craft Item</h1></div>

                    <form onSubmit={handleAdd} className="mx-auto">
                        <div className="lg:flex">
                            <div className="lg:w-full lg:mr-4 ">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">item_name</span>
                                    </label>
                                    <input type="text" name="item_name" placeholder="item_name" className="input input-bordered" required />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">subcategory_Name</span>
                                    </label>
                                    <input type="text" name="subcategoryName" placeholder="subcategory_Name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">short description</span>
                                    </label>
                                    <input type="text" name="description" placeholder="short description" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">price</span>
                                    </label>
                                    <input type="number" name="price" placeholder="price" className="input input-bordered" required />
                                </div>



                            </div>


                            <div className="lg:w-full">

                                <label className="form-control">
                                    <div className="label font-bold">
                                        <span className="label-text">stockStatus</span>
                                    </div>
                                    <select name="stockStatus" className="select select-bordered ">
                                        <option disabled selected>Pick one</option>
                                        <option value="In stock">In stock</option>
                                        <option value="Made to Order">Made to Order</option>
                                    </select>
                                </label>


                                <label className="form-control">
                                    <div className="label font-bold">
                                        <span className="label-text">customization</span>
                                    </div>
                                    <select name="customization" className="select select-bordered ">
                                        <option disabled selected>Pick one</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </label>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">rating</span>
                                    </label>
                                    <input type="text" name="rating" placeholder="rating" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">processingTime</span>
                                    </label>
                                    <input type="date" name="processingTime" placeholder="processing_time" className="input input-bordered" required />
                                </div>



                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">image</span>
                            </label>
                            <input type="text" name="image" placeholder="enter photo url" className="input input-bordered" required />
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </form>
                    <div>

                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"

                        />
                        {/* Same as */}
                        <ToastContainer />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AddCraft;