import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css';

const Explore = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  const exploreSections = [
    {
      id: 1,
      title: 'Career Streams',
      subtitle: 'Discover Your Path',
      description: 'Explore various career streams and find the perfect path that matches your interests and skills. From Engineering to Design, we have it all covered.',
      image: 'https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'fa-route',
      color: '#1a73e8',
      gradient: 'linear-gradient(135deg, #1a73e8, #00c853)',
      stats: [
        { label: 'Career Streams', value: '20+' },
        { label: 'Job Roles', value: '100+' },
        { label: 'Updated Weekly', value: '✓' }
      ],
      features: [
        'Science & Technology',
        'Commerce & Business',
        'Arts & Humanities',
        'Design & Creative'
      ],
      buttonText: 'Explore Streams',
      buttonLink: '/career-streams',
      delay: 100
    },
    {
      id: 2,
      title: 'Resources',
      subtitle: 'Learn & Grow',
      description: 'Access our comprehensive collection of articles, guides, videos, and tools to help you make informed career decisions and ace your journey.',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'fa-book-open',
      color: '#00c853',
      gradient: 'linear-gradient(135deg, #00c853, #ff6d00)',
      stats: [
        { label: 'Articles', value: '50+' },
        { label: 'Video Guides', value: '30+' },
        { label: 'Tools', value: '15+' }
      ],
      features: [
        'Career Guides',
        'Interview Tips',
        'Resume Building',
        'Skill Assessments'
      ],
      buttonText: 'Browse Resources',
      buttonLink: '/resources',
      delay: 200
    },
    {
      id: 3,
      title: 'Counsellors',
      subtitle: 'Get Expert Guidance',
      description: 'Connect with our experienced career counsellors who can provide personalized guidance, answer your questions, and help you plan your career path.',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'fa-users',
      color: '#ff6d00',
      gradient: 'linear-gradient(135deg, #ff6d00, #1a73e8)',
      stats: [
        { label: 'Expert Counsellors', value: '25+' },
        { label: 'Sessions Done', value: '5k+' },
        { label: 'Happy Students', value: '10k+' }
      ],
      features: [
        '1-on-1 Sessions',
        'Career Planning',
        'College Admissions',
        'Skill Development'
      ],
      buttonText: 'Find a Counsellor',
      buttonLink: '/counsellors',
      delay: 300
    }
  ];

  const featuredContent = [
    {
      id: 1,
      type: 'Popular Stream',
      title: 'Engineering',
      description: 'Design, build, and innovate with 50+ specializations',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/career/engineering',
      color: '#1a73e8'
    },
    {
      id: 2,
      type: 'Trending Article',
      title: 'AI Career Guide 2024',
      description: 'How to start your career in Artificial Intelligence',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/resources/article/ai-careers',
      color: '#00c853'
    },
    {
      id: 3,
      type: 'Top Counsellor',
      title: 'Dr. Priya Sharma',
      description: 'Career Psychologist with 15+ years experience',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/counsellors/dr-priya',
      color: '#ff6d00'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Kumar',
      role: 'Engineering Student',
      quote: 'Career Guide helped me discover my passion for AI. The resources section is gold!',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Singh',
      role: 'MBA Graduate',
      quote: 'The counsellors here are amazing! They guided me through the entire admission process.',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      rating: 5
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Working Professional',
      quote: 'Found my dream career transition through their career streams exploration tool.',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      rating: 5
    }
  ];

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
                <a href="/explore" style={{color: 'var(--primary-color)'}}>Explore</a>
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
      <section className="explore-hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1>Explore Your Future</h1>
            <p>Discover career streams, access valuable resources, and connect with expert counsellors - all in one place.</p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Career Streams</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Resources</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Expert Counsellors</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="white" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Explore Sections */}
      <section className="explore-sections">
        <div className="container">
          {exploreSections.map((section) => (
            <div key={section.id} className="explore-card-wrapper" data-aos="fade-up" data-aos-delay={section.delay}>
              <div className="explore-card">
                <div className="explore-card-image">
                  <img src={section.image} alt={section.title} />
                  <div className="image-overlay" style={{background: section.gradient}}></div>
                  <div className="card-icon" style={{background: section.gradient}}>
                    <i className={`fas ${section.icon}`}></i>
                  </div>
                </div>
                
                <div className="explore-card-content">
                  <div className="card-header">
                    <h2 style={{color: section.color}}>{section.title}</h2>
                    <h3>{section.subtitle}</h3>
                  </div>
                  
                  <p className="card-description">{section.description}</p>
                  
                  <div className="card-stats">
                    {section.stats.map((stat, idx) => (
                      <div key={idx} className="stat-item">
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="card-features">
                    {section.features.map((feature, idx) => (
                      <span key={idx} className="feature-chip" style={{backgroundColor: section.color + '20', color: section.color}}>
                        <i className="fas fa-check-circle"></i> {feature}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    className="explore-btn"
                    style={{background: section.gradient}}
                    onClick={() => navigate(section.buttonLink)}
                  >
                    {section.buttonText} <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Content */}
      <section className="featured-content">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Featured This Week</h2>
            <p>Hand-picked content to help you get started</p>
          </div>
          
          <div className="featured-grid">
            {featuredContent.map((item, index) => (
              <div key={item.id} className="featured-card" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                <div className="featured-image">
                  <img src={item.image} alt={item.title} />
                  <span className="featured-type" style={{backgroundColor: item.color}}>{item.type}</span>
                </div>
                <div className="featured-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button 
                    className="featured-link" 
                    style={{color: item.color}}
                    onClick={() => navigate(item.link)}
                  >
                    Explore Now <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="explore-testimonials">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>What Our Users Say</h2>
            <p>Real stories from students and professionals who found their path with us</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-card" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} />
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
      <section className="explore-cta">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Start Your Journey?</h2>
            <p>Whether you're exploring careers, looking for resources, or need expert advice - we're here for you.</p>
            <div className="cta-buttons">
              <button className="cta-btn primary" onClick={() => navigate('/career-streams')}>
                Explore Streams
              </button>
              <button className="cta-btn secondary" onClick={() => navigate('/counsellors')}>
                Talk to Counsellor
              </button>
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

export default Explore;