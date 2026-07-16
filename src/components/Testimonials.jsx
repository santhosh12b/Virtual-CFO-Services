import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Earlier we spent hours every month following up for reports. AuditCare changed that. Now we get accurate financial statements on time, every time.",
    name: "Sarah Jenkins",
    title: "Founder, TechFlow"
  },
  {
    quote: "GST deadlines used to cause us so much stress. Since AuditCare took over, we've never paid a single penalty. Total peace of mind.",
    name: "Rajesh Kumar",
    title: "Director, Apex Mfg"
  },
  {
    quote: "Instead of hiring an in-house accountant, we partnered with AuditCare. It's like having a dedicated finance team without the overhead.",
    name: "Emily Chen",
    title: "Operations Head, RetailPro"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-layout">
          {/* Left Side */}
          <div className="testimonials-left">
            <h2 className="section-title">What Our <br/> <span className="gradient-text">Customers Say</span></h2>
            <p className="section-subtitle left-align">
              Don't just take our word for it. See why growing businesses trust AuditCare to bring financial clarity and strategic leadership to their operations.
            </p>
          </div>

          {/* Right Side Stack */}
          <div className="testimonials-stack">
            {testimonials.map((testi, i) => (
              <motion.div 
                className={`testi-stack-card ${i === 1 ? 'offset-card' : ''}`}
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="testi-avatar">
                   {testi.name.charAt(0)}
                </div>
                <div className="testi-content">
                  <div className="testi-header">
                    <div>
                      <h4 className="testi-name">{testi.name}</h4>
                      <p className="testi-title">{testi.title}</p>
                    </div>
                    <Quote className="small-quote-icon" size={24} strokeWidth={3} />
                  </div>
                  <p className="testi-text">"{testi.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
