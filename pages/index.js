import Head from 'next/head'
import Navbar from '../components/Navbar'
import BetterWay from '../components/BetterWay'
import WhyChooseUs from '../components/WhyChooseUs'

export default function Home() {
  return (
    <>
    <Head>
        <title>Fortune App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className="flex flex-col items-center justify-center ">
      <Navbar/>
      <BetterWay/>
      <WhyChooseUs/>
    </div>
    </>
  )
}
