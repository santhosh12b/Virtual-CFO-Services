import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    q: "How is a Virtual CFO different from a standard accountant?",
    a: "An accountant focuses on historical data and compliance (what happened). A Virtual CFO focuses on the future—forecasting, strategy, profitability, and growth (what's next)."
  },
  {
    q: "Do I have to switch my current accounting team?",
    a: "Not at all. We often work alongside your existing accountants or bookkeepers, providing the strategic upper-level leadership they may lack."
  },
  {
    q: "What size businesses do you typically work with?",
    a: "We partner with growing startups and SMEs across various industries who need financial leadership but aren't ready to hire a full-time, in-house CFO."
  },
  {
    q: "How much does a Virtual CFO cost?",
    a: "It's a fraction of the cost of a full-time CFO. Pricing is customized based on your business size, complexity, and specific needs. Book a consultation for a detailed quote."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Common <span className="gradient-text">Questions</span></h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className={`faq-item ${openIndex === index ? 'open' : ''}`} key={index}>
              <button className="faq-question" onClick={() => toggle(index)}>
                {faq.q}
                <ChevronDown className={`faq-icon ${openIndex === index ? 'rotate' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
