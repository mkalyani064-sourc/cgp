import React, { useState, useEffect } from 'react';
import './Donate.css';

const Donate = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [activeFaq, setActiveFaq] = useState(null);

  // Donation amounts
  const donationAmounts = [50, 100, 250, 500, 1000, 2500];

  // Impact stories data
  const impactStories = [
    {
      id: 1,
      name: 'Rahul',
      role: '12th Grade Student',
      story: "Thanks to Career Guide's free counseling, I discovered my passion for engineering and secured admission in a top college. My family couldn't afford paid counseling services.",
      delay: 100
    },
    {
      id: 2,
      name: 'Priya',
      role: 'UG Student',
      story: "The career assessment helped me choose the right specialization. I'm now pursuing my dream career in data science, something I wouldn't have discovered without your guidance.",
      delay: 200
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Working Professional',
      story: "Career Guide helped me transition from a dead-end job to a fulfilling career in digital marketing. The guidance was invaluable and completely free of cost.",
      delay: 300
    }
  ];

  // FAQ data
  const faqItems = [
    {
      id: 1,
      question: 'How is my donation used?',
      answer: '85% of your donation goes directly to program services, including free career assessments, counseling sessions, and educational materials. 15% covers administrative costs to ensure we can continue our mission effectively.',
      delay: 100
    },
    {
      id: 2,
      question: 'Is my donation tax-deductible?',
      answer: 'Yes, Career Guide is a registered non-profit organization under Section 80G of the Income Tax Act. You will receive a tax receipt for your donation that can be used for tax deduction purposes.',
      delay: 200
    },
    {
      id: 3,
      question: 'Can I donate monthly?',
      answer: 'Yes! We offer monthly donation options that provide consistent support for our programs. You can set up a recurring donation through our payment portal or contact us directly for assistance.',
      delay: 300
    },
    {
      id: 4,
      question: 'How can I donate in-kind?',
      answer: 'We welcome in-kind donations including your time as a volunteer counselor, technical expertise, or educational resources. Please contact us at donate@careerguide.com to discuss in-kind donation opportunities.',
      delay: 400
    }
  ];

  // Impact items
  const impactItems = [
    {
      icon: 'fa-check-circle',
      title: 'Free Career Assessments',
      description: 'Provide psychometric tests to 100+ students monthly'
    },
    {
      icon: 'fa-check-circle',
      title: 'Expert Counselling',
      description: 'Fund one-on-one sessions with career experts'
    },
    {
      icon: 'fa-check-circle',
      title: 'Educational Resources',
      description: 'Create and distribute career guidance materials'
    },
    {
      icon: 'fa-check-circle',
      title: 'School Outreach',
      description: 'Conduct workshops in rural and government schools'
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

  // Handle amount selection
  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  // Handle custom amount input
  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value && donationAmounts.includes(Number(value))) {
      setSelectedAmount(Number(value));
    } else {
      setSelectedAmount(null);
    }
  };

  // Handle payment method selection
  const handlePaymentMethodClick = (method) => {
    setPaymentMethod(method);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle FAQ toggle
  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const amount = Number(customAmount);
    const { fullName, email, phone } = formData;

    if (!amount || amount <= 0) {
      alert('Please select or enter a valid donation amount');
      return;
    }
    if (!fullName) { alert('Please enter your full name'); return; }
    if (!email) { alert('Please enter your email address'); return; }
    if (!phone) { alert('Please enter your phone number'); return; }

    // Simulate success flow
    alert(`Thank you, ${fullName}! Your donation of ₹${amount} via ${paymentMethod.toUpperCase()} was received. A confirmation will be sent to ${email}.`);

    // Reset form
    setFormData({ fullName: '', email: '', phone: '' });
    setCustomAmount('');
    setSelectedAmount(null);
    setPaymentMethod('card');
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
              <li><a href="/contact">Contact</a></li>
            </ul>
            
            <div className={`nav-buttons ${isMobileMenuOpen ? 'active' : ''}`}>
              <a href="/login" className="btn btn-outline">Login</a>
              <a href="/register" className="btn btn-primary">Sign Up</a>
              <a href="/donate" className="btn btn-donate">Donate</a>
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
          <h1 data-aos="fade-up">Help us empower students to make informed career decisions and achieve their dreams</h1>
          <p data-aos="fade-up" data-aos-delay="200">Your generous donation helps us provide free career guidance to students from underserved communities</p>
        </div>
      </section>

      {/* Donate Section */}
      <section className="donate" id="donate">
        <div className="container">
          <div className="donation-container">
            <div className="donation-info" data-aos="fade-right">
              <h3>Make a Difference Today</h3>
              <p>Your generous donation helps us provide free career guidance to students from underserved communities, ensuring every young person has access to quality career counseling regardless of their financial background.</p>
              
              <div className="impact-list">
                {impactItems.map((item, index) => (
                  <div className="impact-item" key={index}>
                    <i className={`fas ${item.icon}`}></i>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="donation-form" data-aos="fade-left">
              <h3>Choose Your Donation</h3>
              
              <div className="donation-amounts" role="radiogroup" aria-label="Donation amounts">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`}
                    onClick={() => handleAmountClick(amount)}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
              
              <div className="custom-amount">
                <label htmlFor="customAmount">Or enter custom amount</label>
                <input
                  type="number"
                  id="customAmount"
                  placeholder="Enter amount in ₹"
                  min="1"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                />
              </div>
              
              <form id="donationForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="payment-methods">
                  <h4>Payment Method</h4>
                  <div className="payment-options" role="tablist" aria-label="Payment methods">
                    <div
                      className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`}
                      onClick={() => handlePaymentMethodClick('card')}
                      role="tab"
                      tabIndex="0"
                      aria-selected={paymentMethod === 'card'}
                    >
                      <i className="fas fa-credit-card"></i>
                      <p>Card</p>
                    </div>
                    <div
                      className={`payment-option ${paymentMethod === 'bank' ? 'active' : ''}`}
                      onClick={() => handlePaymentMethodClick('bank')}
                      role="tab"
                      tabIndex="0"
                      aria-selected={paymentMethod === 'bank'}
                    >
                      <i className="fas fa-university"></i>
                      <p>Bank Transfer</p>
                    </div>
                    <div
                      className={`payment-option ${paymentMethod === 'upi' ? 'active' : ''}`}
                      onClick={() => handlePaymentMethodClick('upi')}
                      role="tab"
                      tabIndex="0"
                      aria-selected={paymentMethod === 'upi'}
                    >
                      <i className="fas fa-mobile-alt"></i>
                      <p>UPI</p>
                    </div>
                  </div>
                </div>
                
                <button type="submit" className="donate-btn">Donate Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="impact-stories">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Stories of Impact</h2>
            <p>See how your donations are changing lives</p>
          </div>
          
          <div className="stories-grid">
            {impactStories.map((story) => (
              <div className="story-card" key={story.id} data-aos="fade-up" data-aos-delay={story.delay}>
                <div className="story-header">
                  <div className="story-avatar">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="story-info">
                    <h4>{story.name}</h4>
                    <p>{story.role}</p>
                  </div>
                </div>
                <p className="story-content">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about donating</p>
          </div>
          
          <div className="faq-container">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className={`faq-item ${activeFaq === item.id ? 'active' : ''}`}
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <div className="faq-question" onClick={() => toggleFaq(item.id)}>
                  <span>{item.question}</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Make a Difference?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Your donation today can change a student's tomorrow</p>
          <a href="#donate" className="btn btn-white" data-aos="fade-up" data-aos-delay="400">Donate Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>About Career Guide</h3>
              <p>We are India's leading career guidance platform, helping students make informed career decisions through scientific assessments and expert counselling.</p>
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

export default Donate;