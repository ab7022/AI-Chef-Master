/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../components/Banner/Banner'
import NavBarDishes from '../components/NavBarDishes'
import Choices from '../components/Choices/Choices'
import SeasonalTop from '../components/Seasonal-Top/SeasonalTop'
import Footer from '../components/FooterItem/Footer'
  
const Home = () => {
  return (
    <div className='overflow-x-hidden'>
   <NavBarDishes/>
  <Banner/>
  <Choices/>
  <SeasonalTop />
  <Footer />
  </div>
  )
}

export default Home
