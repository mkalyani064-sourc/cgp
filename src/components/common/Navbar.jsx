import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
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
  );
};

export default Navbar;