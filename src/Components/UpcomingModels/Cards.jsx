import { BsArrowUpRight } from 'react-icons/bs'


const Cards = ({ image, title, desc, price }) => {
    return (
        <div>
            <div>
                <img className='rounded-lg drop-shadow-lg' src={image} alt="" />
            </div>
            <div className='flex pt-2 flex-col'>
                <p className='lg:text-[1.5vw] md:text-[3vw] text-[7vw]'>{title}</p>
                <p className='lg:text-[1vw] md:text-[2.2vw] text-[4vw]'>{desc}</p>
                <button className='flex font-semibold justify-start lg:text-[1vw] items-center  '>From ${price} <span><BsArrowUpRight /></span> </button>

            </div>
        </div>
    )
}

export default Cards