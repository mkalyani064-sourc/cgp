import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                alert('Thank you for contacting us! We have received your message.');
                setFormData({ name: '', email: '', phone: '', message: '', subject: 'General Inquiry' });
            } else {
                alert(data.message || 'Failed to send message');
            }
        } catch (error) {
            alert('Server error, please try again later');
        }
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
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact" style={{ color: 'var(--primary-color)' }}>Contact</a></li>
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
            <div className="contact-page-header">
                <div className="container">
                    <h1 data-aos="fade-up">Get In Touch</h1>
                    <p data-aos="fade-up" data-aos-delay="100">Have questions? We're here to help you find your perfect match.</p>
                </div>
            </div>

            {/* Contact Section */}
            <div className="contact-section">
                <div className="container">
                    <div className="contact-grid-modern">
                        {/* Left Column - Contact Info */}
                        <div className="contact-info-modern" data-aos="fade-right">
                            <h2 className="left-title">Contact Information</h2>

                            <div className="info-item left-align">
                                <div className="info-icon" style={{ background: 'linear-gradient(135deg, #1a73e8, #00c853)' }}>
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="info-details left-align">
                                    <h3>Visit Us</h3>
                                    <p>123, Vijayawada<br />Andhra Pradesh, India</p>
                                </div>
                            </div>

                            <div className="info-item left-align">
                                <div className="info-icon" style={{ background: 'linear-gradient(135deg, #1a73e8, #00c853)' }}>
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="info-details left-align">
                                    <h3>Call Us</h3>
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="info-item left-align">
                                <div className="info-icon" style={{ background: 'linear-gradient(135deg, #1a73e8, #00c853)' }}>
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="info-details left-align">
                                    <h3>Email Us</h3>
                                    <p>info@careerguide.com</p>
                                </div>
                            </div>

                            <div className="info-item left-align">
                                <div className="info-icon" style={{ background: 'linear-gradient(135deg, #1a73e8, #00c853)' }}>
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="info-details left-align">
                                    <h3>Working Hours</h3>
                                    <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="contact-form-modern" data-aos="fade-left">
                            <h2 className="left-title">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="left-align-form">
                                <div className="form-group-modern left-align">
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group-modern left-align">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group-modern left-align">
                                    <label>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group-modern left-align">
                                    <label>Subject</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Career Counselling">Career Counselling</option>
                                        <option value="Technical Support">Technical Support</option>
                                        <option value="Donation Feedback">Donation Feedback</option>
                                    </select>
                                </div>

                                <div className="form-group-modern left-align">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="How can we help you?"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-btn-modern left-align">
                                    Send Message
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-section">
                <div className="container">
                    <div className="map-container" data-aos="fade-up">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.590912345678!2d80.61696331485548!3d16.5061743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f4c2b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                            allowFullScreen
                            loading="lazy"
                            title="Career Guide Location Map"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-column">
                            <h3>About Career Guide</h3>
                            <p>We are India's leading career guidance platform, helping students make informed career decisions through scientific assessments and expert counselling.</p>
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

export default Contact;