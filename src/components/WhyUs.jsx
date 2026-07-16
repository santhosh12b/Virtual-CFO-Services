import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Clock, Users, TrendingUp } from 'lucide-react';
import './WhyUs.css';

const reasons = [
  { icon: Shield, title: "Reliable Monthly Support", desc: "No chasing accountants." },
  { icon: Eye, title: "Better Business Visibility", desc: "Always know your financial position." },
  { icon: Clock, title: "Timely Compliance", desc: "Avoid penalties and missed deadlines." },
  { icon: Users, title: "Dedicated Team", desc: "One partner for all your finance needs." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Support that grows with your business." }
];

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="container">
        <div className="why-split-layout">
          {/* Left Side: Sticky Intro & Image */}
          <div className="why-intro-column">
            <div className="why-sticky-content">
              <span className="section-tag">Why AuditCare</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
                Why Businesses Choose <span className="text-purple">AuditCare</span>
              </h2>
              <p className="why-intro-text">
                We go beyond basic bookkeeping. We act as your dedicated financial partner, ensuring you have the clarity and compliance you need to scale confidently.
              </p>
              <img 
                src="/auditcare_meeting.png" 
                alt="AuditCare Business Meeting" 
                className="why-corporate-image"
              />
            </div>
          </div>

          {/* Right Side: Vertical List */}
          <div className="why-list-column">
            <div className="why-vertical-list">
              {reasons.map((item, index) => (
                <motion.div 
                  className="why-list-item"
                  key={index} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="why-list-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="why-list-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ marginTop: '3rem' }}>
              <button className="btn btn-primary pill large" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
                Book Your Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
