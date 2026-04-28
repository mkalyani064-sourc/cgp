import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const PureSciences = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Pure Sciences',
    subtitle: 'Discover, Experiment, Innovate',
    description: 'Pure Sciences involve the study of natural phenomena through observation, experimentation, and theoretical explanation.',
    overview: 'Pure Sciences form the foundation of all scientific knowledge. Researchers and scientists in this field push the boundaries of human understanding.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '3 Years (B.Sc)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 with Science' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹4-10 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '8% annually' }
    ],

    specializations: [
      {
        name: 'Physics',
        description: 'Study of matter, energy, and fundamental forces',
        careers: ['Physicist', 'Research Scientist', 'Astrophysicist', 'Teacher']
      },
      {
        name: 'Chemistry',
        description: 'Study of substances, their properties, and reactions',
        careers: ['Chemist', 'Pharmaceutical Researcher', 'Materials Scientist']
      },
      {
        name: 'Biology',
        description: 'Study of living organisms and life processes',
        careers: ['Biologist', 'Geneticist', 'Marine Biologist', 'Botanist']
      },
      {
        name: 'Mathematics',
        description: 'Study of numbers, quantities, and shapes',
        careers: ['Mathematician', 'Statistician', 'Actuary', 'Data Analyst']
      }
    ],

    topColleges: [
      { name: 'IISc Bangalore', ranking: '#1', location: 'Bangalore' },
      { name: 'IIT Bombay', ranking: '#2', location: 'Mumbai' },
      { name: 'Delhi University', ranking: '#3', location: 'Delhi' },
      { name: 'JNU', ranking: '#4', location: 'Delhi' }
    ],

    skills: [
      'Analytical Thinking', 'Research Skills', 'Attention to Detail', 
      'Critical Thinking', 'Problem Solving', 'Patience',
      'Data Analysis', 'Laboratory Skills', 'Scientific Writing'
    ],

    careerPaths: [
      {
        role: 'Research Scientist',
        companies: 'ISRO, DRDO, CSIR Labs, Private R&D',
        salary: '₹6-15 LPA'
      },
      {
        role: 'Professor/Lecturer',
        companies: 'Universities, Colleges, Research Institutes',
        salary: '₹5-12 LPA'
      },
      {
        role: 'Scientific Officer',
        companies: 'Government Labs, Environmental Agencies',
        salary: '₹6-10 LPA'
      }
    ],

    resources: [
      { name: 'NPTEL Science Courses', link: '#' },
      { name: 'MIT OpenCourseWare', link: '#' },
      { name: 'Khan Academy Science', link: '#' }
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

      {/* Rest of the sections similar to Medicine.jsx but with Pure Sciences data */}
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
          <h2 className="section-title">Top Colleges in India</h2>
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
          <h2>Ready to Explore Pure Sciences?</h2>
          <p>Take our career assessment to find your perfect science specialization</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default PureSciences;