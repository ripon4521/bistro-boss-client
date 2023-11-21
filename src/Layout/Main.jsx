import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noheaderFooter = location.pathname.includes('login' )
    const noheaderFooters = location.pathname.includes('register' )
    return (
        <div>
            <div className="container mx-auto"> 
               { noheaderFooter || noheaderFooters || <Navbar></Navbar>}
                <Outlet></Outlet>
                {noheaderFooters|| noheaderFooter || <Footer></Footer>}
            </div>
        </div>
    );
};

export default Main;