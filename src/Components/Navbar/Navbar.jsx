import { NavLink } from 'react-router-dom'
import { RiGogglesLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { PiUser } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {
    return (
        <div className='bg-white    shadow-md'>
            {/* icons and navlinks */}
            <div className='flex items-center xl:py-[0.3vw] py-3 px-[3vw] justify-between'>
                {/* logo */}
                <div className='flex gap-x-[3vw] items-center'>
                    <NavLink>
                        <span className=' xl:text-[3vw] md:text-[5vw] text-[10vw] text-[#E31823]'>
                            <RiGogglesLine />
                        </span>
                    </NavLink>
                    {/* navlinks */}
                    <div className='md:flex  hidden font-ubuntu  gap-x-[1.5vw]'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/">Discover</NavLink>
                        <NavLink to="/">Categories</NavLink>
                        <NavLink to="/">About Us</NavLink>
                        <NavLink to="/">Contact</NavLink>
                    </div>
                </div>
                {/* user icons */}
                <div className='md:flex xl:text-[1vw] hidden text-[2vw]  gap-x-[0.9vw] items-center'>
                    <span className='cursor-pointer' ><IoSearchOutline /></span>
                    <span className='cursor-pointer' ><IoBagHandleOutline /></span>
                    <span className='cursor-pointer' ><PiUser /></span>
                </div>

                <span className='text-[6vw] md:hidden block' >
                    <CiMenuFries />
                </span >
            </div>
        </div>
    )
}

export default Navbar