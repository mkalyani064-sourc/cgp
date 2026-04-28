import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerStreams.css';

const CareerStreams = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeStream, setActiveStream] = useState('science');
  const navigate = useNavigate();

  // Stream tabs data
  const streamTabs = [
    { id: 'science', label: 'Science' },
    { id: 'commerce', label: 'Commerce' },
    { id: 'arts', label: 'Arts' },
    { id: 'technology', label: 'Technology' },
    { id: 'design', label: 'Design' }
  ];

  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/api/careers?stream=${activeStream}`);
        const data = await response.json();
        if (data.success) {
          setCareers(data.data);
        }
      } catch (error) {
        console.error('Failed to fetch careers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, [activeStream]);

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

  const handleStreamClick = (streamId) => {
    setActiveStream(streamId);
  };

  const handleLearnMore = (path) => {
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
          <h1 data-aos="fade-up">Explore Career Streams</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Discover detailed information about various career paths and find the one that's right for you
          </p>
        </div>
      </section>

      {/* Career Streams Section */}
      <section className="career-streams">
        <div className="container">
          <div className="stream-tabs" data-aos="fade-up" data-aos-delay="100">
            {streamTabs.map((tab) => (
              <button
                key={tab.id}
                className={`stream-tab ${activeStream === tab.id ? 'active' : ''}`}
                onClick={() => handleStreamClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="stream-content active">
            {loading ? (
              <div className="loading-spinner">Discovering careers...</div>
            ) : careers.length > 0 ? (
              <div className="stream-grid">
                {careers.map((career, index) => (
                  <div
                    key={career._id}
                    className="stream-card"
                    data-aos="fade-up"
                    data-aos-delay={(index % 4) * 100}
                  >
                    <div className="stream-img">
                      <img src={career.image} alt={career.title} loading="lazy" />
                    </div>
                    <div className="stream-info">
                      <h4>{career.title}</h4>
                      <p>{career.description}</p>
                      <button
                        className="btn btn-primary learn-more-btn"
                        onClick={() => handleLearnMore(`/career/${career._id}`)}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-data">No careers found for {activeStream} stream yet.</div>
            )}
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

export default CareerStreams;