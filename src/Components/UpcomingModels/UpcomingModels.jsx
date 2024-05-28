import Cards from "./Cards"
import img1 from '../../assets/fimg1.webp'
import img2 from '../../assets/fimg2.webp'
import img3 from '../../assets/fimg3.webp'
import img4 from '../../assets/fimg4.webp'


const UpcomingModels = () => {
    return (
        <div className='py-60 mx-auto relative '>
            <h1 className='text-center text-[5vw] py-16 font-ubuntu'>Our Upcomoing Models</h1>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  px-10 gap-10 mx-auto relative w-full">
                <Cards image={img1} title={"Golden Horizon Shades"} desc={"Ultra Light Frame, Gradient Precious Lens."} price={"179"} />
                <Cards image={img2} title={"Elysian Eclipses"} desc={"Dual Tone Elegance, Pure Clarity."} price={"179"} />
                <Cards image={img3} title={"Arctic Puritys"} desc={"Sleek Design, Crystal Vision"} price={"179"} />
                <Cards image={img4} title={"Pinnacle I"} desc={"The Down of Elegence."} price={"179"} />

            </div>

            <div className="flex pt-20 justify-center items-center">
            <button className="bg-neutral-300 px-5 py-2 rounded-md text-xl">Explore Now</button>
            </div>
        </div>
    )
}

export default UpcomingModels