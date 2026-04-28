import React from 'react';
import './Stats.css';

const stats = [
  { number: '50,000+', label: 'Students Guided', delay: 100 },
  { number: '95%', label: 'Success Rate', delay: 200 },
  { number: '500+', label: 'Partner Schools', delay: 300 },
  { number: '50+', label: 'Expert Counsellors', delay: 400 }
];

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <h2 data-aos="fade-up">Trusted by Thousands</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-item"
              data-aos="fade-up"
              data-aos-delay={stat.delay}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;