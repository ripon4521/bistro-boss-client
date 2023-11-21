import { NavLink, Outlet } from "react-router-dom";
import { BsBuildingExclamation } from "react-icons/bs";
import { FaHome, FaShoppingBag, FaUsers, FaUtensils  } from 'react-icons/fa';
import { FaCreditCard } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { RiFeedbackFill } from "react-icons/ri";
import { FaBookTanakh } from "react-icons/fa6"; 
import { IoIosMenu } from "react-icons/io";
import useCart from "../Hooks/useCart";
import { MdOutgoingMail } from "react-icons/md";

import { TfiMenuAlt } from "react-icons/tfi";

const Dashborad = () => {
    const [cart]=useCart();

    const isAdmin = true;

    return (
        <div className="flex">
            <div className="w-80  min-h-screen bg-yellow-400">
            <div className="mt-14  p-9">
            <h1 className="  font-extrabold font-cinzel text-3xl">
              Bistro Boss
            </h1>
            <h1 className="  font-extrabold font-cinzel tracking-[10px] text-xl">
              Restaurant
            </h1>
          </div>

            <ul className="px-9 py-10" >
                {
                  isAdmin? <>
                  <li className=" items-center gap-2 mt-10 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><FaHome></FaHome></span>  <NavLink to="">Admin Home</NavLink></li>
                <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><FaUtensils /></span> <NavLink to="/dashboard/cart">add items</NavLink></li>
                <li className=" items-center gap-2 mt-5  text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"> <TfiMenuAlt /></span><NavLink to="/dashboard/cart">Manage bookings</NavLink></li>
                <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><FaUsers /></span> <NavLink to="/dashboard/users">all users</NavLink></li>

                  </> : <>
                  <li className=" items-center gap-2 mt-10 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><FaHome></FaHome></span>  <NavLink to="">User Home </NavLink></li>
                <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><BsBuildingExclamation /></span> <NavLink to="/dashboard/cart">reservation</NavLink></li>
                <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"> <FaCreditCard /></span><NavLink to="/dashboard/cart">payment history </NavLink></li>
                <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><FaCartShopping /></span> <NavLink to="/dashboard/cart">my cart ({cart?.length})</NavLink></li>
                <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><RiFeedbackFill /></span> <NavLink to="/dashboard/cart">add review </NavLink></li>
                <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><FaBookTanakh /></span> <NavLink to="/dashboard/cart">my booking </NavLink></li>
                  </>
                }
                <div className="divider divider-error"></div>
                {/* Shared Component or Public dehte parbe */}
                <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><FaHome></FaHome></span>  <NavLink to="/"> Home </NavLink></li>
                <li className=" items-center gap-2 mt-4 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><IoIosMenu /></span>  <NavLink to="/meanu"> Menu </NavLink></li>
                <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><FaShoppingBag></FaShoppingBag></span>  <NavLink to="/order/:category"> Shop </NavLink></li>
                <li className=" items-center gap-2 mt-5 text-black hover:text-white flex font-cinzel text-xl"> <span className="text-2xl"><MdOutgoingMail /></span>  <NavLink to="/order/:category"> Contact </NavLink></li>
            </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashborad;