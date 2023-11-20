import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/Authprovider";
import userImg from "../../../assets/icon/icon-5359553_1280-removebg-preview.png";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  console.log(user);
  const handleLogout = () => {
    logout().then((result) => {
      toast.success("Log Out SuccessFull", {
        duration: 5000,
      });
      console.log(result);
    });
  };

  const navlink = (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "  font-inter text-xl font-semibold  text-yellow-400"
            : "text-white font-inter text-xl"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          isActive
            ? "  font-inter text-xl font-semibold  text-yellow-400"
            : "text-white font-inter text-xl"
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "  font-inter text-xl font-semibold  text-yellow-400"
            : "text-white font-inter text-xl"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/meanu"
        className={({ isActive }) =>
          isActive
            ? " font-inter text-xl font-semibold  text-yellow-400"
            : "text-white font-inter text-xl"
        }
      >
        Our Meanu
      </NavLink>
      <NavLink
        to="/order/Salad"
        className={({ isActive }) =>
          isActive
            ? "  font-inter text-xl font-semibold text-yellow-400"
            : " font-inter text-xl text-white"
        }
      >
        Our Shop
      </NavLink>
      <NavLink
        to="/mycart"
        className={({ isActive }) =>
          isActive
            ? "  font-inter text-xl font-semibold  text-yellow-400"
            : "text-white font-inter text-xl"
        }
      >
        My Cart
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar p-5 fixed z-10 bg-opacity-50 text-white container bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost bg-yellow-400 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-yellow-400 rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>

          <div>
            <h1 className="text-white  font-extrabold font-cinzel text-3xl">
              Bistro Boss
            </h1>
            <h1 className="text-white  font-extrabold font-cinzel tracking-[10px] text-xl">
              Restaurant
            </h1>
          </div>
        </div>

        <div className="navbar-center  hidden lg:flex">
          <ul className="  flex  gap-5  ">{navlink}</ul>
        </div>

        <div className="ml-28 md:ml-56 lg:ml-3 ">
          {user ? (
            <Link>
              <div>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user.photoURL || userImg}
                      />
                      {/* {
         user?.photoURL? <img alt="Tailwind CSS Navbar component" src={userImg} /> :<img alt="Tailwind CSS Navbar component" src={user.photoURL} />
       } */}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2   shadow menu menu-sm dropdown-content bg-yellow-400 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between font-inter text-xl">{user?.displayName}</a>
                    </li>

                    <li className="" >
                      <a onClick={handleLogout} className="font-inter text-2xl">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          ) : (
            <Link to="/login">
              {" "}
              <button className="btn btn-warning bg-yellow-400">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
