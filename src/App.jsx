import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PromoBar from './components/PromoBar';
import HistorySection from './components/HistorySection';
import FeaturesBlock from './components/FeaturesBlock';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  

  return (
    <>
      
      <PromoBar />
      <Navbar />
      <HeroSection />
     <HistorySection/>
     <FeaturesBlock/>
     <Gallery/>
     <Contact/>
     <Footer/>
     </>
    
  )
}
import Footer from './components/Footer';

export default App
