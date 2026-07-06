import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';
import './Comparison.css';

const comparisons = [
  { old: "Compliance Only", new: "Business Growth Partner" },
  { old: "Historical Reports", new: "Future Forecasting" },
  { old: "Basic Accounting", new: "Strategic Financial Leadership" },
  { old: "Annual Review", new: "Continuous Monthly Guidance" },
  { old: "Reactive Advice", new: "Proactive Strategy" }
];

const Comparison = () => {
  return (
    <section className="comparison">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">The Difference</span>
          <h2 className="section-title">Beyond Basic <span className="blue-gradient-text">Accounting</span></h2>
          <p className="section-subtitle">See why growing businesses upgrade to a Virtual CFO.</p>
        </div>

        <div className="comparison-cards-wrapper">
          <motion.div 
            className="comp-card traditional-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="comp-header">Traditional Accountant</div>
            <div className="comp-list">
              {comparisons.map((item, index) => (
                <div className="comp-item" key={index}>
                  <XCircle size={24} className="icon-red" /> <span>{item.old}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="comp-card modern-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="popular-badge">CFO Bridge Advantage</div>
            <div className="comp-header">Virtual CFO Partner</div>
            <div className="comp-list">
              {comparisons.map((item, index) => (
                <div className="comp-item" key={index}>
                  <CheckCircle2 size={24} className="icon-blue" /> <span>{item.new}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
