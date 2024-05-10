import './style.css'
import { BsArrowUpRight } from "react-icons/bs";
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
const FeaturedModels = () => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
        const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")

        gsap.set(photos, { yPercent: 101 })
        const allPhotos = gsap.utils.toArray(".desktopPhoto")

        // create
        let mm = gsap.matchMedia();
        mm.add("(min-width: 600px)", () => {
            console.log("desktop")

            ScrollTrigger.create({
                trigger: ".gallery",
                start: "top top",
                end: "bottom bottom",
                pin: ".right",
                scrub: "0.5",
                duration: "0.5",
                stagger: 0.2

            })

            details.forEach((detail, index) => {

                let headline = detail.querySelector("h1")
                let animation = gsap.timeline()
                    .to(photos[index], { yPercent: 0 })
                    .set(allPhotos[index], { autoAlpha: 0 })
                ScrollTrigger.create({
                    trigger: headline,
                    start: "top 80%",
                    end: "top 50%",
                    animation: animation,
                    scrub: "0.5",
                    duration: "0.5",
                    stagger: 1
                })
            })



            return () => { // optional
                // custom cleanup code here (runs when it STOPS matching)
                console.log("mobile")
            };
        });

    })
    return (
        <>
            <h1 className='text-[5vw] text-center font-ubuntu my-7'>Featured Models</h1>

            <div className="gallery">
                <div className="left">
                    <div className="desktopContent">
                        <div className="desktopContentSection font-ubuntu">
                            <h1>Golden Horizon Shades</h1>
                            <p>Ultra Light Frame, Gradient Precious Lens.</p>
                            <button className='flex justify-start text-[2vw] py-5 items-center  '>From $179 <span><BsArrowUpRight /></span> </button>
                        </div>
                        <div className="desktopContentSection">
                            <h1>Elysian Eclipses</h1>
                            <p>
                                Dual Tone Elegance, Pure Clarity
                            </p>
                            <button className='flex justify-start text-[2vw] py-5 items-center  '>From $139 <span><BsArrowUpRight /></span> </button>
                        </div>
                        <div className="desktopContentSection">
                            <h1>Arctic Purity</h1>
                            <p>Sleek Design, Crystal Vision</p>
                            <button className='flex justify-start text-[2vw] py-5 items-center  '>From $179 <span><BsArrowUpRight /></span> </button>

                        </div>
                        <div className="desktopContentSection">
                            <h1>Pinnacle I</h1>
                            <p>The Down of Elegence</p>
                            <button className='flex justify-start text-[2vw] py-5 items-center  '>From $179 <span><BsArrowUpRight /></span> </button>
                        </div>

                    </div>
                </div>

                <div className="right">

                    {/* <!-- mobile content --> */}
                    <div className="mobileContent">
                        <div className="mobilePhoto red"></div>
                        <h1>Golden Horizon Shades</h1>
                        <p>Ultra Light Frame, Gradient Precious Lens.</p>
                        <button className='flex justify-start text-[2vw] py-5 items-center  '>From $179 <span><BsArrowUpRight /></span> </button>

                        <div className="mobilePhoto green"></div>
                        <h1>Elysian Eclipses</h1>

                        <p>
                            Dual Tone Elegance, Pure Clarity
                        </p>
                        <button className='flex justify-start text-[2vw] py-5 items-center  '>From $139 <span><BsArrowUpRight /></span> </button>

                        <div className="mobilePhoto pink"></div>
                        <h1>Arctic Purity</h1>
                        <p>Sleek Design, Crystal Vision</p>
                        <button className='flex justify-start text-[2vw] py-5 items-center  '>From $179 <span><BsArrowUpRight /></span> </button>

                        <div className="mobilePhoto blue"></div>
                        <h1>Pinnacle I</h1>
                        <p>The Down of Elegence</p>
                        <button className='flex justify-start text-[2vw] py-5 items-center  '>From $179 <span><BsArrowUpRight /></span> </button>
                    </div>

                    {/* <!-- desktop content --> */}

                    <div className="desktopPhotos">
                        <div className="desktopPhoto red"></div>
                        <div className="desktopPhoto green"></div>
                        <div className="desktopPhoto pink"></div>
                        <div className="desktopPhoto blue"></div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default FeaturedModels