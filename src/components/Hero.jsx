import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, PieChart, ArrowRight, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-badge">
              <ShieldCheck size={16} className="badge-icon" />
              <span>Premium Virtual CFO Services</span>
            </div>
            <h1 className="hero-title">
              Scale Your Business with a Strategic <br />
              <span className="gradient-text">Virtual CFO</span>
            </h1>
            <p className="hero-subtitle">
              Get the financial clarity and executive leadership you need to grow your operations, manage cash flow, and optimize profits—without the cost of a full-time executive.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary pill large">
                Get Your Free Assessment <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="hero-visual">
          <motion.div 
            className="dashboard-composition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main Window */}
            <div className="dash-window">
              <div className="dash-header">
                <div className="dots"><span></span><span></span><span></span></div>
                <div className="dash-title">CFO Command Center</div>
              </div>
              <div className="dash-body">
                {/* Floating Elements inside */}
                <motion.div 
                  className="dash-card float-1"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <div className="dash-icon revenue"><TrendingUp size={24} /></div>
                  <div className="dash-info">
                    <span className="dash-label">YOY Revenue Growth</span>
                    <span className="dash-value">+42.5%</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="dash-card float-2"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="dash-icon profit"><DollarSign size={24} /></div>
                  <div className="dash-info">
                    <span className="dash-label">Net Profit Margin</span>
                    <span className="dash-value">24.8%</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="dash-card float-3 wide"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                >
                  <div className="dash-icon cashflow"><PieChart size={24} /></div>
                  <div className="dash-info wide-info">
                    <div className="flex-between">
                      <span className="dash-label">12-Month Runway Projection</span>
                      <span className="dash-value small">Healthy</span>
                    </div>
                    <div className="chart-track">
                      <motion.div 
                        className="chart-fill"
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1.5, delay: 1 }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
            
            {/* Decorative background glows for the dashboard */}
            <div className="dash-glow top-right"></div>
            <div className="dash-glow bottom-left"></div>
          </motion.div>
        </div>
      </div>

      <div className="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.83,122.5,193.32,108.7,236.43,99.27,279.7,78.2,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
