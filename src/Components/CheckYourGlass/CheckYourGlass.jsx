
import GlassCards from './GlassCards'
import img1 from '../../assets/glass1.jpg'
import img2 from '../../assets/glass2.jpg'
import img3 from '../../assets/glass3.jpg'
import img4 from '../../assets/glass4.jpg'
import img5 from '../../assets/glass5.jpg'
const CheckYourGlass = () => {
    return (
        <div className='py-10 mx-auto relative bg-neutral-100'>
            <h1 className='text-center text-[5vw] py-16 font-ubuntu'>Find Your Perfect Fits</h1>
            <div className='grid  md:px-14 gap-12 h-full w-full lg:grid-cols-2 mx-auto grid-cols-1  justify-center items-center'>
                <div className='lg:text-[2.5vw]   text-[4.5vw] text-center'>
                    <h1>Glasses for Your Face Shape</h1>
                    <p className='lg:text-2xl text-[3vw]'>Find the most flattering frames with our face shape glasses guide.</p>
                </div>
                <GlassCards image={img2} title={"Heart Face Shape"} desc={"Square and aviator glasses bring softness  balance  angular heart faces."} btntitle={"Heart Face"} />
                <GlassCards image={img3} title={"Oval Face Shape"} desc={"Proportionally balanced oval faces will look good in almost any frame style."} btntitle={"Oval Face"} />
                <GlassCards image={img5} title={"Square Face Shape"} desc={"Round and oval glasses add balance and structure to square faces."} btntitle={"Square Face"} />
                <GlassCards image={img1} title={"Diamond Face Shape"} desc={"Round, oval, and cat-eye styles add softness to angular diamond faces."} btntitle={"Diamond Face"} />


                <GlassCards image={img4} title={"Round Face Shape"} desc={"Rectangle and geometric frames add definition to round faces  soft features."} btntitle={"Round Face"} />


            </div>
        </div>
    )
}

export default CheckYourGlass