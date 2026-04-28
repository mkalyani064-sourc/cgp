import React, { useState, useEffect } from 'react';
import './Counsellors.css';

const Counsellors = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [counsellors, setCounsellors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounsellors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/counsellors');
        const data = await response.json();
        if (data.success) {
          setCounsellors(data.data);
        }
      } catch (error) {
        console.error('Failed to fetch counsellors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounsellors();

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
                <a href="/explore" style={{ color: 'var(--primary-color)' }}>Explore</a>
                <div className="dropdown-content">
                  <a href="/career-streams" style={{ color: 'var(--primary-color)' }}>Career Streams</a>
                  <a href="/resources" style={{ color: 'var(--primary-color)' }}>Resources</a>
                  <a href="/counsellors" style={{ color: 'var(--primary-color)' }}>Counsellors</a>
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
          <h1 data-aos="fade-up">Meet Our Expert Counsellors</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Learn from the best in the industry with years of experience
          </p>
        </div>
      </section>

      {/* Counsellors Section */}
      <section className="counsellors">
        <div className="container">
          <div className="counsellor-grid">
            {loading ? (
              <div className="loading-spinner">Loading expert mentors...</div>
            ) : counsellors.length > 0 ? (
              counsellors.map((counsellor, index) => (
                <div
                  key={counsellor._id || counsellor.id}
                  className="counsellor-card"
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 100}
                >
                  <div className="counsellor-icon">
                    {counsellor.image ? (
                      <img src={counsellor.image} alt={counsellor.name} style={{ width: '100%', borderRadius: '50%' }} />
                    ) : (
                      <i className={`fas ${counsellor.icon || 'fa-user'}`}></i>
                    )}
                  </div>
                  <h3>{counsellor.name}</h3>
                  <p className="title">{counsellor.title}</p>
                  <p className="experience">{counsellor.experience}</p>
                  <div className="counsellor-social">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-data">No counsellors found at the moment.</div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Connect with Our Experts?</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Book a session with our experienced counsellors and take the first step towards your dream career
          </p>
          <a
            href="/register"
            className="btn btn-white"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Book a Session
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

export default Counsellors;