import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Meanu from "../Pages/Meanu/Meanu/Meanu";

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
        }
      ]
    },
  ]);