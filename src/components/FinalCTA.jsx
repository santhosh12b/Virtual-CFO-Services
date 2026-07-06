import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './FinalCTA.css';

const FinalCTA = () => {
  return (
    <section className="final-cta">
      <div className="container">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-glow"></div>
          <h2>Your Business Deserves Better <span className="blue-gradient-text">Financial Leadership</span></h2>
          <p>Book your free consultation today and discover how CFO Bridge can help you grow with confidence.</p>
          <div className="cta-actions">
            <button className="btn btn-primary btn-lg">
              Book Free Consultation <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary btn-lg">Schedule a Call</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
