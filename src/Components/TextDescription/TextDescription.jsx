
import './style.css'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';


const TextDescription = () => {
    const phrases = ["Where Style Meets Clarity", "Explore our curated collection of goggles,", "and fashion aficionado alike,", "Experience unparalleled clarity", "See the world differently with Clara Vista."
    ]
    return (
        <div className="description">
            {
                phrases.map((phrase, index) => {

                    return <AnimatedText key={index}>{phrase}</AnimatedText>
                })
            }
        </div>
    )
}

export default TextDescription


function AnimatedText({ children }) {
    const text = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                start: "0px bottom",
                end: "bottom+=400px bottom",
                scrub: 0.9
            },
            left: "-200px",
            opacity: 0
        })

    }, []);
    return (
        <p ref={text} className='font-ubuntu'>
            {children}
        </p>
    )
}
