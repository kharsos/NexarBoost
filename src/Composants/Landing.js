
import React from 'react';
import '../App.css';
import Header from './Header';  
import HeroSection from './HeroSection';
import Footer from './Footer';
import ScrollSection from './ScrollSection';

export default function Landing() {
  return (
    
    <div className="landing">
    <div className="background-container">
      <Header />
      <HeroSection />
    </div>
    <ScrollSection />
    <Footer />
  </div>
  );
}



