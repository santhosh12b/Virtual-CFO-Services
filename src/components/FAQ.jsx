import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    q: "Can you work with my existing CA?",
    a: "Yes, we can collaborate with your existing CA and handle your day-to-day accounting, payroll, and monthly reporting."
  },
  {
    q: "Do you support GST?",
    a: "Absolutely. We manage end-to-end GST compliance, including return filing and reconciliation, ensuring you stay compliant and avoid penalties."
  },
  {
    q: "Do you provide monthly reports?",
    a: "Yes, we provide detailed monthly financial reports including Profit & Loss, Balance Sheet, and Cash Flow statements."
  },
  {
    q: "Can you manage payroll?",
    a: "Yes, we offer complete payroll management, ensuring accurate processing and timely compliance every month."
  },
  {
    q: "Do you work with startups?",
    a: "Yes, we specialize in helping startups, MSMEs, and service businesses establish strong financial processes from day one."
  },
  {
    q: "Can you migrate from my existing accountant?",
    a: "Yes, we handle the entire transition process seamlessly, transferring your historical data and setting up efficient systems without disrupting your business."
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
