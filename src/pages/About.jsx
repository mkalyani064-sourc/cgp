import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      icon: 'fa-user-tie',
      name: 'Lakshmi',
      role: 'Founder & CEO',
      delay: 100
    },
    {
      id: 2,
      icon: 'fa-laptop-code',
      name: 'Kedar Guduru',
      role: 'Chief Technology Officer',
      delay: 200
    },
    {
      id: 3,
      icon: 'fa-user-graduate',
      name: 'Charan',
      role: 'Head of Counselling',
      delay: 300
    },
    {
      id: 4,
      icon: 'fa-cogs',
      name: 'Hari',
      role: 'Director of Operations',
      delay: 400
    }
  ];

  // About features data
  const features = [
    {
      icon: 'fa-check-circle',
      title: 'Scientific Approach',
      description: 'Based on proven psychometric assessments'
    },
    {
      icon: 'fa-check-circle',
      title: 'Expert Counsellors',
      description: 'Experienced professionals from various fields'
    },
    {
      icon: 'fa-check-circle',
      title: 'Personalized Guidance',
      description: 'Tailored solutions for each individual'
    },
    {
      icon: 'fa-check-circle',
      title: 'Proven Results',
      description: 'Helped 50,000+ students find their path'
    }
  ];

  // Student cards data
  const studentCards = [
    {
      id: 1,
      icon: 'fa-user',
      grade: '8th Std',
      description: 'Make informed decisions regarding your <b>subject selection.</b>',
      link: '/stream-selector',
      buttonText: 'Explore',
      delay: 100
    },
    {
      id: 2,
      icon: 'fa-user',
      grade: '9th Std',
      description: 'Make informed decisions regarding your <b>subject & stream selection.</b>',
      link: '/stream-selector',
      buttonText: 'Explore',
      delay: 200
    },
    {
      id: 3,
      icon: 'fa-user',
      grade: '10th Std',
      description: 'Make informed decisions regarding your <b>stream choices.</b>',
      link: '/stream-selector',
      buttonText: 'Explore',
      delay: 300
    },
    {
      id: 4,
      icon: 'fa-user-tie',
      grade: '11th Std',
      description: 'Plan for your <b>college admissions & career goals.</b>',
      link: '/stream-selector',
      buttonText: 'Explore',
      delay: 400
    },
    {
      id: 5,
      icon: 'fa-user-graduate',
      grade: 'UG Students',
      description: 'Explore your interests and choose your <b>specialization or career path.</b>',
      link: '/career-streams',
      buttonText: 'Explore',
      delay: 500
    },
    {
      id: 6,
      icon: 'fa-user-graduate',
      grade: 'PG Students',
      description: 'Refine your goals and focus on <b>career advancement & expertise.</b>',
      link: '/career-streams',
      buttonText: 'Explore',
      delay: 600
    },
    {
      id: 7,
      icon: 'fa-briefcase',
      grade: 'Working Professionals',
      description: 'Get guidance for <b>career growth, switching fields, or leadership roles.</b>',
      link: '/counsellors',
      buttonText: 'Explore',
      delay: 700
    }
  ];

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
              <li><a href="/about" style={{ color: 'var(--primary-color)' }}>About Us</a></li>
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
          <h1 data-aos="fade-up">About Career Guide</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Empowering students to make informed career decisions through scientific assessments and expert guidance
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-container">
            <div className="about-content" data-aos="fade-right">
              <h2>Our Mission</h2>
              <p>We are India's leading career guidance platform, dedicated to helping students and professionals make informed career decisions through scientific assessments and expert counselling.</p>
              <p>Our mission is to empower individuals to discover their true potential and find fulfilling career paths that align with their strengths, interests, and values.</p>

              <div className="about-features">
                {features.map((feature, index) => (
                  <div className="about-feature" key={index}>
                    <i className={`fas ${feature.icon}`}></i>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-img" data-aos="fade-left">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=compress&cs=tinysrgb&w=800" alt="Career Guidance" />
            </div>
          </div>
        </div>
      </section>

      {/* Student Section */}
      <section className="student-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>WHO'S IT FOR?</h2>
            <h3>WE'RE YOUR PARTNER THROUGH EVERY PHASE OF YOUR CAREER</h3>
          </div>

          <div className="student-cards">
            {studentCards.map((card) => (
              <div className="student-card" key={card.id} data-aos="fade-up" data-aos-delay={card.delay}>
                <div className="student-icon">
                  <i className={`fas ${card.icon}`}></i>
                </div>
                <h3 dangerouslySetInnerHTML={{ __html: card.grade }}></h3>
                <p dangerouslySetInnerHTML={{ __html: card.description }}></p>
                <a href={card.link} className="btn btn-primary">{card.buttonText}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Meet Our Leadership Team</h2>
            <p>Passionate professionals committed to helping you achieve your career goals</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-member" key={member.id} data-aos="fade-up" data-aos-delay={member.delay}>
                <div className="member-icon">
                  <i className={`fas ${member.icon}`}></i>
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="team-social">
                  <a href="/"><i className="fab fa-linkedin-in"></i></a>
                  <a href="/"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            ))}
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

export default About;