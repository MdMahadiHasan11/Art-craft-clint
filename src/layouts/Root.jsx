// import React from 'react';
// import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";
// import DynamicTitle from "./DynamicTitle"

import { Outlet } from "react-router-dom";
import Header from "../pages/header/Header";
import Footer from "../pages/footer/Footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            {/* <DynamicTitle></DynamicTitle> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;