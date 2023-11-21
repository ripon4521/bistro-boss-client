import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Meanu from "../Pages/Meanu/Meanu/Meanu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login/Login";
import SighnUp from "../Pages/SighnUp/SighnUp";
import Scret from "../Pages/Shared/Scret/Scret";
import Private from "./Private/Private";
import Dashborad from "../Layout/Dashborad";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

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
      },{
        path:"/login",
        element:<Login></Login>
      },{
        path:"/register",
        element:<SighnUp></SighnUp>

      },{
        path:"/scret",
        element:<Private><Scret></Scret></Private>
        
      }
      ]
    },
    {
      path:"/dashboard",
      element:<Private><Dashborad></Dashborad></Private>,
      children:[
        {
          path:"cart",
          element:<Cart></Cart>
        },
        // admin
        {
          path:"users",
          element:<AllUsers></AllUsers>
        }

      ]

    }
  ]);