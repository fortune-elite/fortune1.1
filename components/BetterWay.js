

const BetterWay = () => {
    return ( 
        <div className=" bg-gray-200 flex flex-col md:flex-col px-5 lg:flex-row pt-0 px-5 md:pt-10 lg:pt-10">
            <div className="px-5"> 
                <h1 className="text-xl font-medium text-black">A better way to invest your money and make it grow.</h1>
                <p>Fortune helps customers to achieve their monetary gooals by helping them save & invest . Fissure bills. Obtaining a loan. Control your money with spending analytics. </p>
                <div>
                    <button className="py-1 px-4 font-semibold rounded-full shawdow-md text-white bg-blue-500 hover:bg-blue-700">Create Account</button>
                    <button className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-blue-600 focus:ring-offset-2">Login now</button>
                </div>
            </div>
            <div>
                <img className="h-100 w-78" src="/Money.jpg" />
            </div>

        </div>
     );
}
 
export default BetterWay;