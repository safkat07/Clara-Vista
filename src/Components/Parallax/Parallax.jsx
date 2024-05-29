import { useEffect, useRef } from 'react';
import bgimg from '../../assets/pexels-olly-842811.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Parallax = () => {
    const backgroundImg = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: backgroundImg.current,
                start: "top 60%",
                end: "bottom center ",
                scrub: 0.5,
            }
        });

        timeline.from(backgroundImg.current, {
            clipPath: "inset(25%)",

        })

    }, []);

    return (
        <div id='con' className="h-screen  relative ">
            <div className='absolute md:top-0 top-[20%]  w-[100%] object-cover' ref={backgroundImg}>
                <img className='brightness-50 ' src={bgimg} alt="" />
            </div>
            {/* little img */}
            <div className='flex pt-[30vh]  justify-center items-center flex-col'>
                {/* <div >
                    <img ref={introImg} className='brightness-75 object-cover object-top relative' width={300} src={littleimg} alt="" />
                </div> */}
                <h1 data-scroll data-scroll-speed="0.9" className='text-[4vw] uppercase absolute lg:mt-[30vh] mt-[10vh] text-opacity-65 font-ubuntu z-[10] font-semibold text-white text-center'>Clara Vista: Style and Clarity Redefined.</h1>
            </div>
        </div>
    )
}

export default Parallax;
