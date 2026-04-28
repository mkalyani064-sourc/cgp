import React, { useState, useEffect } from 'react';
import './StreamSelector.css';

const StreamSelector = () => {
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

  // Features data
  const features = [
    {
      icon: 'fa-brain',
      title: 'Scientific Assessments',
      description: 'Our psychometric tests are scientifically designed to understand your personality, interests, and aptitude',
      delay: 100
    },
    {
      icon: 'fa-user-tie',
      title: 'Expert Counsellors',
      description: 'Get personalized guidance from experienced career counsellors with years of industry expertise',
      delay: 200
    },
    {
      icon: 'fa-chart-line',
      title: 'Career Roadmap',
      description: 'Receive a detailed career roadmap with step-by-step guidance to achieve your professional goals',
      delay: 300
    }
  ];

  // Services data
  const services = [
    {
      icon: 'fa-clipboard-list',
      title: 'Career Assessment',
      description: 'Comprehensive evaluation of your skills, interests, and personality to identify suitable career options',
      link: '/assessment',
      buttonText: 'Learn More',
      delay: 100
    },
    {
      icon: 'fa-brain',
      title: 'Psychometric Tests',
      description: 'Scientifically validated tests to assess your aptitude, personality, and career interests',
      link: '/psychometric',
      buttonText: 'Take Test',
      delay: 200
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Stream Selection',
      description: 'Guidance for choosing the right academic stream based on your interests and career goals',
      link: '/stream-selector',
      buttonText: 'Choose Stream',
      delay: 300
    },
    {
      icon: 'fa-users',
      title: 'Expert Counselling',
      description: 'One-on-one sessions with experienced career counsellors for personalized guidance',
      link: '/assessment',
      buttonText: 'Start Assessment',
      delay: 400
    },
    {
      icon: 'fa-briefcase',
      title: 'Career Streams',
      description: 'Explore various career streams and understand the opportunities they offer',
      link: '/career-streams',
      buttonText: 'Explore Careers',
      delay: 500
    },
    {
      icon: 'fa-book',
      title: 'Resources',
      description: 'Access comprehensive resources including articles, videos, and guides for career planning',
      link: '/resources',
      buttonText: 'View Resources',
      delay: 600
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      text: 'Career Guide helped me discover my passion for engineering. The psychometric test was eye-opening!',
      initials: 'KM',
      name: 'Kalyani Muppa',
      role: 'Engineering Student',
      delay: 100
    },
    {
      text: 'The stream selector quiz helped me choose Commerce, and I\'m loving my journey in finance!',
      initials: 'PK',
      name: 'Priyanka Kunchala',
      role: 'Commerce Student',
      delay: 200
    },
    {
      text: 'The career counsellor was extremely helpful in planning my career roadmap. Highly recommend!',
      initials: 'MK',
      name: 'Mahitha Kudaravalli',
      role: 'Management Student',
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
          <h1 data-aos="fade-up">Find Your Perfect Career Path</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Discover your potential with our comprehensive career guidance platform
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
            <a href="/assessment" className="btn btn-white">Take Assessment</a>
            <a href="/stream-selector" className="btn btn-outline">Choose Stream</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Why Choose Career Guide?</h2>
            <p>We provide comprehensive career guidance solutions to help you make informed decisions</p>
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

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Services</h2>
            <p>Comprehensive career guidance solutions for students and professionals</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <h3><i className={`fas ${service.icon}`}></i> {service.title}</h3>
                <p>{service.description}</p>
                <a href={service.link} className="btn btn-primary">{service.buttonText}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>What Our Students Say</h2>
            <p>Real stories from students who found their career path with us</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card"
                data-aos="fade-up"
                data-aos-delay={testimonial.delay}
              >
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.initials}</div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Start Your Career Journey?</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Join thousands of students who have found their perfect career path with us
          </p>
          <a
            href="/register"
            className="btn btn-white"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Get Started Now
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

export default StreamSelector;