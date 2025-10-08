import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedProjects from '../components/FeaturedProjects';

const LandingPage = () => {
  return (
    <main className="bg-midnight">
      <Navbar />
      <HeroSection />
      <FeaturedProjects />
    </main>
  );
};
export default LandingPage;
