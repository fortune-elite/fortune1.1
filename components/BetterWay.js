import Image from "next/image"

const BetterWay = () => {
    return ( 
        <div className="flex flex-col md:flex-col lg:flex-row pt-0 md:pt-10 lg:pt-10">
            <div>
                <h1>A better way to invest your money and make it grow.</h1>
                <p>Fortune helps customers to achieve their monetary gooals by helping them save & invest . Fissure bills. Obtaining a loan. Control your money with spending analytics. </p>
                <div>
                    <button>Create Account</button>
                    <button>Login now</button>
                </div>
            </div>
            <div>
                <Image src="/vercel.svg" width={227} height={177} />
            </div>

        </div>
     );
}
 
export default BetterWay;