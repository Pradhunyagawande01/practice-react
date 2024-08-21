import React from 'react'
import Navbar from './components/Navbar'
import Hero from './Components/Hero'
import FeatureSection from './components/FeatureSection'
import Footer from "./components/Footer";
import Workflow from './components/Workflow';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Hero />
        <FeatureSection />
        <Workflow />
        <Footer />
      </div>
    </>
  )
}

export default App
