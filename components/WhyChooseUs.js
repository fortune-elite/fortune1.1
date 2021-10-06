const WhyChooseUs = () => {
    return ( 
        <div className= " flex-row items-center  md:flex-row  lg:flex-row pt-0  md:pt-10 lg:pt-10 ">
            <h1 className="font-bold text-4xl ml-20">Why Choose Us</h1>
            <p className="text-sm py-2">We help you save money without putting forth a lot of effort with computerized savings</p>

            <div className=" flex flex-col space-x-12  md:flex-col  lg:flex-row pt-0 px-4 md:pt-5 lg:pt-5">
                <div className="bg-blue-800 h-36 w-44 rounded-sm shadow-sm max-w-sm min-h-full overflow-hidden">
                    <p className="text-sm">Create an account with us within 2-3 minutes for FREE</p>
                </div>
                <div className="bg-blue-500 h-36 w-44 rounded-md shadow-sm max-w-sm min-h-full overflow-hidden">
                    <p className="text-sm">Create an account with us within 2-3 minutes for FREE</p>
                </div>
                <div className="bg-gray-800 h-36 w-44 rounded-sm shadow-sm max-w-sm min-h-full overflow-hidden">
                    <p className="text-sm">Create an account with us within 2-3 minutes for FREE</p>
                </div>
            </div>
        </div>
     );
}
 
export default WhyChooseUs;