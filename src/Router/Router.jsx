import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout";
import Home from "../Components/Home/Home";
import Discover from "../Components/Discover/Discover";
import Categories from "../Components/Categories/Categories";
import AboutUs from "../Components/AboutUs/AboutUs";
import Contact from "../Components/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <div className="text-7xl text-red-600 font-bold">Error Found</div>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "discover",
                element: <Discover />
            },
            {
                path: "categories",
                element: <Categories />
            },
            {
                path: "aboutus",
                element: <AboutUs />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    },
]);

export default router