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
                scrub: "1",
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
                    scrub: "1",
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
                    {/* <div className="mobileContent">
                        <div className="mobilePhoto red"></div>
                        <h1>Red</h1>
                        <p>Red is a color often associated with strong emotions such as passion, love, and anger. It's a bold and attention-grabbing color that can evoke feelings of excitement, warmth, and energy.</p>

                        <div className="mobilePhoto green"></div>
                        <h1>Green</h1>
                        <p>Green is a color that is often associated with nature, growth, and harmony. It is a calming and relaxing color that can evoke feelings of balance, stability, and freshness. In color psychology, green is said to represent balance and stability, making it a popular choice for branding and marketing in the health and wellness industry. </p>

                        <div className="mobilePhoto pink"></div>
                        <h1>Pink</h1>
                        <p>Pink is a color that is often associated with femininity, romance, and sweetness. It is a softer and more delicate shade of red that can evoke feelings of warmth, love, and nurturing. In the world of branding and marketing, pink is often used to target a female audience or to promote products that are associated with beauty, love, or romance.</p>

                        <div className="mobilePhoto blue"></div>
                        <h1>Blue</h1>
                        <p>Blue is a color that is often associated with calmness, trust, and reliability. It is a peaceful and serene color that can evoke feelings of stability, security, and professionalism. In color psychology, blue is said to represent loyalty and trust, making it a popular choice for branding and marketing in the finance and technology industries.</p>
                    </div> */}

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