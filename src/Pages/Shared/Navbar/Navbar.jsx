import { Link } from "react-router-dom";


const Navbar = () => {

const navlink = 
<>
        <li ><Link className=" px-3 py-2 rounded font-inter text-xl font-semibold hover:bg-yellow-400">Home</Link></li>
        <li ><Link className="  px-3 py-2 rounded font-inter text-xl font-semibold hover:bg-yellow-400">Contact Us</Link></li>
        <li ><Link className=" px-3 py-2 rounded  font-inter text-xl font-semibold hover:bg-yellow-400">Dashboard</Link></li>
        <li ><Link to="/meanu"   className=" px-3 py-2 rounded font-inter text-xl font-semibold hover:bg-yellow-400">Our Meanu</Link></li>
        <li ><Link className="  px-3 py-2 rounded font-inter text-xl font-semibold hover:bg-yellow-400">Our Shop</Link></li>
        <li ><Link className="  px-3 py-2 rounded font-inter text-xl font-semibold hover:bg-yellow-400">My cart</Link></li>
</>


    return (
        <div>
          <div className="navbar p-5 fixed z-10 bg-opacity-50 text-white container bg-black">
  <div className="navbar-start">
    
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost bg-yellow-400 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-yellow-400 rounded-box w-52">
      {navlink}
      </ul>
    </div>

   <div>
   <h1 className="text-white  font-extrabold font-cinzel text-3xl">Bistro Boss</h1>
    <h1 className="text-white  font-extrabold font-cinzel tracking-[10px] text-xl">Restaurant</h1>

   </div>
  </div>

  <div className="navbar-center  hidden lg:flex">
    <ul className=" flex gap-3   ">
    {navlink}
    </ul>
  </div>


  <div className="ml-28 md:ml-56 lg:ml-0 ">
  <button className="btn btn-warning bg-yellow-400">Sign Out</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;