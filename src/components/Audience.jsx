import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Factory, Stethoscope, Monitor, ShoppingBag, Building, Globe, TrendingUp } from 'lucide-react';
import './Audience.css';

const audiences = [
  { icon: <Rocket size={24} />, title: "Startups", desc: "Scale faster with clear financial visibility." },
  { icon: <TrendingUp size={24} />, title: "SMEs", desc: "Optimize cash flow and streamline operations." },
  { icon: <Factory size={24} />, title: "Manufacturing", desc: "Control costs and improve margins." },
  { icon: <Stethoscope size={24} />, title: "Healthcare", desc: "Ensure compliance and sustainable growth." },
  { icon: <Monitor size={24} />, title: "IT Companies", desc: "Manage project profitability." },
  { icon: <ShoppingBag size={24} />, title: "Retail", desc: "Inventory and cash flow management." },
  { icon: <Building size={24} />, title: "Construction", desc: "Project financial tracking." },
  { icon: <Globe size={24} />, title: "Export & Import", desc: "Manage forex and working capital." }
];

const Audience = () => {
  return (
    <section className="audience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Who We Serve</span>
          <h2 className="section-title">Built for <span className="blue-gradient-text">Growing Businesses</span></h2>
          <p className="section-subtitle">Tailored financial leadership for modern enterprises across industries.</p>
        </div>
        <div className="grid-4">
          {audiences.map((item, index) => (
            <motion.div 
              className="card audience-card" 
              key={index}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="audience-icon">{item.icon}</div>
              <h3 className="audience-title">{item.title}</h3>
              <p className="audience-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
