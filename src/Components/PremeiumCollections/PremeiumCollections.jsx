import img1 from '../../assets/pc1-removebg-preview.png'
import img2 from '../../assets/pc2-removebg-preview.png'
import img3 from '../../assets/pc3-removebg-preview.png'
import img4 from '../../assets/pc4-removebg-preview (1).png'
import img5 from '../../assets/pc5-removebg-preview.png'
import img6 from '../../assets/pc6-removebg-preview.png'
import img7 from '../../assets/pc7-removebg-preview.png'
import img8 from '../../assets/pc8-removebg-preview.png'
import img9 from '../../assets/pc9-removebg-preview (1).png'
import img10 from '../../assets/pc10-removebg-preview.png'
import { BsArrowUpRight } from "react-icons/bs";
import './style.css'
import { useEffect, useState, useRef } from 'react';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const goggles = [
    {
        img: img1,
        glassname: "Frost Peak Vision",
        glasstype: "Alpine Clarity",
        price: 79.99
    },
    {
        img: img2,
        glassname: "Aquatic Serenity",
        glasstype: "Aqua Flow",
        price: 14.99
    },
    {
        img: img3,
        glassname: "Safety Sentinel",
        glasstype: "Workplace Guardian",
        price: 9.99
    },
    {
        img: img4,
        glassname: "Night Rider's Shield",
        glasstype: "Rider's Companion",
        price: 39.99
    },
    {
        img: img5,
        glassname: "Sky Voyager Shades",
        glasstype: "Retro Flyer",
        price: 49.99
    },
    {
        img: img6,
        glassname: "Phantom Elite Guard",
        glasstype: "Stealth Sentinel",
        price: 69.99
    },
    {
        img: img7,
        glassname: "Velocity Windshield",
        glasstype: "Cyclist's Companion",
        price: 29.99
    },
    {
        img: img8,
        glassname: "Deep Sea Explorer",
        glasstype: "Abyssal Discoverer",
        price: 99.99
    },
    {
        img: img9,
        glassname: "Eclipse Enigma",
        glasstype: "Fashion Fusion",
        price: 24.99
    },
    {
        img: img10,
        glassname: "Wilderness Wanderer",
        glasstype: "Nature's Observer",
        price: 59.99
    }
];

const PremeiumCollections = () => {
    const [itemsToShow, setItemsToShow] = useState(4);
    const [showMore, setShowMore] = useState(true);
    const boxRefs = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        boxRefs.current.forEach((boxRef) => {
            gsap.from(boxRef, {
                opacity: 0,
                y: 30,
                duration: 0.2,
                scrollTrigger: {
                    trigger: boxRef,
                    start: 'top bottom',
                    toggleActions: 'play none none none',
                    scrub: true
                },
            });
        });
    }, [itemsToShow]);

    const handleToggle = () => {
        if (showMore) {
            if (itemsToShow + 4 >= goggles.length) {
                setItemsToShow(goggles.length);
                setShowMore(false);
            } else {
                setItemsToShow(itemsToShow + 4);
            }
        } else {
            setItemsToShow(4);
            setShowMore(true);
        }
    };

    const displayedGoggles = goggles.slice(0, itemsToShow);

    return (
        <div className=''>
            <h1 className='text-center text-[5vw] my-10 font-ubuntu'>Fan Favorite</h1>

            <div className='grid px-10 gap-6 md:grid-cols-2 lg:grid-cols-4 mx-auto justify-center items-center'>
                {displayedGoggles.map((goggle, index) => (
                    <div
                        ref={(element) => (boxRefs.current[index] = element)}
                        className='box relative font-ubuntu justify-center bgStyle items-center flex flex-col cursor-pointer hover:scale-105 transition-all duration-500'
                        key={index}
                    >
                        <div>
                            <img className='mx-auto' src={goggle.img} alt='' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-2xl'>{goggle.glassname}</p>
                            <p className='text-sm px-3 absolute right-2 top-[60%] py-1 border rounded-full bg-neutral-200 font-bold'>
                                {goggle.glasstype}
                            </p>
                            <div className='flex items-center pt-4 pb-4 justify-between'>
                                <p className='text-xl font-semibold'>${goggle.price}</p>
                                <button className='text-xl flex items-center'>
                                    Learn More <BsArrowUpRight />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center my-10'>
                <button
                    className='text-xl font-semibold bg-blue-500 text-white py-2 px-4 rounded'
                    onClick={handleToggle}
                >
                    {showMore ? 'View More' : 'View Less'}
                </button>
            </div>
        </div>
    );
};

export default PremeiumCollections;
