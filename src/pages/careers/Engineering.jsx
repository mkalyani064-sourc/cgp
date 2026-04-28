import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const Engineering = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Engineering',
    subtitle: 'Design, Build, Innovate',
    description: 'Engineering is the application of scientific principles to design, build, and maintain structures, machines, devices, systems, and processes.',
    overview: 'Engineering is one of the most versatile and rewarding career paths. Engineers solve real-world problems and create innovations that shape our future.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '4 Years (B.E./B.Tech)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 with PCM' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹6-12 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '8-10% annually' }
    ],

    specializations: [
      {
        name: 'Computer Science Engineering',
        description: 'Study of computers, programming, and software development',
        careers: ['Software Developer', 'Data Scientist', 'AI Engineer', 'System Architect']
      },
      {
        name: 'Mechanical Engineering',
        description: 'Design and manufacture mechanical systems and machines',
        careers: ['Mechanical Designer', 'Automotive Engineer', 'Production Manager']
      },
      {
        name: 'Electrical Engineering',
        description: 'Work with electrical systems, circuits, and power generation',
        careers: ['Electrical Engineer', 'Power Systems Engineer', 'Electronics Designer']
      },
      {
        name: 'Civil Engineering',
        description: 'Design and construct infrastructure like buildings, bridges, roads',
        careers: ['Structural Engineer', 'Construction Manager', 'Urban Planner']
      }
    ],

    topColleges: [
      { name: 'IIT Bombay', ranking: '#1', location: 'Mumbai' },
      { name: 'IIT Delhi', ranking: '#2', location: 'Delhi' },
      { name: 'IIT Madras', ranking: '#3', location: 'Chennai' },
      { name: 'BITS Pilani', ranking: '#4', location: 'Pilani' }
    ],

    skills: [
      'Problem Solving', 'Critical Thinking', 'Mathematics', 
      'Programming', 'Design Thinking', 'Project Management',
      'Communication', 'Teamwork', 'Innovation'
    ],

    careerPaths: [
      {
        role: 'Software Engineer',
        companies: 'Google, Microsoft, Amazon, TCS',
        salary: '₹8-25 LPA'
      },
      {
        role: 'Data Scientist',
        companies: 'Facebook, Uber, Flipkart',
        salary: '₹10-30 LPA'
      },
      {
        role: 'Product Manager',
        companies: 'Startups, MNCs, Tech Companies',
        salary: '₹12-35 LPA'
      }
    ],

    resources: [
      { name: 'NPTEL Engineering Courses', link: '#' },
      { name: 'Coursera Engineering Specializations', link: '#' },
      { name: 'edX Engineering Programs', link: '#' }
    ]
  };

  return (
    <div className="career-detail-page">
      {/* Back Button */}
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/career-streams')}>
          <i className="fas fa-arrow-left"></i> Back to Career Streams
        </button>
      </div>

      {/* Hero Section */}
      <section className="career-hero" style={{background: 'linear-gradient(135deg, #1a73e8, #00c853)'}}>
        <div className="container">
          <h1>{careerData.title}</h1>
          <p className="hero-subtitle">{careerData.subtitle}</p>
          <p className="hero-description">{careerData.description}</p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid">
            {careerData.keyHighlights.map((item, index) => (
              <div key={index} className="highlight-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <i className={`fas ${item.icon}`}></i>
                <div className="highlight-content">
                  <span className="highlight-label">{item.label}</span>
                  <span className="highlight-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview-section">
        <div className="container">
          <h2 className="section-title">Overview</h2>
          <p className="overview-text">{careerData.overview}</p>
        </div>
      </section>

      {/* Specializations */}
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

      {/* Skills Required */}
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

      {/* Top Colleges */}
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

      {/* Career Paths */}
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

      {/* Resources */}
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

      {/* CTA Section */}
      <section className="cta-section-career" style={{background: 'linear-gradient(135deg, #1a73e8, #00c853)'}}>
        <div className="container">
          <h2>Ready to Start Your Engineering Journey?</h2>
          <p>Take our career assessment to find the perfect engineering specialization for you</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Engineering;