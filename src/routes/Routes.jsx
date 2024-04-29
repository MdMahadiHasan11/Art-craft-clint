import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import AllArtCraft from "../pages/allArtCraft/AllArtCraft";
import AddCraft from "../pages/addCraft/AddCraft";
import MyCraft from "../pages/myCraft/MyCraft";
import Details from "../pages/details/Details";
import Update from "../pages/update/Update";
import Category from "../pages/category/Category";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/addCrafts`),
                // loader1: () => fetch(`http://localhost:5000/category`)

            },
            {
                path: '/allCraft',
                // loader: () => fetch('/EstateData.json'),
                element:<AllArtCraft></AllArtCraft>,
                loader: () => fetch(`http://localhost:5000/addCrafts`)

            },
            {
                path: '/addCraft',
                element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
            },
            {
                path: '/myCraft',
                element:<PrivateRoute><MyCraft></MyCraft></PrivateRoute> 
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>,
                
            },
            {
                path: '/details/:id',
                // loader: () => fetch('/EstateData.json'),
                element:<PrivateRoute><Details></Details></PrivateRoute> 
                

            },
            {
                path: '/category/:subcategory',
                // loader: () => fetch('/EstateData.json'),
                element:<Category></Category> ,
                

            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>
            },
        ]
    },
]);

export default Routes;