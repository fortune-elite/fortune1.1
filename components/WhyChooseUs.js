const WhyChooseUs = () => {
    return ( 
        <div className=" bg-gray-100 flex-row items-center space-x-8  md:flex-row  lg:flex-row pt-0 px-5 md:pt-10 lg:pt-10 ">
            <h1>Why Choose Us</h1>
            <p>We help you save money without putting forth a lot of effort with computerized savings</p>

            <div className=" flex flex-col items-center space-x-8  md:flex-col  lg:flex-row pt-0 px-5 md:pt-10 lg:pt-10">
                <div className="bg-blue-500 h-20 w-50 rounded-sm shadow-sm max-w-sm min-h-full overflow-hidden">
                    <p>Create an account with us within 2-3 minutes for FREE</p>
                </div>
                <div className="bg-purple-500 h-20 w-50 rounded-sm shadow-sm max-w-sm min-h-full overflow-hidden">
                    <p>Create an account with us within 2-3 minutes for FREE</p>
                </div>
                <div className="bg-gray-800 h-20 w-50 rounded-sm shadow-sm max-w-sm min-h-full overflow-hidden">
                    <p>Create an account with us within 2-3 minutes for FREE</p>
                </div>
            </div>
        </div>
     );
}
 
export default WhyChooseUs;