// import React from 'react';
import { Tooltip } from 'react-tooltip'
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    console.log(user);
    // console.log(user.displayName);





    const links = < >

        <li className="font-bold"><NavLink to="/">Home</NavLink></li>
        <li className="font-bold"><NavLink to="/allCraft">All Art&Craft Items</NavLink></li>
        <li className="font-bold"><NavLink to="/addCraft">Add Craft Item</NavLink></li>
        <li className="font-bold"><NavLink to="/myCraft">My Art&Craft List</NavLink></li>


    </>
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                        {/* <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li> */}
                        {links}
                    </ul>
                </div>
                <p className="btn text-yellow-800 font-bold lg:text-3xl md:text-2xl text-xl">Craftify<span className='lg:text-3xl md:text-2xl text-xl  text-orange-700 mr-0 pr-0 font-bold'>Hub</span> </p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {/* <li><a>Item 1</a></li>
                    <li><a>Item 3</a></li> */}
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">



                {
                    user && <span className="font-bold mr-4"><NavLink to="">
                        <div  data-tooltip-id="my-tooltippp" className=" relative group">
                            <img  src={user.photoURL ? user.photoURL : `https://i.ibb.co/qW320MT/images.jpg`} className="rounded-full w-12 h-12" />

                            <Tooltip
                                id="my-tooltippp"
                                content={user.displayName ? user.displayName : "User"}
                                events={['hover']}
                            />



                            <div className=" -left-44 transform text-green-500 rounded-full absolute inset-0  opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center  text-lg font-bold">
                                <div>{user.displayName ? user.displayName : "User"}</div>
                            </div>
                        </div>

                    </NavLink></span>
                }

                {
                    user ? <button onClick={handleSignOut} className="btn bg-orange-600 text-lg mr-4">
                        Log Out
                    </button> : <span>
                        <button className="btn mr-4 bg-orange-600 text-lg">
                            <NavLink to="/login">Login</NavLink>
                        </button>
                        <button className="btn bg-orange-600 text-lg">
                            <NavLink to="/register">Register</NavLink>
                        </button>

                    </span>

                }
            </div>
        </div>
    );
};

export default Header;