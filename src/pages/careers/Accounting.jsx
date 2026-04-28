import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const Accounting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Accounting & CA',
    subtitle: 'Audit, Analyze, Advise',
    description: 'Accounting involves recording, analyzing, and reporting financial transactions of businesses and individuals.',
    overview: 'Chartered Accountancy is one of the most prestigious and rewarding professions in India. CAs are experts in accounting, auditing, taxation, and financial management.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '3-5 Years (CA)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 (Any Stream)' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹7-20 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '15% annually' }
    ],

    specializations: [
      {
        name: 'Audit & Assurance',
        description: 'Examining financial statements for accuracy',
        careers: ['Auditor', 'Internal Auditor', 'Forensic Accountant']
      },
      {
        name: 'Taxation',
        description: 'Advising on tax planning and compliance',
        careers: ['Tax Consultant', 'Tax Manager', 'International Tax Specialist']
      },
      {
        name: 'Management Accounting',
        description: 'Financial analysis for business decisions',
        careers: ['Management Accountant', 'Financial Controller', 'CFO']
      },
      {
        name: 'Advisory Services',
        description: 'Business consulting and financial advice',
        careers: ['Business Consultant', 'Financial Advisor', 'M&A Specialist']
      }
    ],

    topColleges: [
      { name: 'ICAI', ranking: '#1', location: 'New Delhi' },
      { name: 'Narsee Monjee', ranking: '#2', location: 'Mumbai' },
      { name: 'SRCC', ranking: '#3', location: 'Delhi' },
      { name: 'St. Xavier\'s', ranking: '#4', location: 'Kolkata' }
    ],

    skills: [
      'Attention to Detail', 'Analytical Skills', 'Integrity', 
      'Problem Solving', 'Communication', 'Time Management',
      'Technical Proficiency', 'Business Acumen', 'Ethical Judgment'
    ],

    careerPaths: [
      {
        role: 'Chartered Accountant',
        companies: 'Big 4 (Deloitte, PwC, EY, KPMG), MNCs',
        salary: '₹8-15 LPA'
      },
      {
        role: 'Financial Controller',
        companies: 'Corporates, Banks, Manufacturing Companies',
        salary: '₹12-25 LPA'
      },
      {
        role: 'Tax Consultant',
        companies: 'Consulting Firms, Tax Advisory Companies',
        salary: '₹7-18 LPA'
      }
    ],

    resources: [
      { name: 'ICAI Official Website', link: '#' },
      { name: 'CA Club India', link: '#' },
      { name: 'Coursera Accounting Courses', link: '#' }
    ]
  };

  return (
    <div className="career-detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/career-streams')}>
          <i className="fas fa-arrow-left"></i> Back to Career Streams
        </button>
      </div>

      <section className="career-hero" style={{background: 'linear-gradient(135deg, #ff6d00, #1a73e8)'}}>
        <div className="container">
          <h1>{careerData.title}</h1>
          <p className="hero-subtitle">{careerData.subtitle}</p>
          <p className="hero-description">{careerData.description}</p>
        </div>
      </section>

      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid">
            {careerData.keyHighlights.map((item, index) => (
              <div key={index} className="highlight-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <i className={`fas ${item.icon}`} style={{color: '#ff6d00'}}></i>
                <div className="highlight-content">
                  <span className="highlight-label">{item.label}</span>
                  <span className="highlight-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overview-section">
        <div className="container">
          <h2 className="section-title">Overview</h2>
          <p className="overview-text">{careerData.overview}</p>
        </div>
      </section>

      <section className="specializations-section">
        <div className="container">
          <h2 className="section-title">Popular Specializations</h2>
          <div className="specializations-grid">
            {careerData.specializations.map((spec, index) => (
              <div key={index} className="specialization-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3>{spec.name}</h3>
                <p>{spec.description}</p>
                <div className="career-list">
                  <h4>Career Options:</h4>
                  <ul>
                    {spec.careers.map((career, idx) => (
                      <li key={idx}>{career}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills You'll Need</h2>
          <div className="skills-grid">
            {careerData.skills.map((skill, index) => (
              <div key={index} className="skill-tag" data-aos="zoom-in" data-aos-delay={index * 50}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="colleges-section">
        <div className="container">
          <h2 className="section-title">Top Institutes for CA</h2>
          <div className="colleges-grid">
            {careerData.topColleges.map((college, index) => (
              <div key={index} className="college-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3>{college.name}</h3>
                <p className="college-rank">{college.ranking}</p>
                <p className="college-location">{college.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="career-paths-section">
        <div className="container">
          <h2 className="section-title">Career Paths & Salary</h2>
          <div className="paths-grid">
            {careerData.careerPaths.map((path, index) => (
              <div key={index} className="path-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3>{path.role}</h3>
                <p className="path-companies">{path.companies}</p>
                <p className="path-salary">{path.salary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-section">
        <div className="container">
          <h2 className="section-title">Learning Resources</h2>
          <div className="resources-grid">
            {careerData.resources.map((resource, index) => (
              <a key={index} href={resource.link} className="resource-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <i className="fas fa-external-link-alt"></i>
                <span>{resource.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section-career" style={{background: 'linear-gradient(135deg, #ff6d00, #1a73e8)'}}>
        <div className="container">
          <h2>Ready to Start Your CA Journey?</h2>
          <p>Take our career assessment to find if CA is right for you</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Accounting;