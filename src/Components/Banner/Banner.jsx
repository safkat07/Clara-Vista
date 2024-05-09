import bannerimg from '../../assets/Ahlens-Falak-3-0809-_9-removebg-preview.png'
import { GoArrowRight } from "react-icons/go";
import glassImg from '../../assets/bannerGlass.png'

const Banner = () => {
    return (
        <div className="min-h-[80Vh] bg-[#f5f6f7]">
            <div className="flex gap-x-[3vw] w-[100%]  absolute top-[17.6vh] justify-between">
                {/* left img */}
                <div className="bg-[#e7ecece7] relative  flex-1   z-10 h-[70vh]" >
                    <img
                        style={{ width: 'auto', height: '100%' }}
                        className='mx-auto z-20 absolute bottom-0 left-0 right-0' src={bannerimg} alt="" />
                    <p className='font-banner  text-[7vw] tracking-[0.2em] pt-[8vh] text-center text-opacity-40 text-gray-950'>Clara Vista</p>
                </div>
                {/* right img */}
                <div className="bg-[#e7ecece7]  text-center relative  flex-1  z-10 h-[70vh]" >
                    <div className='flex pt-[2vh] flex-col'>
                        <p className='text-[3vw] '><span className='font-banner2 text-gray-600 text-[3vw]'>Clara-Vista</span> <span className='font-ubuntu font-semibold'>Pinnacle III</span></p>
                        <p className='text-[2vw] font-ubuntu  '>Sophistication Beyond Sight.</p>
                        <p className='flex justify-center'>
                            <button className='flex gap-x-[1vw] items-center'><span>Shop Now</span> <span><GoArrowRight /></span></button>
                        </p>
                    </div>
                    <div className=' flex flex-col justify-center items-center'>
                        <div>
                            <img
                                style={{ width: '100%', height: '100%' }}
                                className='mx-auto ' src={glassImg} alt="" />
                        </div>
                        <div className='flex absolute font-ubuntu text-[1vw]  bottom-10 px-10   gap-x-[5vw]  items-center '>
                            <div className='px-[2vw] rounded-md py-[1vh] text-start '>
                                <p className=' w-[80%] '>Father-light build with <span className='font-semibold'>gold-accented finesse</span></p>
                            </div>
                            <div className='px-[2vw] flex items-center  py-[1vh] rounded-md text-start '>
                                <p className=' w-[80%] '><span className='font-semibold'>Precious-crafted for</span> timeless ailure and comfort </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner