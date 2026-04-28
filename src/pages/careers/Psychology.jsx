import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const Psychology = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Psychology',
    subtitle: 'Understand, Heal, Empower',
    description: 'Psychology is the scientific study of mind, behavior, and mental processes.',
    overview: 'Psychology helps us understand why people think, feel, and act the way they do. It offers rewarding careers in mental health, research, and organizational settings.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '3 Years (BA/B.Sc)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 (Any Stream)' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹4-10 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '14% annually' }
    ],

    specializations: [
      {
        name: 'Clinical Psychology',
        description: 'Assessment and treatment of mental health disorders',
        careers: ['Clinical Psychologist', 'Therapist', 'Counselor']
      },
      {
        name: 'Counseling Psychology',
        description: 'Helping people cope with life challenges',
        careers: ['School Counselor', 'Career Counselor', 'Mental Health Counselor']
      },
      {
        name: 'Industrial-Organizational Psychology',
        description: 'Applying psychology in workplace settings',
        careers: ['HR Specialist', 'Organizational Consultant', 'Training Manager']
      },
      {
        name: 'Child Psychology',
        description: 'Understanding child development and behavior',
        careers: ['Child Psychologist', 'Pediatric Counselor', 'School Psychologist']
      }
    ],

    topColleges: [
      { name: 'Delhi University', ranking: '#1', location: 'Delhi' },
      { name: 'Christ University', ranking: '#2', location: 'Bangalore' },
      { name: 'TISS Mumbai', ranking: '#3', location: 'Mumbai' },
      { name: 'JMI Delhi', ranking: '#4', location: 'Delhi' }
    ],

    skills: [
      'Empathy', 'Active Listening', 'Patience', 
      'Critical Thinking', 'Communication', 'Ethical Judgment',
      'Research Skills', 'Observation', 'Problem Solving'
    ],

    careerPaths: [
      {
        role: 'Clinical Psychologist',
        companies: 'Hospitals, Mental Health Clinics, Private Practice',
        salary: '₹5-12 LPA'
      },
      {
        role: 'Counselor',
        companies: 'Schools, Colleges, NGOs, Corporate',
        salary: '₹4-8 LPA'
      },
      {
        role: 'HR Specialist',
        companies: 'Corporates, IT Companies, Consulting Firms',
        salary: '₹5-10 LPA'
      }
    ],

    resources: [
      { name: 'American Psychological Association', link: '#' },
      { name: 'Coursera Psychology Courses', link: '#' },
      { name: 'Simply Psychology', link: '#' }
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
          <h2 className="section-title">Top Psychology Colleges</h2>
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
          <h2>Ready to Understand the Human Mind?</h2>
          <p>Take our career assessment to find your path in psychology</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Psychology;