import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ShieldCheck, PieChart, FileText, TrendingUp, Headphones } from 'lucide-react';
import './Services.css';

const coreServices = [
  { 
    title: "Monthly Accounting",
    desc: "Keep your books updated every month with meticulous precision. We categorize transactions, reconcile bank accounts, and ensure everything is perfectly balanced.",
    icon: <Calculator size={32} strokeWidth={1.5} />,
    colorClass: "ss-blue"
  },
  { 
    title: "GST & Compliance",
    desc: "Stay compliant without last-minute stress. We handle GST filings, TDS, and ensure you never pay hidden penalties for late submissions.",
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    colorClass: "ss-purple"
  },
  { 
    title: "Payroll Management",
    desc: "Accurate, timely payroll processing for your entire team. We manage tax deductions, payslips, and compliance so your employees are always happy.",
    icon: <FileText size={32} strokeWidth={1.5} />,
    colorClass: "ss-green"
  },
  {
    title: "Financial Reporting",
    desc: "Gain absolute clarity on your P&L, Balance Sheet, and Cash Flow. Our beautifully formatted monthly reports make understanding your finances effortless.",
    icon: <PieChart size={32} strokeWidth={1.5} />,
    colorClass: "ss-orange"
  },
  {
    title: "Performance Insights",
    desc: "Make confident, strategic decisions backed by real-time numbers. We provide CFO-level insights to help you scale efficiently.",
    icon: <TrendingUp size={32} strokeWidth={1.5} />,
    colorClass: "ss-pink"
  },
  {
    title: "Dedicated Support",
    desc: "Always have an expert on standby. Whenever you need guidance on a complex transaction or tax query, your dedicated account manager is just a call away.",
    icon: <Headphones size={32} strokeWidth={1.5} />,
    colorClass: "ss-indigo"
  }
];

const Services = () => {
  return (
    <section className="services-sticky-section" id="services">
      <div className="container">
        <div className="ss-layout">
          
          {/* Left Sticky Side */}
          <div className="ss-left">
            <div className="ss-sticky-content">
              <motion.div 
                className="section-tag"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="section-tag-icon"><Calculator size={14} /></span>
                Meet AuditCare
              </motion.div>
              
              <motion.h2 
                className="ss-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Your Dedicated <br/>
                <span className="text-purple-gradient">Finance Team</span>
              </motion.h2>
              
              <motion.p 
                className="ss-subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Instead of hiring a fragmented team of bookkeepers and tax consultants, get one reliable partner to seamlessly manage your entire business finances.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <button className="btn-saas-primary ss-cta">
                  Book Your Free Consultation
                </button>
              </motion.div>
            </div>
          </div>

          {/* Right Scrolling Side */}
          <div className="ss-right">
            {coreServices.map((service, index) => (
              <motion.div 
                className={`ss-card ${service.colorClass}`}
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="ss-card-icon">
                  {service.icon}
                </div>
                <div className="ss-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
