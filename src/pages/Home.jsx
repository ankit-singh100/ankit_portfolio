import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

const Home = ({ darkMode }) => {
  return (
    <div>
      <HeroSection darkMode={darkMode}/>
    </div>
  )
}

export default Home
