import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return <footer className=" pt-32 bg-neutral-200 relative">
        <p className="text-center  leading-none font-banner lg:text-[7vw] md:text-[10vw] text-[10vw]">Clara Vista</p>
        <p className="text-center leading-none font-banner2 lg:text-[2vw] md:text-[2vw] text-[5vw]">Your Favourite Googles on Your DoorStep</p>
        <div className="flex  text-2xl gap-2 pt-10 pb-2 justify-center items-center">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaTwitter />
        </div>
    </footer>
}

export default Footer