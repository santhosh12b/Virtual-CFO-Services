import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ClipboardList, PieChart, Lightbulb, TrendingUp, Rocket } from 'lucide-react';
import './Timeline.css';

const timelineSteps = [
  { icon: <PhoneCall />, title: "Book a FREE Finance Health Check", desc: "" },
  { icon: <ClipboardList />, title: "Understand Your Current Process", desc: "" },
  { icon: <Lightbulb />, title: "Receive a Customized Plan", desc: "" },
  { icon: <Rocket />, title: "Relax While We Handle Your Accounts", desc: "" }
];

const Timeline = () => {
  return (
    <section className="timeline-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Process</span>
          <h2 className="section-title">How It <span className="blue-gradient-text">Works</span></h2>
        </div>

        <div className="timeline">
          {timelineSteps.map((step, index) => (
            <motion.div 
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">{step.icon}</div>
                {index !== timelineSteps.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content">
                <div className="step-number">Step {index + 1}</div>
                <h4>{step.title}</h4>
                {step.desc && <p>{step.desc}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
