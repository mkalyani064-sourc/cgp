import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const Software = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Software Development',
    subtitle: 'Code, Create, Innovate',
    description: 'Software development involves designing, coding, testing, and maintaining applications and systems.',
    overview: 'Software developers are the architects of the digital world. They create everything from mobile apps to complex enterprise systems.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '4 Years (B.Tech/BE)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 with PCM' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹6-25 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '22% annually' }
    ],

    specializations: [
      {
        name: 'Frontend Development',
        description: 'Building user interfaces and experiences',
        careers: ['Frontend Developer', 'UI Developer', 'Web Designer']
      },
      {
        name: 'Backend Development',
        description: 'Server-side logic and databases',
        careers: ['Backend Developer', 'API Developer', 'System Architect']
      },
      {
        name: 'Mobile Development',
        description: 'Creating iOS and Android applications',
        careers: ['iOS Developer', 'Android Developer', 'React Native Developer']
      },
      {
        name: 'DevOps',
        description: 'Combining development and operations',
        careers: ['DevOps Engineer', 'Cloud Architect', 'Site Reliability Engineer']
      }
    ],

    topColleges: [
      { name: 'IIT Bombay', ranking: '#1', location: 'Mumbai' },
      { name: 'IIT Delhi', ranking: '#2', location: 'Delhi' },
      { name: 'IIIT Hyderabad', ranking: '#3', location: 'Hyderabad' },
      { name: 'BITS Pilani', ranking: '#4', location: 'Pilani' }
    ],

    skills: [
      'Programming', 'Problem Solving', 'Logical Thinking', 
      'Algorithms', 'Data Structures', 'Teamwork',
      'Version Control', 'Debugging', 'Continuous Learning'
    ],

    careerPaths: [
      {
        role: 'Software Engineer',
        companies: 'Google, Microsoft, Amazon, Startups',
        salary: '₹8-25 LPA'
      },
      {
        role: 'Full Stack Developer',
        companies: 'Tech Companies, Product Firms',
        salary: '₹10-30 LPA'
      },
      {
        role: 'Tech Lead',
        companies: 'MNCs, Product Companies',
        salary: '₹20-45 LPA'
      }
    ],

    resources: [
      { name: 'GitHub', link: '#' },
      { name: 'Stack Overflow', link: '#' },
      { name: 'Coursera Programming Courses', link: '#' }
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
          <h2 className="section-title">Top Engineering Colleges</h2>
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
          <h2>Ready to Start Coding?</h2>
          <p>Take our career assessment to find your perfect tech role</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Software;