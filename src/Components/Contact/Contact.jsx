
const Contact = () => {
    return (
        <div className="py-20  max-w-2xl font-ubuntu mx-auto flex flex-col space-y-5 justify-center items-center">
            <h1 className="lg:text-5xl leading-none md:text-3xl text-2xl">Get 10% off your first order</h1>
            <p className="leading-none text-xl">Sign up now for exclusive news and savings</p>
            <div className=" flex w-full justify-center items-center mx-auto">
                <input type="email" placeholder="Email Address" className="border pl-2 py-2 md:w-full w-3/4  " />
                <input type="submit" value="Sign Up" className="py-2 border cursor-pointer bg-neutral-600 text-neutral-200 px-2" />
            </div>
        </div>
    )
}

export default Contact