import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Earlier we spent hours every month following up for reports. AuditCare changed that. Now we get accurate financial statements on time.",
    name: "Sarah Jenkins",
    title: "Founder, TechFlow",
    avatar: "S"
  },
  {
    quote: "GST deadlines used to cause us so much stress. Since AuditCare took over, we've never paid a single penalty. Total peace of mind.",
    name: "Rajesh Kumar",
    title: "Director, Apex Mfg",
    avatar: "R"
  },
  {
    quote: "Instead of hiring an in-house accountant, we partnered with AuditCare. It's like having a dedicated finance team without the overhead.",
    name: "Emily Chen",
    title: "Operations Head, RetailPro",
    avatar: "E"
  },
  {
    quote: "The monthly insights they provide have completely changed how we make strategic decisions. Highly recommended for any growing startup.",
    name: "David Smith",
    title: "CEO, InnovateX",
    avatar: "D"
  },
  {
    quote: "Flawless payroll and tax compliance. I finally have my weekends back instead of worrying about accounting errors.",
    name: "Priya Patel",
    title: "Managing Director, CloudSync",
    avatar: "P"
  }
];

const TestimonialCard = ({ data }) => (
  <div className="tm-card">
    <div className="tm-stars">
      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />)}
    </div>
    <p className="tm-quote">"{data.quote}"</p>
    <div className="tm-author">
      <div className="tm-avatar">{data.avatar}</div>
      <div className="tm-author-info">
        <h4>{data.name}</h4>
        <span>{data.title}</span>
      </div>
    </div>
  </div>
);

const TestimonialGroup = ({ reverse }) => {
  const items = reverse ? [...testimonials].reverse() : testimonials;
  return (
    <div className="tm-marquee-group">
      {items.map((item, idx) => (
        <TestimonialCard key={idx} data={item} />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials-marquee-section">
      <div className="tm-header">
        <motion.h2 
          className="tm-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Loved by founders & <br/>finance teams alike.
        </motion.h2>
        <motion.p 
          className="tm-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Join hundreds of growing businesses that trust AuditCare.
        </motion.p>
      </div>

      <div className="tm-marquee-wrapper">
        <div className="tm-marquee-track">
          <TestimonialGroup />
          <TestimonialGroup />
        </div>
      </div>
      
      <div className="tm-marquee-wrapper" style={{ marginTop: '24px' }}>
        <div className="tm-marquee-track reverse">
          <TestimonialGroup reverse={true} />
          <TestimonialGroup reverse={true} />
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
