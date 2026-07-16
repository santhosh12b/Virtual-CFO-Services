import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Factory, Stethoscope, Monitor, ShoppingBag, Building, Globe, TrendingUp } from 'lucide-react';
import './Audience.css';

const audiences = [
  { icon: <Rocket size={24} />, title: "Startups", desc: "" },
  { icon: <TrendingUp size={24} />, title: "MSMEs", desc: "" },
  { icon: <Globe size={24} />, title: "Service Businesses", desc: "" },
  { icon: <Building size={24} />, title: "Agencies", desc: "" },
  { icon: <Monitor size={24} />, title: "IT Companies", desc: "" },
  { icon: <Factory size={24} />, title: "Manufacturers", desc: "" },
  { icon: <ShoppingBag size={24} />, title: "Traders", desc: "" },
  { icon: <ShoppingBag size={24} />, title: "Retail Businesses", desc: "" }
];

const Audience = () => {
  return (
    <section className="audience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Who We Help</span>
          <h2 className="section-title">Perfect <span className="blue-gradient-text">for</span></h2>
        </div>
        <div className="audience-pill-cloud">
          {audiences.map((item, index) => (
            <motion.div 
              className="audience-pill" 
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, type: 'spring', stiffness: 100 }}
            >
              <div className="audience-pill-icon">{item.icon}</div>
              <span className="audience-pill-title">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
