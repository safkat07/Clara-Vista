import AboutUs from "../AboutUs/AboutUs"
import Banner from "../Banner/Banner"
import CheckYourGlass from "../CheckYourGlass/CheckYourGlass"
import Contact from "../Contact/Contact"
import FeaturedModels from "../FeaturedModels/FeaturedModels"
import Parallax from "../Parallax/Parallax"
import PremeiumCollections from "../PremeiumCollections/PremeiumCollections"
import TextDescription from "../TextDescription/TextDescription"
import UpcomingModels from "../UpcomingModels/UpcomingModels"

const Home = () => {
    return (
        <>
            <Banner />
            <Parallax />
            <TextDescription />
            <FeaturedModels />
            <PremeiumCollections />
            <UpcomingModels />
            <CheckYourGlass />
            <Contact />

        </>


    )
}

export default Home