

const GlassCards = ({ image, title, desc, btntitle }) => {
    return (
        <div className='relative flex md:flex-row flex-col md:gap-y-0 gap-y-10 md:justify-between justify-center w-full mx-auto md:items-center items-start bg-[#D4D0C5] '>

            <div className='absolute md:w-[40%]  w-[75%]  px-5 flex md:text-center  flex-col gap-y-5  font-ubuntu text-neutral-700  '>
                <h1 className='lg:text-[1.5vw] md:text-[3.5vw] text-3xl'>{title}</h1>
                <p className='font-ubuntu'>{desc}</p>
                <button className='lg:text-xl  text-sm border bg-neutral-700   text-neutral-300  font-semibold  py-3 rounded-md'>Framer for {btntitle}</button>
            </div>
            <div className="">
                <img className="flex justify-center items-center" src={image} alt="" />
            </div>
        </div>
    )
}

export default GlassCards