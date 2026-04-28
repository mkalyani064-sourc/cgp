import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <h2 data-aos="fade-up">Ready to Discover Your Perfect Career?</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Join thousands of students who have found their calling with Career Guide
        </p>
        <a 
          href="/assessment" 
          className="btn btn-hero btn-white" 
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          Get Started for Free
        </a>
      </div>
    </section>
  );
};

export default CTA;