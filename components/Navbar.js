import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

function Navbar() {

    const [menuVisible, setMenuVisible] = useState(false)

    return (
        <div className={`w-screen bg-white flex justify-between ${menuVisible ? 'px-0 py-0' : 'px-2 md:px-12 py-5 md:py-12'}`}>
            <section className={`${menuVisible? 'hidden':'flex'} items-center h-7 sm:h-10 flex-medium bg-white w-2/12`}>
                <img src="fortune.png" alt="forrtune logo" className='h-12' />
                <h1 className='text-blue-700 text-l font-bold'>Fortune</h1>
            </section>
            <GiHamburgerMenu className={`${menuVisible ? 'hidden':'flex'} md:hidden text-xl mt-2 mr-3`} onClick={() => {setMenuVisible(true)}}/>
            <section className={`${menuVisible ? 'flex flex-col flex-1 h-screen py-20':'hidden'}  bg-white md:flex items-center   font-semibold text-sm justify-between w-10/12`}>
                <AiOutlineClose className='absolute right-10 top-10 text-lg font-extrabold' onClick={() => {setMenuVisible(false)}}/>
                <section className={`w-8/12 flex ${menuVisible && 'flex-col items-center justify-evenly h-80'} justify-evenly`}>
                    <span>Saving</span>
                    <span>Investing</span>
                    <span>About us</span>
                    <span>How it works</span>
                </section>
                
                <section className={`flex items-center justify-between ${menuVisible && 'flex-col items-center justify-evenly h-40'} font-semibold text-sm w-4/12 lg:w-3/12`}>
                 <span className='md:px-5'>Login</span>
                 <span className={`bg-blue-700 text-center text-white ${menuVisible ? 'w-96':'w-70'}  px-2 py-1 rounded-full`}>Create account</span>
               </section>
            </section>
            
        </div>
    )
}

export default Navbar
