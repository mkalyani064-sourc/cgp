import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const Cybersecurity = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Cybersecurity',
    subtitle: 'Protect, Defend, Secure',
    description: 'Cybersecurity involves protecting computer systems, networks, and data from digital attacks, theft, and damage.',
    overview: 'With increasing cyber threats, cybersecurity professionals are in high demand. They safeguard sensitive information and ensure digital safety.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '4 Years (B.Tech)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 with PCM' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹7-20 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '32% annually' }
    ],

    specializations: [
      {
        name: 'Network Security',
        description: 'Protecting network infrastructure',
        careers: ['Network Security Engineer', 'Firewall Administrator', 'Security Architect']
      },
      {
        name: 'Ethical Hacking',
        description: 'Identifying vulnerabilities through authorized hacking',
        careers: ['Ethical Hacker', 'Penetration Tester', 'Security Consultant']
      },
      {
        name: 'Digital Forensics',
        description: 'Investigating cyber crimes',
        careers: ['Forensic Analyst', 'Incident Responder', 'Cyber Crime Investigator']
      },
      {
        name: 'Application Security',
        description: 'Securing software applications',
        careers: ['AppSec Engineer', 'Security Developer', 'DevSecOps Engineer']
      }
    ],

    topColleges: [
      { name: 'IIT Kanpur', ranking: '#1', location: 'Kanpur' },
      { name: 'IIIT Allahabad', ranking: '#2', location: 'Allahabad' },
      { name: 'VIT Vellore', ranking: '#3', location: 'Vellore' },
      { name: 'Amrita University', ranking: '#4', location: 'Coimbatore' }
    ],

    skills: [
      'Networking', 'Operating Systems', 'Programming', 
      'Risk Assessment', 'Incident Response', 'Analytical Thinking',
      'Cryptography', 'Ethical Hacking', 'Attention to Detail'
    ],

    careerPaths: [
      {
        role: 'Security Analyst',
        companies: 'Banks, IT Companies, Government',
        salary: '₹6-12 LPA'
      },
      {
        role: 'Penetration Tester',
        companies: 'Consulting Firms, Security Companies',
        salary: '₹8-18 LPA'
      },
      {
        role: 'Security Architect',
        companies: 'Tech Giants, MNCs',
        salary: '₹15-30 LPA'
      }
    ],

    resources: [
      { name: 'Cybrary', link: '#' },
      { name: 'OWASP', link: '#' },
      { name: 'Coursera Cybersecurity', link: '#' }
    ]
  };

  return (
    <div className="career-detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/career-streams')}>
          <i className="fas fa-arrow-left"></i> Back to Career Streams
        </button>
      </div>

      <section className="career-hero" style={{background: 'linear-gradient(135deg, #1a73e8, #00c853)'}}>
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
                <i className={`fas ${item.icon}`} style={{color: '#1a73e8'}}></i>
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
          <h2 className="section-title">Top Cybersecurity Colleges</h2>
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

      <section className="cta-section-career" style={{background: 'linear-gradient(135deg, #1a73e8, #00c853)'}}>
        <div className="container">
          <h2>Ready to Defend the Digital World?</h2>
          <p>Take our career assessment to find your path in cybersecurity</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;