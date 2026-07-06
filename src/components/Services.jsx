import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ShieldCheck, PieChart } from 'lucide-react';
import './Services.css';

const coreServices = [
  { 
    title: "Financial Management",
    desc: "Gain complete control over cash flow, budgeting, and daily financial operations.",
    isPurple: false,
    image: "/mockups/financial.png"
  },
  { 
    title: "Strategic Compliance",
    desc: "Ensure seamless ROC, GST, and tax compliance without the stress of deadlines.",
    isPurple: true,
    image: "/mockups/compliance.png"
  },
  { 
    title: "Performance Analytics",
    desc: "Track KPIs and business metrics with real-time, actionable dashboard insights.",
    isPurple: false,
    image: "/mockups/analytics.png"
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-icon"><Calculator size={14} /></span>
            Our Services
          </div>
          <h2 className="section-title">Empowering financial <span className="text-purple">insights</span></h2>
          <p className="section-subtitle">
            Comprehensive Virtual CFO solutions designed to scale your business securely.
          </p>
        </div>
        
        <div className="services-showcase">
          {coreServices.map((service, index) => (
            <motion.div 
              className={`showcase-card ${service.isPurple ? 'purple-card' : ''}`}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="card-mockup-placeholder">
                <div className="fake-ui-box">
                  <div className="fake-header"><span></span><span></span><span></span></div>
                  <div className="fake-body" style={{ padding: 0, background: 'none' }}>
                    <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
