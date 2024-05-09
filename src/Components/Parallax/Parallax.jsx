import { useEffect, useRef } from 'react';
import bgimg from '../../assets/bigImg1.jpg';
import littleimg from '../../assets/little_img.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Parallax = () => {
    const backgroundImg = useRef(null);
    const introImg = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: backgroundImg.current,
                start: "top 40%",
                end: "bottom center ",
                scrub: 0.5,
            }
        });

        timeline.from(backgroundImg.current, {
            clipPath: "inset(20%)",

        })
            .to(introImg.current, { height: "300px" }, 0);
    }, []);

    return (
        <div id='con' className="h-screen  ">
            <div className='absolute  w-[100%] object-cover' ref={backgroundImg}>
                <img className='brightness-50 ' src={bgimg} alt="" />
            </div>
            {/* little img */}
            <div className='flex pt-[30vh]  justify-center items-center flex-col'>
                <div >
                    <img ref={introImg} className='brightness-75 object-cover object-top relative' width={300} src={littleimg} alt="" />
                </div>
                <h1 data-scroll data-scroll-speed="0.9" className='text-7xl uppercase absolute mt-[20vh] text-opacity-65 font-ubuntu z-[99] font-semibold text-white text-center'>Welcome to Wrold of Goggles</h1>
            </div>
        </div>
    )
}

export default Parallax;