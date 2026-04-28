import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const History = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'History & Archaeology',
    subtitle: 'Explore, Preserve, Interpret',
    description: 'History is the study of past events, civilizations, and their impact on the present and future.',
    overview: 'History helps us understand where we come from and how societies evolve. Archaeologists uncover and preserve physical evidence of past human activity.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '3 Years (BA)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 (Any Stream)' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹3-7 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '6% annually' }
    ],

    specializations: [
      {
        name: 'Ancient History',
        description: 'Study of early civilizations and cultures',
        careers: ['Historian', 'Researcher', 'Museum Curator']
      },
      {
        name: 'Archaeology',
        description: 'Excavation and analysis of historical artifacts',
        careers: ['Archaeologist', 'Field Researcher', 'Conservation Specialist']
      },
      {
        name: 'Art History',
        description: 'Study of visual arts through ages',
        careers: ['Art Historian', 'Gallery Curator', 'Art Critic']
      },
      {
        name: 'Heritage Management',
        description: 'Preservation of historical sites and monuments',
        careers: ['Heritage Manager', 'Conservationist', 'Museum Administrator']
      }
    ],

    topColleges: [
      { name: 'JNU', ranking: '#1', location: 'Delhi' },
      { name: 'Delhi University', ranking: '#2', location: 'Delhi' },
      { name: 'Presidency University', ranking: '#3', location: 'Kolkata' },
      { name: 'University of Hyderabad', ranking: '#4', location: 'Hyderabad' }
    ],

    skills: [
      'Research Skills', 'Critical Analysis', 'Attention to Detail', 
      'Writing', 'Patience', 'Cultural Awareness',
      'Preservation Techniques', 'Field Work', 'Documentation'
    ],

    careerPaths: [
      {
        role: 'Historian',
        companies: 'Universities, Research Institutes, Archives',
        salary: '₹4-8 LPA'
      },
      {
        role: 'Archaeologist',
        companies: 'ASI, Museums, Research Organizations',
        salary: '₹4-7 LPA'
      },
      {
        role: 'Museum Curator',
        companies: 'Museums, Galleries, Cultural Centers',
        salary: '₹3-6 LPA'
      }
    ],

    resources: [
      { name: 'British Museum Online', link: '#' },
      { name: 'Coursera History Courses', link: '#' },
      { name: 'Archaeological Survey of India', link: '#' }
    ]
  };

  return (
    <div className="career-detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/career-streams')}>
          <i className="fas fa-arrow-left"></i> Back to Career Streams
        </button>
      </div>

      <section className="career-hero" style={{background: 'linear-gradient(135deg, #00c853, #ff6d00)'}}>
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
                <i className={`fas ${item.icon}`} style={{color: '#00c853'}}></i>
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
          <h2 className="section-title">Top History Colleges</h2>
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

      <section className="cta-section-career" style={{background: 'linear-gradient(135deg, #00c853, #ff6d00)'}}>
        <div className="container">
          <h2>Ready to Explore the Past?</h2>
          <p>Take our career assessment to find your path in history</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default History;