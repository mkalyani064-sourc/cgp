import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';

const Hero = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <h1 data-aos="fade-up">Discover Your Perfect Career Path</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Get personalized career guidance based on your interests, strengths, 
          and personality with our advanced psychometric assessments and expert counsellors.
        </p>
        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
          <a href="/assessment" className="btn btn-hero btn-white">Take Free Assessment</a>
          <a href="/counsellors" className="btn btn-hero btn-outline-primary">Talk to Counsellor</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;