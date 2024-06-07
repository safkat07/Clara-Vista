import { NavLink } from 'react-router-dom';
import { RiGogglesLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { PiUser } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [open, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`bg-white z-[99] fixed left-0 right-0 transition-all duration-500 ${scrolled ? 'scale-95 h-16   rounded-xl' : 'h-20'}`}>
            {/* icons and navlinks */}
            <div className='flex items-center px-[3vw] justify-between h-full'>
                {/* logo */}
                <div className='flex gap-x-[3vw] items-center'>
                    <NavLink to="/">
                        <span className='xl:text-[3vw] md:text-[5vw] text-[10vw] text-[#E31823]'>
                            <RiGogglesLine />
                        </span>
                    </NavLink>
                    {/* navlinks */}
                    <div className='md:flex hidden font-ubuntu gap-x-[1.5vw]'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/">Discover</NavLink>
                        <NavLink to="/">Categories</NavLink>
                        <NavLink to="/">About Us</NavLink>
                        <NavLink to="/">Contact</NavLink>
                    </div>
                </div>
                {/* user icons */}
                <div className='md:flex xl:text-[1vw] hidden text-[2vw] gap-x-[0.9vw] items-center'>
                    <span className='cursor-pointer'><IoSearchOutline /></span>
                    <span className='cursor-pointer'><IoBagHandleOutline /></span>
                    <span className='cursor-pointer'><PiUser /></span>
                </div>

                <span
                    onClick={() => setIsOpen(!open)}
                    className={`text-[6vw] z-[101] md:hidden block ${open ? "text-white" : ""}`}>
                    <CiMenuFries />
                </span>
            </div>

            <div className={`h-screen fixed   z-[100] bg-neutral-500 transition-all duration-700 top-0 w-1/2 ${open ? "right-0" : "-right-full"} ${scrolled && "scale-100"}`}>
                <ul className="flex px-2 text-[7vw] justify-center items-end gap-y-5 mx-auto flex-col text-neutral-50 h-full">
                    <li>
                        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" onClick={() => setIsOpen(false)}>Discover</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" onClick={() => setIsOpen(false)}>Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" onClick={() => setIsOpen(false)}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" onClick={() => setIsOpen(false)}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
