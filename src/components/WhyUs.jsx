import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Laptop, Link2, Target } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why CFO Bridge</span>
          <h2 className="section-title">A Partnership Built for <span className="gradient-text">Success</span></h2>
        </div>

        <div className="why-blocks">
          <motion.div className="why-block left" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="why-content">
              <div className="why-icon-box"><Briefcase size={28} /></div>
              <h3>Dedicated CFO & Industry Experts</h3>
              <p>Get a highly experienced CFO matched specifically to your industry context. We don't just provide numbers; we provide actionable strategic leadership tailored for your market.</p>
            </div>
            <div className="why-visual-container">
              <div className="visual-background bg-gradient-1"></div>
              <div className="floating-profile-card">
                <div className="profile-avatar"></div>
                <div className="profile-lines">
                  <div className="line title"></div>
                  <div className="line sub"></div>
                </div>
                <div className="expert-badge">Senior Partner</div>
              </div>
            </div>
          </motion.div>

          <motion.div className="why-block right" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="why-visual-container">
              <div className="visual-background bg-gradient-2"></div>
              <div className="floating-dashboard">
                <div className="dash-header">
                  <span></span><span></span><span></span>
                </div>
                <div className="dash-body">
                  <div className="tech-badge-glow">Real-time Analytics</div>
                  <div className="tech-badge-glow outline">Automated Reporting</div>
                  <div className="tech-badge-glow outline">Secure Data</div>
                </div>
              </div>
            </div>
            <div className="why-content">
              <div className="why-icon-box"><Laptop size={28} /></div>
              <h3>Technology-Driven Reporting</h3>
              <p>Say goodbye to outdated spreadsheets. We leverage modern tech stacks to give you real-time dashboards and instant visibility into your business performance.</p>
            </div>
          </motion.div>

          <motion.div className="why-block left" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="why-content">
              <div className="why-icon-box"><Link2 size={28} /></div>
              <h3>Long-Term Partnership</h3>
              <p>We are not just a service provider; we are your strategic partner. We focus on long-term business growth, offering transparent advice and continuous guidance.</p>
            </div>
            <div className="why-visual-container">
              <div className="visual-background bg-gradient-3"></div>
              <div className="floating-growth-chart">
                <svg viewBox="0 0 200 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="growthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(124, 58, 237, 0.5)" />
                      <stop offset="100%" stopColor="rgba(124, 58, 237, 0)" />
                    </linearGradient>
                  </defs>
                  <path d="M0,80 C40,70 60,90 100,50 C140,10 160,30 200,10 L200,100 L0,100 Z" fill="url(#growthGradient)" />
                  <path d="M0,80 C40,70 60,90 100,50 C140,10 160,30 200,10" fill="none" stroke="var(--primary-blue)" strokeWidth="4" />
                  <circle cx="200" cy="10" r="6" fill="white" stroke="var(--primary-blue)" strokeWidth="4" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
