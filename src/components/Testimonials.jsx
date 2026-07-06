import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "CFO Bridge completely transformed our financial visibility. We went from guessing to forecasting 12 months ahead with accuracy.",
    name: "Sarah Jenkins",
    title: "Founder & CEO, TechFlow"
  },
  {
    quote: "Having a Virtual CFO gave us the strategic leadership we needed during our Series A round. They handled everything perfectly.",
    name: "Rajesh Kumar",
    title: "Director, Apex Mfg"
  },
  {
    quote: "The best decision we made for our business. They are more than accountants; they are true growth partners who optimized costs.",
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
              Don't just take our word for it. See why growing businesses trust CFO Bridge to bring financial clarity and strategic leadership to their operations.
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
