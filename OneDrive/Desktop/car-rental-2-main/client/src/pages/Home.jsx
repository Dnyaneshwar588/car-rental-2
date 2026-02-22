import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import StatsStrip from '../components/StatsStrip'
import HowItWorks from '../components/HowItWorks'

const Home = () => {
  return (
    <div className='home-india'>
      <Hero />
      <StatsStrip />
      <FeaturedSection />
      <Banner />
      <HowItWorks />
      <Testimonial />
      <Newsletter />
    </div>
  )
}

export default Home
