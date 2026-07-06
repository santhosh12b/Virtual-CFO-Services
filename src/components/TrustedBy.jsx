import React from 'react';
import './TrustedBy.css';

const TrustedBy = () => {
  return (
    <section className="trusted-by" style={{ padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <p className="trusted-label" style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '32px', fontWeight: '500' }}>
          Trusted by world's <span className="text-purple">leading brand</span>
        </p>
        <div className="logo-row" style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', opacity: 0.6 }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#64748b' }}>Rise</h3>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#64748b' }}>Vertigo</h3>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#64748b' }}>Minty</h3>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#64748b' }}>Glossy</h3>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#64748b' }}>Waveless</h3>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
