import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, Clock, ShieldAlert } from 'lucide-react';
import './Challenges.css';

const Challenges = () => {
  return (
    <section className="challenges">
      <div className="container">
        <div className="challenges-layout">
          <div className="challenges-text">
            <span className="section-tag">The Problem</span>
            <h2 className="section-title">Are these challenges holding back your <span className="gradient-text">growth?</span></h2>
            <p className="challenges-desc">Most growing businesses struggle because they lack proper financial leadership. Historical accounting isn't enough to make future-focused decisions.</p>
            
            <div className="challenges-list">
              {[
                { icon: AlertCircle, title: "Poor Cash Flow Visibility", desc: "Struggling to predict cash runway and manage working capital efficiently." },
                { icon: TrendingDown, title: "Low Profitability Margins", desc: "Revenue is growing, but profits aren't scaling proportionally." },
                { icon: Clock, title: "Delayed Financial Reporting", desc: "Making decisions based on months-old data instead of real-time insights." },
                { icon: ShieldAlert, title: "Tax & Compliance Risks", desc: "Facing unexpected penalties due to poor regulatory compliance." }
              ].map((item, index) => (
                <motion.div 
                  className="challenge-item group"
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <div className="challenge-icon-box">
                    <item.icon size={20} />
                  </div>
                  <div className="challenge-text-box">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="challenges-visual">
            <motion.div 
              className="challenge-illustration"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="illustration-card dark-glass-card">
                <div className="card-header">Cash Flow Projection</div>
                <div className="chart-down">
                  <svg viewBox="0 0 100 50" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(248, 113, 113, 0.4)" />
                        <stop offset="100%" stopColor="rgba(248, 113, 113, 0)" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <path d="M0,10 L20,30 L40,20 L60,40 L80,35 L100,50" fill="none" stroke="#f87171" strokeWidth="2.5" filter="url(#glow)"/>
                    <path d="M0,10 L20,30 L40,20 L60,40 L80,35 L100,50 L100,50 L0,50 Z" fill="url(#redGradient)" />
                  </svg>
                </div>
                <div className="alert-badge"><span className="pulse-dot"></span> Critical Warning</div>
              </div>
              <div className="illustration-card dark-glass-card offset">
                <div className="card-header">Compliance Status</div>
                <div className="status-row"><span className="neon-dot red"></span> GST Filing Delayed</div>
                <div className="status-row"><span className="neon-dot red"></span> ROC Pending</div>
                <div className="status-row"><span className="neon-dot yellow"></span> Tax Audit Due</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
