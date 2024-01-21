import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[{
        path: '/',
        element: <Home></Home>
      },{
        path:'about',
        element:<AboutUs></AboutUs>
      },{
        path: 'login',
        element: <Login></Login>
      },{
        path: 'register',
        element: <Register></Register>
      }
    ]
    },
  ]);