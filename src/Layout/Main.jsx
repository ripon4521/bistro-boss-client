import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noheaderFooter = location.pathname.includes('login')
    return (
        <div>
            <div>
               { noheaderFooter || <Navbar></Navbar>}
                <Outlet></Outlet>
                { noheaderFooter || <Footer></Footer>}
            </div>
        </div>
    );
};

export default Main;