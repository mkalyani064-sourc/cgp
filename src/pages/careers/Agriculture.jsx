import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const Agriculture = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Agriculture & Forestry',
    subtitle: 'Grow, Sustain, Preserve',
    description: 'Agriculture and Forestry involve the science and art of cultivating plants, raising livestock, and managing forest resources sustainably.',
    overview: 'Agriculture is the backbone of Indian economy. With growing focus on sustainability and food security, this field offers immense opportunities.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '4 Years (B.Sc Agri)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 with Science' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹4-8 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '10% annually' }
    ],

    specializations: [
      {
        name: 'Agronomy',
        description: 'Study of crops and soil management',
        careers: ['Agronomist', 'Crop Consultant', 'Farm Manager']
      },
      {
        name: 'Horticulture',
        description: 'Cultivation of fruits, vegetables, and ornamental plants',
        careers: ['Horticulturist', 'Gardening Expert', 'Greenhouse Manager']
      },
      {
        name: 'Forestry',
        description: 'Management of forests and natural resources',
        careers: ['Forester', 'Wildlife Conservationist', 'Environmental Consultant']
      },
      {
        name: 'Agricultural Engineering',
        description: 'Design of farm machinery and irrigation systems',
        careers: ['Agricultural Engineer', 'Irrigation Specialist', 'Farm Equipment Designer']
      }
    ],

    topColleges: [
      { name: 'IARI New Delhi', ranking: '#1', location: 'New Delhi' },
      { name: 'PAU Ludhiana', ranking: '#2', location: 'Ludhiana' },
      { name: 'GBPUAT Pantnagar', ranking: '#3', location: 'Uttarakhand' },
      { name: 'ANGRAU', ranking: '#4', location: 'Hyderabad' }
    ],

    skills: [
      'Practical Farming Knowledge', 'Research Skills', 'Business Management',
      'Environmental Awareness', 'Problem Solving', 'Patience',
      'Technical Skills', 'Communication', 'Sustainability Mindset'
    ],

    careerPaths: [
      {
        role: 'Agricultural Officer',
        companies: 'Government Departments, Banks, NGOs',
        salary: '₹5-8 LPA'
      },
      {
        role: 'Farm Manager',
        companies: 'Corporate Farms, Agricultural Companies',
        salary: '₹4-7 LPA'
      },
      {
        role: 'Agri-Business Entrepreneur',
        companies: 'Self-Employed, Startups',
        salary: '₹3-15 LPA (Variable)'
      }
    ],

    resources: [
      { name: 'ICAR e-Courses', link: '#' },
      { name: 'Krishi Jagran', link: '#' },
      { name: 'Agriculture Courses on Coursera', link: '#' }
    ]
  };

  return (
    <div className="career-detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/career-streams')}>
          <i className="fas fa-arrow-left"></i> Back to Career Streams
        </button>
      </div>

      <section className="career-hero" style={{background: 'linear-gradient(135deg, #00c853, #1a73e8)'}}>
        <div className="container">
          <h1>{careerData.title}</h1>
          <p className="hero-subtitle">{careerData.subtitle}</p>
          <p className="hero-description">{careerData.description}</p>
        </div>
      </section>

      {/* Rest of sections using the same pattern as above */}
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
          <h2 className="section-title">Top Agricultural Colleges in India</h2>
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

      <section className="cta-section-career" style={{background: 'linear-gradient(135deg, #00c853, #1a73e8)'}}>
        <div className="container">
          <h2>Ready to Grow with Agriculture?</h2>
          <p>Take our career assessment to find your path in agriculture</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Agriculture;