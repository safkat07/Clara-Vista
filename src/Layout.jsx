import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect } from "react";
import Footer from "./Components/Footer/Footer";

const Layout = () => {


    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
