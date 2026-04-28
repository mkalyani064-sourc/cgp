import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const DataScience = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Data Science & AI',
    subtitle: 'Analyze, Predict, Transform',
    description: 'Data Science combines statistics, programming, and domain expertise to extract insights from data. AI creates intelligent systems that can learn and make decisions.',
    overview: 'Data Science and AI are revolutionizing every industry. From healthcare to finance, organizations use data to make better decisions and create innovative products.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '4 Years (B.Tech)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 with PCM' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹8-30 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '35% annually' }
    ],

    specializations: [
      {
        name: 'Machine Learning',
        description: 'Building algorithms that learn from data',
        careers: ['ML Engineer', 'AI Researcher', 'NLP Engineer']
      },
      {
        name: 'Data Analytics',
        description: 'Analyzing data for business insights',
        careers: ['Data Analyst', 'Business Intelligence Analyst', 'Analytics Manager']
      },
      {
        name: 'Deep Learning',
        description: 'Neural networks for complex problems',
        careers: ['Deep Learning Engineer', 'Computer Vision Engineer', 'AI Specialist']
      },
      {
        name: 'Big Data',
        description: 'Processing large-scale data systems',
        careers: ['Big Data Engineer', 'Data Architect', 'Hadoop Developer']
      }
    ],

    topColleges: [
      { name: 'IIT Madras', ranking: '#1', location: 'Chennai' },
      { name: 'IIT Bombay', ranking: '#2', location: 'Mumbai' },
      { name: 'IIIT Bangalore', ranking: '#3', location: 'Bangalore' },
      { name: 'IIT Delhi', ranking: '#4', location: 'Delhi' }
    ],

    skills: [
      'Python/R', 'Statistics', 'Machine Learning', 
      'SQL', 'Data Visualization', 'Critical Thinking',
      'Big Data Tools', 'Deep Learning', 'Communication'
    ],

    careerPaths: [
      {
        role: 'Data Scientist',
        companies: 'Tech Companies, Banks, E-commerce',
        salary: '₹10-25 LPA'
      },
      {
        role: 'Machine Learning Engineer',
        companies: 'Google, Amazon, Microsoft, Startups',
        salary: '₹12-30 LPA'
      },
      {
        role: 'AI Research Scientist',
        companies: 'Research Labs, Tech Giants',
        salary: '₹15-40 LPA'
      }
    ],

    resources: [
      { name: 'Kaggle', link: '#' },
      { name: 'Coursera Data Science', link: '#' },
      { name: 'Towards Data Science', link: '#' }
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
          <h2 className="section-title">Top Data Science Colleges</h2>
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
          <h2>Ready to Dive into Data?</h2>
          <p>Take our career assessment to find your path in data science</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default DataScience;