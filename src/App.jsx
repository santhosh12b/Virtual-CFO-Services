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
            <img src="/logo-primary.svg" alt="AuditCare Logo" className="logo-img" />
          </a>
          <div className="header-actions">
            <a href="#contact" className="btn btn-primary header-cta">Book Your Meeting</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Challenges />
        <Services />
        <Audience />
        <WhyUs />
        <Timeline />
        <Benefits />
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
          <div className="footer-content" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', textAlign: 'left', flexWrap: 'wrap', gap: '2rem', width: '100%' }}>
            <div style={{ maxWidth: '300px' }}>
              <img src="/logo-primary.svg" alt="AuditCare Logo" className="footer-logo" />
              <p className="footer-text" style={{ margin: 0, textAlign: 'left' }}>Your Dedicated Accounting & Compliance Partner.</p>
            </div>
            <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', fontWeight: 500 }}>Accounting</a>
                <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', fontWeight: 500 }}>Compliance</a>
                <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', fontWeight: 500 }}>GST</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', fontWeight: 500 }}>Payroll</a>
                <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', fontWeight: 500 }}>Financial Reporting</a>
                <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', fontWeight: 500 }}>Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} AuditCare. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="mobile-sticky-cta">
        <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Book a Meeting</a>
      </div>
    </div>
  );
}

export default App;
