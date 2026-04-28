import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const Sociology = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Sociology & Social Work',
    subtitle: 'Understand, Connect, Transform',
    description: 'Sociology studies social behavior, relationships, and institutions. Social work applies this knowledge to help individuals and communities.',
    overview: 'Sociology and social work focus on understanding social problems and finding solutions to improve people\'s lives and communities.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '3 Years (BA/BSW)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 (Any Stream)' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹3-8 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '11% annually' }
    ],

    specializations: [
      {
        name: 'Medical Social Work',
        description: 'Supporting patients and families in healthcare settings',
        careers: ['Medical Social Worker', 'Hospital Counselor', 'Patient Advocate']
      },
      {
        name: 'Community Development',
        description: 'Working with communities for social change',
        careers: ['Community Organizer', 'NGO Worker', 'Development Officer']
      },
      {
        name: 'Criminology',
        description: 'Study of crime and criminal behavior',
        careers: ['Criminologist', 'Correctional Counselor', 'Police Researcher']
      },
      {
        name: 'Urban Sociology',
        description: 'Study of cities and urban life',
        careers: ['Urban Planner', 'Policy Analyst', 'Housing Specialist']
      }
    ],

    topColleges: [
      { name: 'TISS Mumbai', ranking: '#1', location: 'Mumbai' },
      { name: 'Delhi School of Economics', ranking: '#2', location: 'Delhi' },
      { name: 'JNU', ranking: '#3', location: 'Delhi' },
      { name: 'Madras School of Social Work', ranking: '#4', location: 'Chennai' }
    ],

    skills: [
      'Empathy', 'Communication', 'Cultural Competence', 
      'Problem Solving', 'Advocacy', 'Active Listening',
      'Research Skills', 'Crisis Intervention', 'Patience'
    ],

    careerPaths: [
      {
        role: 'Social Worker',
        companies: 'NGOs, Government Agencies, Hospitals',
        salary: '₹3-6 LPA'
      },
      {
        role: 'Policy Analyst',
        companies: 'Research Institutes, Government, Think Tanks',
        salary: '₹4-8 LPA'
      },
      {
        role: 'Community Organizer',
        companies: 'Non-Profits, Community Organizations',
        salary: '₹3-5 LPA'
      }
    ],

    resources: [
      { name: 'National Association of Social Workers', link: '#' },
      { name: 'Coursera Sociology Courses', link: '#' },
      { name: 'Social Work Today Magazine', link: '#' }
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
          <h2 className="section-title">Top Social Work Colleges</h2>
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
          <h2>Ready to Make a Difference?</h2>
          <p>Take our career assessment to find your path in social work</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sociology;