import React, { useState, useEffect } from 'react';
import './Psychometric.css';

const Psychometric = () => {
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

  // Test types data
  const testTypes = [
    {
      icon: 'fa-brain',
      title: 'Personality Test',
      description: 'Understand your personality type and how it influences your career choices and work style',
      delay: 100
    },
    {
      icon: 'fa-heart',
      title: 'Interest Inventory',
      description: 'Identify your areas of interest and find careers that align with your passions',
      delay: 200
    },
    {
      icon: 'fa-chart-line',
      title: 'Aptitude Test',
      description: 'Evaluate your natural abilities and strengths in various domains',
      delay: 300
    },
    {
      icon: 'fa-users',
      title: 'Emotional Intelligence',
      description: 'Assess your ability to understand and manage emotions effectively',
      delay: 400
    }
  ];

  // Test details data
  const testDetails = [
    {
      icon: 'fa-brain',
      title: 'Personality Assessment',
      price: '₹999',
      features: [
        'Based on Big Five Personality Model',
        '16 personality factors evaluated',
        'Detailed personality report',
        'Career matching based on personality',
        'Takes 30-45 minutes'
      ],
      delay: 100
    },
    {
      icon: 'fa-heart',
      title: 'Interest Inventory',
      price: '₹799',
      features: [
        'Holland Code (RIASEC) based',
        '6 interest areas assessed',
        'Career interest profile',
        'Subject recommendations',
        'Takes 20-30 minutes'
      ],
      delay: 200
    },
    {
      icon: 'fa-chart-line',
      title: 'Aptitude Test',
      price: '₹1299',
      features: [
        'Multiple aptitude areas tested',
        'Logical, verbal, numerical reasoning',
        'Spatial and mechanical aptitude',
        'Strengths and weaknesses report',
        'Takes 45-60 minutes'
      ],
      delay: 300
    },
    {
      icon: 'fa-users',
      title: 'Emotional Intelligence',
      price: '₹899',
      features: [
        'Self-awareness assessment',
        'Self-regulation skills',
        'Social awareness',
        'Relationship management',
        'Takes 25-35 minutes'
      ],
      delay: 400
    }
  ];

  // Process steps data
  const processSteps = [
    {
      number: 1,
      title: 'Choose Test',
      description: 'Select the psychometric test that best suits your needs',
      delay: 100
    },
    {
      number: 2,
      title: 'Take Assessment',
      description: 'Complete the test online at your convenience',
      delay: 200
    },
    {
      number: 3,
      title: 'Get Report',
      description: 'Receive detailed analysis and recommendations',
      delay: 300
    }
  ];

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
                  <a href="/psychometric" style={{ color: 'var(--primary-color)' }}>Psychometric Tests</a>
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
          <h1 data-aos="fade-up">Psychometric Tests</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Discover your true potential with our scientifically designed psychometric assessments
          </p>
        </div>
      </section>

      {/* Psychometric Section */}
      <section className="psychometric">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Psychometric Test Suite</h2>
            <p>We offer a comprehensive range of scientifically validated tests to help you understand yourself better</p>
          </div>

          <div className="test-types">
            {testTypes.map((test, index) => (
              <div
                key={index}
                className="test-card"
                data-aos="fade-up"
                data-aos-delay={test.delay}
              >
                <div className="test-icon">
                  <i className={`fas ${test.icon}`}></i>
                </div>
                <h3>{test.title}</h3>
                <p>{test.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Details Section */}
      <section className="test-details">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Detailed Test Information</h2>
            <p>Learn more about each test and how it can help in your career journey</p>
          </div>

          <div className="test-details-grid">
            {testDetails.map((detail, index) => (
              <div
                key={index}
                className="test-detail-card"
                data-aos="fade-up"
                data-aos-delay={detail.delay}
              >
                <div className="test-detail-header">
                  <div className="test-detail-icon">
                    <i className={`fas ${detail.icon}`}></i>
                  </div>
                  <h3>{detail.title}</h3>
                </div>
                <div className="test-detail-content">
                  <ul>
                    {detail.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="test-price">
                  <span>{detail.price}</span>
                  <a href="/" className="btn btn-primary">Take Test</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How It Works</h2>
            <p>Simple 3-step process to get your psychometric assessment</p>
          </div>

          <div className="steps">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="step"
                data-aos="fade-up"
                data-aos-delay={step.delay}
              >
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Discover Yourself?</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Take our psychometric tests and unlock your career potential
          </p>
          <a
            href="/register"
            className="btn btn-white"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Start Assessment
          </a>
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
                <a href="/"><i className="fab fa-facebook-f"></i></a>
                <a href="/"><i className="fab fa-twitter"></i></a>
                <a href="/"><i className="fab fa-instagram"></i></a>
                <a href="/"><i className="fab fa-linkedin-in"></i></a>
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

export default Psychometric;