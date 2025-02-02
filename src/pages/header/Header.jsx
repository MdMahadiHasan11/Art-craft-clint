// import React from 'react';
import { Tooltip } from 'react-tooltip'
import { useContext, useEffect, useState } from "react";
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


    // toggle  theme
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    // toggle theme end





    const links = < >

        <li className="font-bold"><NavLink to="/">Home</NavLink></li>
        <li className="font-bold"><NavLink to="/allCraft">All Art&Craft Items</NavLink></li>
        <li className="font-bold"><NavLink to="/addCraft">Add Craft Item</NavLink></li>
        <li className="font-bold"><NavLink to="/myCraft">My Art&Craft List</NavLink></li>


    </>
    return (
        <div className="navbar bg-base-300 rounded-xl">
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
                        <div data-tooltip-id="my-tooltippp" className=" relative group">
                            <img src={user.photoURL ? user.photoURL : `https://i.ibb.co/qW320MT/images.jpg`} className="rounded-full w-12 h-12" />

                            <Tooltip
                                id="my-tooltippp"
                                content={user.displayName ? user.displayName : "User"}
                                events={['hover']}
                            />



                            {/* <div className=" -left-44 transform text-green-500 rounded-full absolute inset-0  opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center  text-lg font-bold">
                                <div>{user.displayName ? user.displayName : "User"}</div>
                            </div> */}
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
                {/* theme */}
                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox"
                        onChange={handleToggle}
                        checked={theme === "light" ? false : true}

                    />

                    {/* sun icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
                {/* theme end */}
            </div>
        </div>
    );
};

export default Header;