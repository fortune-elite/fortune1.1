import Head from 'next/head'
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

      <BetterWay/>
      <WhyChooseUs/>
    </div>
    </>
  )
}
