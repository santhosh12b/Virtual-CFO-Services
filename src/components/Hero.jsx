import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, PieChart, ArrowRight, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-saas">
      {/* Background Elements */}
      <div className="saas-bg-glow purple-glow"></div>
      <div className="saas-bg-glow blue-glow"></div>
      <div className="saas-noise-overlay"></div>

      <div className="container saas-hero-container">
        {/* Left Side */}
        <div className="saas-hero-content">
          <motion.div
            className="saas-badge-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="saas-glass-badge">
              <span className="pulse-dot-green"></span>
              Trusted Finance Partner
            </div>
          </motion.div>

          <motion.h1
            className="saas-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Spend Less Time Managing Accounts.<br/>
            <span className="saas-text-gradient">Spend More Time Growing Your Business.</span>
          </motion.h1>

          <motion.p
            className="saas-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Reliable accounting, GST compliance, payroll, and monthly financial reporting for growing businesses.<br />
            Trusted by Startups, MSMEs & Service Businesses.
          </motion.p>

          <motion.div
            className="saas-hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="btn-saas-primary">Book Free Consultation</button>
          </motion.div>

          <motion.div
            className="saas-trust-metrics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="metric-card"><div className="metric-val">450+</div><div className="metric-lbl">Businesses</div></div>
            <div className="metric-card"><div className="metric-val">98%</div><div className="metric-lbl">Client Retention</div></div>
            <div className="metric-card"><div className="metric-val">10+</div><div className="metric-lbl">Years Exp.</div></div>
            <div className="metric-card"><div className="metric-val">24/7</div><div className="metric-lbl">Expert Support</div></div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
