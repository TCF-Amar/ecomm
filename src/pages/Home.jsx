import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import Title from '../components/Title'
import LatestCollection from '../components/LatestCollection'
import BestSellers from '../components/BestSellers'
import useScroll from '../utils/useScr'

function Home() {
  useEffect(() => {
    useScroll()
  }, [])
  return (
    <div>
      <HeroSection />
      <br />
      <br />
      <section className='px-4 md:px-8 lg:px-16 xl:px-24'>

        <Title test1={"Latest"} test2={"Collection"} />
        <LatestCollection />

        <hr />
        <br />
        <Title test1={"Best"} test2={"Sellers"} />
        <BestSellers />
     

      </section>
    </div>
  )
}

export default Home