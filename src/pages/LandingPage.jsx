import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedProjects from '../components/FeaturedProjects';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <main className="bg-midnight">
      <Navbar />
      <HeroSection />
      <FeaturedProjects />
      <Footer />
    </main>
  );
};
export default LandingPage;
