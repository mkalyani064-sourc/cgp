import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const Finance = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Finance & Banking',
    subtitle: 'Manage, Invest, Grow',
    description: 'Finance involves the management of money, investments, and financial systems for individuals, businesses, and governments.',
    overview: 'The finance sector offers diverse opportunities in banking, investments, insurance, and financial planning with excellent growth prospects.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '3 Years (B.Com/BBA)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 (Any Stream)' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹5-15 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '12% annually' }
    ],

    specializations: [
      {
        name: 'Investment Banking',
        description: 'Helping companies raise capital and manage mergers',
        careers: ['Investment Banker', 'M&A Analyst', 'Equity Researcher']
      },
      {
        name: 'Financial Analysis',
        description: 'Analyzing financial data for investment decisions',
        careers: ['Financial Analyst', 'Portfolio Manager', 'Research Analyst']
      },
      {
        name: 'Wealth Management',
        description: 'Managing investments for high-net-worth individuals',
        careers: ['Wealth Manager', 'Financial Advisor', 'Private Banker']
      },
      {
        name: 'Risk Management',
        description: 'Identifying and mitigating financial risks',
        careers: ['Risk Analyst', 'Credit Analyst', 'Compliance Officer']
      }
    ],

    topColleges: [
      { name: 'SRCC', ranking: '#1', location: 'Delhi' },
      { name: 'St. Xavier\'s', ranking: '#2', location: 'Mumbai' },
      { name: 'Christ University', ranking: '#3', location: 'Bangalore' },
      { name: 'Narsee Monjee', ranking: '#4', location: 'Mumbai' }
    ],

    skills: [
      'Analytical Thinking', 'Numerical Ability', 'Attention to Detail',
      'Communication', 'Decision Making', 'Ethical Judgment',
      'Market Knowledge', 'Risk Assessment', 'Financial Modeling'
    ],

    careerPaths: [
      {
        role: 'Financial Analyst',
        companies: 'Banks, Investment Firms, Corporates',
        salary: '₹6-12 LPA'
      },
      {
        role: 'Investment Banker',
        companies: 'Goldman Sachs, Morgan Stanley, JP Morgan',
        salary: '₹15-30 LPA'
      },
      {
        role: 'Portfolio Manager',
        companies: 'Asset Management Companies, Hedge Funds',
        salary: '₹12-25 LPA'
      }
    ],

    resources: [
      { name: 'CFA Institute', link: '#' },
      { name: 'Coursera Finance Courses', link: '#' },
      { name: 'Wall Street Prep', link: '#' }
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

      {/* Add all sections similar to above pattern */}
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
          <h2 className="section-title">Top Commerce Colleges in India</h2>
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
          <h2>Ready to Start Your Finance Career?</h2>
          <p>Take our career assessment to find your perfect finance role</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Finance;