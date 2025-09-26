import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testemonial from '../components/Testemonial'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedSection />
      <Banner />
      <Testemonial />
      <Newsletter />
    </>
  )
}

export default Home