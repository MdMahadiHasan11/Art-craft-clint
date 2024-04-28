// import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import useAuth from "../../layouts/useAuth";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraft = () => {
    const { user } = useContext(AuthContext) || {};
    // const {user} = useAuth() || {};
    const [item, setItem] = useState([]);


    useEffect(() => {

        fetch(`http://localhost:5000/myCraft/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
                // displayAll(data)
            })

    }, [user])


    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                fetch(`http://localhost:5000/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = user.filter(user => user._id !== _id);
                            setItem(remaining);
                            // setDisplayAll(item);
                            window.location.reload();
                        }
                    })
            }
        });
    }



    // sorting function start

    // const [item, setItem] = useState([]);
    const [displayAll, setDisplayAll] = useState([]);
    const [temp, setTemp] = useState([]);
    // const [temp1, setTemp1] = useState([]);






    const handleDisplaySort = sort => {
        // setTemp1(['']);
        if (sort === 'rating') {
            const sortedNumbers = item.slice().sort((a, b) => b.rating - a.rating);
            // setTemp(sortedNumbers);
            setDisplayAll(sortedNumbers)

        }
        else if (sort === 'price') {
            const sortedNumbers = item.slice().sort((a, b) => b.price - a.price);
            // setTemp(sortedNumbers);
            setDisplayAll(sortedNumbers)

        }

    };

   

    useEffect(() => {
              
           setDisplayAll(item);
           setTemp(item);
                    
    }, [item]);



    // sorting function end

    return (
        <div>


            <div className="flex justify-center items-center mb-24 ">
                <details className="dropdown">
                    <summary className="m-1 btn bg-green-500">Sort By <IoIosArrowDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 font-bold rounded-box w-52">
                        
                        <li onClick={() => handleDisplaySort('price')}><a>Price</a></li>
                        <li onClick={() => handleDisplaySort('rating')}><a>Rating</a></li>
                    </ul>
                </details>
            </div>





            {/* <p>{item.length}</p>

            <p>{displayAll.length}</p> */}
            <div>
                <p data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className="text-3xl mt-10 font-bold rounded-2xl text-center bg-yellow-700 py-8 mt-6 mb-2 text-white"> Hello {user.displayName}  <br />Your Added Craft Items</p>
            </div>



            {/* my cart */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                {
                    displayAll?.map(p => (
                        <div key={p._id}>
                            <div>
                                {/* <p className="border">
                estate title :{estate_title}
                <button className="btn btn-secondary m-8"><Link to={`/details/${id}`}>view Details</Link> </button>
            </p> */}

                                <div className="p-4 bg-base-200 rounded-lg">
                                    <div className=" flex-col lg:flex">

                                        <div className="relative ">
                                            <img src={p.image} className="max-h-[230px] w-full rounded-lg shadow-2xl" />

                                            <div className="absolute -top-6 -left-8 p-4">
                                                <p className="text-white bg-blue-500 rounded-full w-10 text-center justify-center items-center h-10 font-semibold">NEW</p>
                                            </div>


                                        </div>
                                        <div className="text-center">
                                            <h1 className="text-2xl font-bold">{p.item_name}</h1>
                                            <div className="mb-6 mt-3">
                                                <p>CategoryName: {p.subcategoryName}</p>
                                            </div>

                                            <hr className="border-b border-gray-300 my-4" />

                                            <div className="flex justify-between text-xl font-semibold">
                                                <p>Taka:{p.price}</p>
                                                <p>Rating:{p.rating}</p>
                                            </div>
                                            <div className="flex my-6 justify-between text-xl font-semibold">
                                                <p className="font-bold">
                                                    Availability:{p.stockStatus}
                                                </p>
                                                <p>Customization:{p.customization}</p>
                                            </div>
                                            <div className="flex mt-4 ">
                                            </div>

                                            {/* <Link to={`/details/${p._id}`}><button className="btn bg-orange-600">View Details</button></Link> */}

                                            <div className="card-actions justify-end">

                                                <button onClick={() => handleDelete(p._id)} className="btn bg-orange-600">Delete</button>
                                                <Link to={`/update/${p._id}`}><button className="btn bg-orange-600">Update</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                    )
                }
            </div>
        </div>
    );
};

export default MyCraft;


{/* <div className="card-actions justify-end">

    <button onClick={() => handleDelete(p._id)} className="btn btn-primary">Delete</button>
    <Link to={`/update/${p._id}`}><button className="btn btn-primary">Update</button></Link>
</div>  */}