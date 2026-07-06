import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ClipboardList, PieChart, Lightbulb, TrendingUp, Rocket } from 'lucide-react';
import './Timeline.css';

const timelineSteps = [
  { icon: <PhoneCall />, title: "Discovery Call", desc: "Understanding your current financial situation." },
  { icon: <ClipboardList />, title: "Business Assessment", desc: "Deep dive into operations and numbers." },
  { icon: <PieChart />, title: "Financial Analysis", desc: "Identifying gaps and opportunities." },
  { icon: <Lightbulb />, title: "Financial Strategy", desc: "Creating a custom roadmap for success." },
  { icon: <TrendingUp />, title: "Monthly CFO Support", desc: "Execution, reporting, and advisory." },
  { icon: <Rocket />, title: "Business Growth", desc: "Scaling safely and profitably." }
];

const Timeline = () => {
  return (
    <section className="timeline-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Process</span>
          <h2 className="section-title">How Virtual CFO <span className="blue-gradient-text">Works</span></h2>
          <p className="section-subtitle">A seamless journey from chaos to financial clarity.</p>
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
                <div className="step-number">0{index + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
