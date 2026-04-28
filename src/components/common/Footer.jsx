import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>About Career Guide</h3>
            <p>
              We are India's leading career guidance platform, helping students 
              make informed career decisions through scientific assessments and 
              expert counselling.
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
  );
};

export default Footer;