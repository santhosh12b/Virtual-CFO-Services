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
          <h2>Ready to Simplify Your <span className="blue-gradient-text">Business Finances?</span></h2>
          <p>Book your FREE Finance Health Check.</p>
          <div className="cta-actions">
            <button className="btn btn-primary btn-lg">
              Book Your Meeting <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
