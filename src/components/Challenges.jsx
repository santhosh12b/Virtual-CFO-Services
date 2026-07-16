import React from 'react';
import { motion } from 'framer-motion';
import { CalendarX2, TrendingDown, ShieldAlert, Clock, Users } from 'lucide-react';
import './Challenges.css';

const Challenges = () => {
  const challenges = [
    {
      id: 1,
      title: "Weekend Accounting",
      desc: "Sacrificing your weekends to reconcile books instead of growing your business or getting much-needed rest.",
      icon: CalendarX2,
      className: "bento-wide"
    },
    {
      id: 2,
      title: "Cash Flow Blindness",
      desc: "Making critical decisions in the dark without a clear, real-time view of your profits and runway.",
      icon: TrendingDown,
      className: "bento-square"
    },
    {
      id: 3,
      title: "Compliance Stress",
      desc: "Constant anxiety over missed GST deadlines, changing tax laws, and potential penalties.",
      icon: ShieldAlert,
      className: "bento-square"
    },
    {
      id: 4,
      title: "Delayed Reporting",
      desc: "Waiting weeks for monthly financial reports that are already outdated.",
      icon: Clock,
      className: "bento-square"
    },
    {
      id: 5,
      title: "Fragmented Comms",
      desc: "Chasing down different people for payroll, taxes, and bookkeeping updates.",
      icon: Users,
      className: "bento-square"
    }
  ];

  return (
    <section className="challenges-premium">
      <div className="container">
        
        <div className="cp-header">
          <motion.div 
            className="cp-tag"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="cp-dot"></span>
            The Reality
          </motion.div>
          
          <motion.h2 
            className="cp-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Growing a business is hard.<br/>
            <span className="text-gray">Managing finances shouldn't be.</span>
          </motion.h2>
        </div>

        <div className="cp-bento-grid">
          {challenges.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`cp-bento-card ${item.className}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="cp-card-inner">
                <div className="cp-icon-wrapper">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="cp-text-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Challenges;
