import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Meanu from "../Pages/Meanu/Meanu/Meanu";
import Order from "../Pages/Order/Order/Order";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },{
        path:"meanu",
        element:<Meanu></Meanu>
        },
      {
        path:"/order/:category",
        element:<Order></Order>
      }
      ]
    },
  ]);