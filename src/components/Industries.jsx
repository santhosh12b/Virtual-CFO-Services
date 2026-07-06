import React from 'react';
import { motion } from 'framer-motion';
import './Industries.css';

const industriesList = [
  "FinTech & SaaS", "E-commerce & Retail", "Healthcare & Pharma", "Manufacturing", 
  "Real Estate & Construction", "Logistics & Supply Chain", "IT & ITES", "Export & Import"
];

const Industries = () => {
  return (
    <section className="industries-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Industries We Serve</span>
          <h2 className="section-title">Expertise Across <span className="gradient-text">Sectors</span></h2>
        </div>
        
        <div className="industries-grid">
          {industriesList.map((industry, index) => (
            <motion.div 
              className="industry-pill" 
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
