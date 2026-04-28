import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  // Filter buttons
  const filterButtons = [
    { id: 'all', label: 'All', icon: 'fa-layer-group' },
    { id: 'article', label: 'Articles', icon: 'fa-newspaper' },
    { id: 'guide', label: 'Guides', icon: 'fa-book' },
    { id: 'video', label: 'Videos', icon: 'fa-video' },
    { id: 'tool', label: 'Tools', icon: 'fa-tools' }
  ];

  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      try {
        const url = activeFilter === 'all'
          ? 'http://localhost:5000/api/resources'
          : `http://localhost:5000/api/resources?category=${activeFilter}`;

        const response = await fetch(url);
        const data = await response.json();
        if (data.success) {
          setResources(data.data);
        }
      } catch (error) {
        console.error('Failed to fetch resources:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, [activeFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        offset: 50
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

  const handleResourceClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* Navigation */}
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
                  <a href="/resources" style={{ color: 'var(--primary-color)' }}>Resources</a>
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
      <div className="resources-header">
        <div className="container">
          <h1 data-aos="fade-up">Resources Library</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Articles, guides, videos, and tools to help you make informed career decisions
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="container">
          <div className="filter-wrapper" data-aos="fade-up">
            {filterButtons.map(btn => (
              <button
                key={btn.id}
                className={`filter-btn ${activeFilter === btn.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(btn.id)}
              >
                <i className={`fas ${btn.icon}`}></i>
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Grid - Simple cards like Career Streams */}
      <section className="resources-section">
        <div className="container">
          <div className="resources-grid-simple">
            {loading ? (
              <div className="loading-spinner">Gathering resources...</div>
            ) : resources.length > 0 ? (
              resources.map((resource, index) => (
                <div
                  key={resource._id}
                  className="resource-card-simple"
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 100}
                  onClick={() => handleResourceClick(resource.path || `/resources/${resource._id}`)}
                >
                  <div className="resource-image-simple">
                    <img src={resource.image} alt={resource.title} />
                    <span className={`category-tag-simple ${resource.category}`}>
                      <i className={`fas ${resource.category === 'article' ? 'fa-newspaper' :
                          resource.category === 'guide' ? 'fa-book' :
                            resource.category === 'video' ? 'fa-video' : 'fa-tools'
                        }`}></i>
                      {resource.category}
                    </span>
                  </div>
                  <div className="resource-content-simple">
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                    <button className="learn-more-btn">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-data">No {activeFilter} resources found.</div>
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

export default Resources;