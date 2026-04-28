import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const Business = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Business Management',
    subtitle: 'Lead, Strategize, Succeed',
    description: 'Business Management involves planning, organizing, leading, and controlling organizational resources to achieve goals efficiently.',
    overview: 'Management professionals are the backbone of any organization. They coordinate efforts, make strategic decisions, and drive business growth.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '3 Years (BBA)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 (Any Stream)' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹5-12 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '12% annually' }
    ],

    specializations: [
      {
        name: 'Human Resources',
        description: 'Managing people, recruitment, and employee relations',
        careers: ['HR Manager', 'Recruiter', 'Training Specialist']
      },
      {
        name: 'Operations',
        description: 'Overseeing production and business operations',
        careers: ['Operations Manager', 'Supply Chain Manager', 'Logistics Head']
      },
      {
        name: 'Strategy',
        description: 'Strategic planning and business development',
        careers: ['Strategy Consultant', 'Business Analyst', 'Corporate Planner']
      },
      {
        name: 'Entrepreneurship',
        description: 'Starting and running your own business',
        careers: ['Entrepreneur', 'Startup Founder', 'Business Owner']
      }
    ],

    topColleges: [
      { name: 'IIM Ahmedabad', ranking: '#1', location: 'Ahmedabad' },
      { name: 'IIM Bangalore', ranking: '#2', location: 'Bangalore' },
      { name: 'XLRI Jamshedpur', ranking: '#3', location: 'Jamshedpur' },
      { name: 'FMS Delhi', ranking: '#4', location: 'Delhi' }
    ],

    skills: [
      'Leadership', 'Communication', 'Decision Making', 
      'Problem Solving', 'Strategic Thinking', 'Teamwork',
      'Time Management', 'Negotiation', 'Adaptability'
    ],

    careerPaths: [
      {
        role: 'Business Analyst',
        companies: 'Consulting Firms, Corporates, Tech Companies',
        salary: '₹6-12 LPA'
      },
      {
        role: 'Product Manager',
        companies: 'Tech Companies, Startups, MNCs',
        salary: '₹10-25 LPA'
      },
      {
        role: 'Management Consultant',
        companies: 'McKinsey, BCG, Bain, Deloitte',
        salary: '₹12-30 LPA'
      }
    ],

    resources: [
      { name: 'Harvard Business Review', link: '#' },
      { name: 'Coursera Business Courses', link: '#' },
      { name: 'edX Management Programs', link: '#' }
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
          <h2 className="section-title">Top B-Schools in India</h2>
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
          <h2>Ready to Lead in Business?</h2>
          <p>Take our career assessment to find your management path</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Business;