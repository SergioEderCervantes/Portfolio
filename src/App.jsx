import React, { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return <LandingPage />;
}

export default App;