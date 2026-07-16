import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, CalendarDays } from 'lucide-react';
import './Benefits.css';

const inclusions = [
  "Comprehensive review of current accounting processes",
  "GST & tax compliance gap analysis",
  "Financial reporting & cash flow assessment",
  "Actionable recommendations for improvement"
];

const Benefits = () => {
  return (
    <section className="benefits-saas">
      <div className="benefits-glow"></div>
      <div className="container saas-container">
        <div className="saas-section-header">
          <span className="saas-badge">Limited Time Offer</span>
          <h2 className="saas-title">Book your <span className="saas-gradient-text">Finance Health Check</span></h2>
          <p className="saas-subtitle">Get a clear picture of your business's financial standing with our expert analysts. No commitment required.</p>
        </div>
        
        <div className="health-check-card-wrapper">
          <motion.div 
            className="health-check-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          >
            <div className="hc-content">
              <h3 className="hc-heading">What's Included in the Session?</h3>
              <ul className="hc-list">
                {inclusions.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="hc-icon-wrapper"><CheckCircle2 size={18} /></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="hc-action-panel">
              <div className="hc-details">
                <div className="hc-detail-item">
                  <Clock size={20} className="hc-detail-icon" />
                  <div>
                    <span className="hc-detail-label">Duration</span>
                    <strong className="hc-detail-value">30 Minutes</strong>
                  </div>
                </div>
                <div className="hc-divider"></div>
                <div className="hc-detail-item">
                  <CalendarDays size={20} className="hc-detail-icon" />
                  <div>
                    <span className="hc-detail-label">Investment</span>
                    <strong className="hc-detail-value free-text">100% FREE</strong>
                  </div>
                </div>
              </div>
              
              <button className="btn-saas-primary w-full mt-6 pulse-btn">
                Claim Your Free Session
              </button>
              <p className="hc-guarantee">No credit card required. 100% confidential.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

