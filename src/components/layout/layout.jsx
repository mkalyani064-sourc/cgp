import React, { useState, useEffect } from 'react';
import './HomePage.css'; // We'll put all CSS in this separate file

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize AOS and handle scroll
  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }

    // Header Shadow on Scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Main Navigation */}
      <header className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="main-nav-content">
            <a href="/" className="logo">
              <i className="fas fa-graduation-cap"></i>
              Career Guide
            </a>
            
            <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><a href="/">Home</a></li>
              <li className="dropdown">
                <a href="/assessment">Assessment</a>
                <div className="dropdown-content">
                  <a href="/assessment">Career Assessment</a>
                  <a href="/psychometric">Psychometric Tests</a>
                  <a href="/stream-selector">Stream Selector</a>
                </div>
              </li>
              <li className="dropdown">
                <a href="/explore">Explore</a>
                <div className="dropdown-content">
                  <a href="/career-streams">Career Streams</a>
                  <a href="/resources">Resources</a>
                  <a href="/counsellors">Counsellors</a>
                </div>
              </li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            
            <div className={`nav-buttons ${isMobileMenuOpen ? 'active' : ''}`}>
              <a href="/login" className="btn btn-outline">Login</a>
              <a href="/register" className="btn btn-primary">Sign Up</a>
              <a href="/donate" className="btn btn-primary">Donate</a>
            </div>
            
            <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 data-aos="fade-up">Discover Your Perfect Career Path</h1>
          <p data-aos="fade-up" data-aos-delay="200">Get personalized career guidance based on your interests, strengths, and personality with our advanced psychometric assessments and expert counsellors.</p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
            <a href="/assessment" className="btn btn-hero btn-white">Take Free Assessment</a>
            <a href="/counsellors" className="btn btn-hero btn-primary" style={{backgroundColor: 'white', color: 'var(--primary-color)'}}>Talk to Counsellor</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Why Choose Career Guide?</h2>
            <p>We provide comprehensive career guidance solutions tailored to your needs</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Scientific Assessments</h3>
              <p>Advanced psychometric tests based on proven methodologies to accurately identify your strengths and interests.</p>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Expert Counsellors</h3>
              <p>Learn from industry professionals with years of experience in career guidance and mentoring.</p>
            </div>
            
            <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Personalized Roadmap</h3>
              <p>Get a customized career plan with actionable steps to achieve your professional goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <h2 data-aos="fade-up">Trusted by Thousands</h2>
          <div className="stats-grid">
            <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
              <h3>50,000+</h3>
              <p>Students Guided</p>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
              <h3>500+</h3>
              <p>Partner Schools</p>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
              <h3>50+</h3>
              <p>Expert Counsellors</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Discover Your Perfect Career?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Join thousands of students who have found their calling with Career Guide</p>
          <a href="/assessment" className="btn btn-hero btn-white" data-aos="fade-up" data-aos-delay="400">Get Started for Free</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>About Career Guide</h3>
              <p>We are India's leading career guidance platform, helping students make informed career decisions through scientific assessments and expert counselling.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/assessment">Career Assessment</a></li>
                <li><a href="/career-streams">Career Streams</a></li>
                <li><a href="/resources">Resources</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li><a href="/assessment">Career Counselling</a></li>
                <li><a href="/psychometric">Psychometric Tests</a></li>
                <li><a href="/stream-selector">Stream Selection</a></li>
                <li><a href="/counsellors">Expert Counsellors</a></li>
                <li><a href="/resources">Career Resources</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Contact Info</h3>
              <p><i className="fas fa-map-marker-alt"></i> 123, Vijayawada</p>
              <p><i className="fas fa-phone"></i> +91 98765 43210</p>
              <p><i className="fas fa-envelope"></i> info@careerguide.com</p>
            </div>
          </div>
          
          <div className="copyright">
            <p>&copy; 2025 Career Guide. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;