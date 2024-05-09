import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect } from "react";

const Layout = () => {


    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;
