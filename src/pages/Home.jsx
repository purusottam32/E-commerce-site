import React from 'react'
    
import Navbar from '../components/Navbar.jsx'
import CategorySection from '../components/CategorySection'
import Corousel from '../components/Corousel'
import BestOfElectronics from '../components/BestOfElectronics'
import Footer from '../components/Footer'



function Home() {
  return (
    <>
     
      <CategorySection/>
      <Corousel/>
      <BestOfElectronics/>
      <Footer/>
    </>
  )
}

export default Home