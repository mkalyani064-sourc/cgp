import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const Cloud = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Cloud Computing',
    subtitle: 'Scale, Deploy, Innovate',
    description: 'Cloud computing delivers computing services over the internet, including storage, processing, and software on demand.',
    overview: 'Cloud computing has transformed how businesses operate. Cloud professionals design, deploy, and manage infrastructure on platforms like AWS, Azure, and Google Cloud.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '4 Years (B.Tech)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 with PCM' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹8-22 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '28% annually' }
    ],

    specializations: [
      {
        name: 'Cloud Architecture',
        description: 'Designing cloud solutions and infrastructure',
        careers: ['Cloud Architect', 'Solution Architect', 'Infrastructure Designer']
      },
      {
        name: 'DevOps',
        description: 'Combining development and operations',
        careers: ['DevOps Engineer', 'Site Reliability Engineer', 'Platform Engineer']
      },
      {
        name: 'Cloud Security',
        description: 'Securing cloud environments',
        careers: ['Cloud Security Engineer', 'IAM Specialist', 'Compliance Analyst']
      },
      {
        name: 'Multi-Cloud',
        description: 'Managing multiple cloud platforms',
        careers: ['Multi-Cloud Engineer', 'Hybrid Cloud Specialist']
      }
    ],

    topColleges: [
      { name: 'IIT Bombay', ranking: '#1', location: 'Mumbai' },
      { name: 'IIT Madras', ranking: '#2', location: 'Chennai' },
      { name: 'BITS Pilani', ranking: '#3', location: 'Pilani' },
      { name: 'VIT Vellore', ranking: '#4', location: 'Vellore' }
    ],

    skills: [
      'AWS/Azure/GCP', 'Linux', 'Containerization', 
      'Kubernetes', 'Infrastructure as Code', 'Networking',
      'Scripting', 'Security', 'Cost Management'
    ],

    careerPaths: [
      {
        role: 'Cloud Engineer',
        companies: 'Tech Companies, Startups, MNCs',
        salary: '₹7-15 LPA'
      },
      {
        role: 'DevOps Engineer',
        companies: 'Product Companies, E-commerce',
        salary: '₹9-20 LPA'
      },
      {
        role: 'Cloud Architect',
        companies: 'Consulting Firms, Enterprises',
        salary: '₹15-35 LPA'
      }
    ],

    resources: [
      { name: 'AWS Training', link: '#' },
      { name: 'Microsoft Learn', link: '#' },
      { name: 'Google Cloud Skills', link: '#' }
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
          <h2 className="section-title">Top Cloud Computing Colleges</h2>
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
          <h2>Ready to Scale with Cloud?</h2>
          <p>Take our career assessment to find your path in cloud computing</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cloud;