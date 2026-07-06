import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Audience from './components/Audience';
import Challenges from './components/Challenges';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Timeline from './components/Timeline';
import WhyUs from './components/WhyUs';
import Comparison from './components/Comparison';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header-premium">
        <div className="header-container">
          <a href="/" className="logo-link">
            <img src="/logo-primary.svg" alt="CFO Bridge" className="logo-img" />
          </a>
          <div className="header-actions">
            <a href="#contact" className="btn btn-primary header-cta">Contact Us</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <TrustedBy />
        <Audience />
        <Challenges />
        <Services />
        <Benefits />
        <Timeline />
        <WhyUs />
        <Comparison />
        <Industries />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <footer className="footer">
        <div className="custom-shape-divider-top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.83,122.5,193.32,108.7,236.43,99.27,279.7,78.2,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="container">
          <div className="footer-content">
            <img src="/logo-primary.svg" alt="CFO Bridge" className="logo-img footer-logo" />
            <p className="footer-text">Your Strategic Financial Partner for Smarter Business Growth.</p>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} CFO Bridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
