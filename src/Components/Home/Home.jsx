import AboutUs from "../AboutUs/AboutUs"
import Banner from "../Banner/Banner"
import FeaturedModels from "../FeaturedModels/FeaturedModels"
import Parallax from "../Parallax/Parallax"
import PremeiumCollections from "../PremeiumCollections/PremeiumCollections"
import TextDescription from "../TextDescription/TextDescription"

const Home = () => {
    return (
        <>
            <Banner />
            <Parallax />
            <TextDescription />
            <FeaturedModels />
            {/* <PremeiumCollections /> */}
            {/* <AboutUs/>
            <AboutUs/>
            <AboutUs/> */}
        </>


    )
}

export default Home