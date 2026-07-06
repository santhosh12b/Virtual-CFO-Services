import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './Benefits.css';

const benefits = [
  "Better Financial Decisions",
  "Increase Profitability",
  "Improve Cash Flow",
  "Reduce Financial Risks",
  "Investor Ready",
  "Business Growth",
  "Lower CFO Costs",
  "Strategic Financial Leadership",
  "Compliance Support",
  "Monthly Financial Insights"
];

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why It Matters</span>
          <h2 className="section-title">The <span className="gradient-text">CFO Advantage</span></h2>
          <p className="section-subtitle">Unlock the full potential of your business with expert financial leadership.</p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div 
              className="benefit-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CheckCircle2 className="benefit-icon" />
              <span className="benefit-text">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
