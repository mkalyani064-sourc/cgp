import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Assessment.css';

const Assessment = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Initialize AOS and handle scroll
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Service cards data - ATTRACTIVE CARDS to go to different pages
  const serviceCards = [
    {
      id: 1,
      title: 'Career Assessment',
      icon: 'fa-clipboard-check',
      description: 'Discover your ideal career path with our comprehensive 5-dimensional assessment',
      features: ['Personality Test', 'Interest Mapping', 'Aptitude Testing', 'Career Values'],
      color: '#1a73e8',
      path: '/personality-assessment',
      delay: 100
    },
    {
      id: 2,
      title: 'Psychometric Tests',
      icon: 'fa-brain',
      description: 'Scientifically validated tests to understand your true potential',
      features: ['IQ Test', 'Emotional Intelligence', 'Logical Reasoning', 'Verbal Ability'],
      color: '#00c853',
      path: '/psychometric',
      delay: 200
    },
    {
      id: 3,
      title: 'Stream Selector',
      icon: 'fa-route',
      description: 'Find the perfect academic stream based on your interests and goals',
      features: ['Science Streams', 'Commerce Streams', 'Arts Streams', 'Vocational Courses'],
      color: '#ff6d00',
      path: '/stream-selector',
      delay: 300
    }
  ];

  const handleServiceClick = (path) => {
    navigate(path);
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
                <a href="/assessment" style={{color: 'var(--primary-color)'}}>Assessment</a>
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

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 data-aos="fade-up">Career Assessment Hub</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Discover your strengths, test your abilities, and choose the right path with our comprehensive assessment tools
          </p>
        </div>
      </section>

      {/* Service Cards Section - ATTRACTIVE CARDS */}
      <section className="service-cards-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-subtitle">What would you like to explore?</span>
            <h2>Our Assessment Services</h2>
            <p>Choose from our range of scientifically designed assessments to understand yourself better</p>
          </div>

          <div className="service-cards-grid">
            {serviceCards.map((service) => (
              <div
                key={service.id}
                className="service-card-horizontal"
                data-aos="fade-up"
                data-aos-delay={service.delay}
                onClick={() => handleServiceClick(service.path)}
                style={{borderTopColor: service.color}}
              >
                <div className="service-card-left">
                  <div className="service-icon-large" style={{backgroundColor: service.color + '20'}}>
                    <i className={`fas ${service.icon}`} style={{color: service.color}}></i>
                  </div>
                </div>
                <div className="service-card-right">
                  <h3 style={{color: service.color}}>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-features">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag" style={{backgroundColor: service.color + '10', color: service.color}}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="service-card-footer">
                    <span className="explore-link" style={{color: service.color}}>
                      Explore Now <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Trust indicators */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid-simple">
            <div className="stat-item-simple" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Students Assessed</div>
            </div>
            <div className="stat-item-simple" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-item-simple" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-number">100+</div>
              <div className="stat-label">Expert Counsellors</div>
            </div>
            <div className="stat-item-simple" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-number">4.8</div>
              <div className="stat-label">Google Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>About Career Guide</h3>
              <p>
                We are India's leading career guidance platform, helping students 
                make informed career decisions through scientific assessments and expert counselling.
              </p>
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

export default Assessment;