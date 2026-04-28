import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const Marketing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Marketing & Sales',
    subtitle: 'Create, Communicate, Convert',
    description: 'Marketing involves promoting products and services, understanding customer needs, and building brand value.',
    overview: 'Marketing is the bridge between companies and customers. It combines creativity with analytics to drive business growth.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '3 Years (BBA/B.Com)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 (Any Stream)' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹5-15 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '15% annually' }
    ],

    specializations: [
      {
        name: 'Digital Marketing',
        description: 'Online marketing through social media, SEO, and content',
        careers: ['Digital Marketer', 'SEO Specialist', 'Social Media Manager']
      },
      {
        name: 'Brand Management',
        description: 'Building and managing brand identity',
        careers: ['Brand Manager', 'Marketing Manager', 'Product Manager']
      },
      {
        name: 'Market Research',
        description: 'Analyzing market trends and consumer behavior',
        careers: ['Market Research Analyst', 'Consumer Insights Manager']
      },
      {
        name: 'Sales',
        description: 'Direct selling and relationship management',
        careers: ['Sales Manager', 'Business Development Manager', 'Account Executive']
      }
    ],

    topColleges: [
      { name: 'IIM Ahmedabad', ranking: '#1', location: 'Ahmedabad' },
      { name: 'MICA', ranking: '#2', location: 'Ahmedabad' },
      { name: 'Xavier\'s Mumbai', ranking: '#3', location: 'Mumbai' },
      { name: 'Symbiosis Pune', ranking: '#4', location: 'Pune' }
    ],

    skills: [
      'Creativity', 'Communication', 'Analytical Thinking', 
      'Customer Focus', 'Strategic Planning', 'Negotiation',
      'Digital Literacy', 'Storytelling', 'Adaptability'
    ],

    careerPaths: [
      {
        role: 'Marketing Manager',
        companies: 'FMCG Companies, Tech Firms, Agencies',
        salary: '₹8-18 LPA'
      },
      {
        role: 'Brand Manager',
        companies: 'Unilever, P&G, Nike, Adidas',
        salary: '₹10-22 LPA'
      },
      {
        role: 'Digital Marketing Specialist',
        companies: 'Google, Facebook, Amazon, Startups',
        salary: '₹6-15 LPA'
      }
    ],

    resources: [
      { name: 'Google Digital Garage', link: '#' },
      { name: 'HubSpot Academy', link: '#' },
      { name: 'Coursera Marketing Courses', link: '#' }
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
          <h2 className="section-title">Top Marketing Colleges</h2>
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
          <h2>Ready to Create Impact with Marketing?</h2>
          <p>Take our career assessment to find your marketing niche</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Marketing;