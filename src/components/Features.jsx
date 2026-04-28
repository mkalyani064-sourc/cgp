import React from 'react';
import './Features.css';

const features = [
  {
    icon: 'fa-brain',
    title: 'Scientific Assessments',
    description: 'Advanced psychometric tests based on proven methodologies to accurately identify your strengths and interests.',
    delay: 100
  },
  {
    icon: 'fa-user-tie',
    title: 'Expert Counsellors',
    description: 'Learn from industry professionals with years of experience in career guidance and mentoring.',
    delay: 200
  },
  {
    icon: 'fa-chart-line',
    title: 'Personalized Roadmap',
    description: 'Get a customized career plan with actionable steps to achieve your professional goals.',
    delay: 300
  }
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Why Choose Career Guide?</h2>
          <p>We provide comprehensive career guidance solutions tailored to your needs</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay={feature.delay}
            >
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;