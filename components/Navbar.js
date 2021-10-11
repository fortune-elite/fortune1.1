function Navbar() {
    return (
        <div className='w-screen bg-white flex justify-between px-12 py-10'>
            <section className='flex items-center h-10 flex-medium bg-white w-2/12'>
                <img src="fortune.png" alt="forrtune logo" className='h-12' />
                <h1 className='text-blue-700 text-l font-bold'>Fortune</h1>
            </section>
            <section className='flex items-center font-semibold text-sm justify-evenly w-8/12 3xl:w-6/12'>
                <span>Saving</span>
                <span>Investing</span>
                <span>About us</span>
                <span>How it works</span>
            </section>
            <section className='flex w-3/12 items-center justify-evenly font-semibold text-sm '>
                <span>Login</span>
                <span className='bg-blue-700 text-center text-white w-40 py-2 rounded-full'>Create account</span>
            </section>
        </div>
    )
}

export default Navbar
