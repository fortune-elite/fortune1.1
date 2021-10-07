import { BsFillAlarmFill } from "react-icons/bs";
import { BiBullseye } from "react-icons/bi";


const WhyChooseUs = () => {
    return ( 
        <div className= " flex-row items-center  md:flex-row  lg:flex-row pt-0  md:pt-10 lg:pt-10 ">
            <h1 className="font-bold py-2 text-4xl ml-10 md:ml-40 lg:ml-40  " >Why Choose Us</h1>
            <p className="text-sm py-2 px-16 sm:px-2">We help you save money without putting forth a lot of effort with computerized savings</p>

            <div className=" flex flex-col md:flex-row px-14 space-y-8  lg:flex-row pt-0  md:pt-5 lg:pt-5">
                <div className="bg-blue-800 h-44 w-52 rounded-sm shadow-sm overflow-hidden">
                    <p className="text-sm text-white pt-10 px-5">Create an account with us within 2-3 minutes for FREE</p>
                    <BsFillAlarmFill className="text-5xl text-gray-400  "/>
                </div>
                <div className="bg-blue-500 h-44 w-52  sm:w-60 sm:h-60 rounded-md shadow-sm   overflow-hidden">
                    <p className="text-sm text-white pt-10 px-5">Save on the go to reach your target goals</p>
                    <BiBullseye className="text-7xl text-gray-400  " />
                </div>
                <div className="bg-gray-800 h-44 w-52 sm:w-60 sm:h-60 rounded-sm shadow-sm overflow-hidden">
                    <p className="text-sm text-white pt-10 px-5">Take out a loan against your escrow account</p>
                    <BiBullseye className="text-7xl text-gray-400" />
                </div>
            </div>
        </div>
     );
}
 
export default WhyChooseUs;