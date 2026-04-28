import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const ProductDesign = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Product Design',
    subtitle: 'Design, Build, Perfect',
    description: 'Product design combines aesthetics, functionality, and user experience to create products that people love to use.',
    overview: 'Product designers shape the physical and digital products we use every day, from smartphones to furniture to apps.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '3-4 Years' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 (Any Stream)' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹5-15 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '12% annually' }
    ],

    specializations: [
      {
        name: 'Industrial Design',
        description: 'Designing manufactured products',
        careers: ['Industrial Designer', 'Product Engineer', 'Manufacturing Designer']
      },
      {
        name: 'Digital Product Design',
        description: 'Designing apps and software products',
        careers: ['Product Designer', 'UX Designer', 'UI Designer']
      },
      {
        name: 'Sustainable Design',
        description: 'Eco-friendly product development',
        careers: ['Sustainable Designer', 'Circular Design Specialist']
      },
      {
        name: 'Design Strategy',
        description: 'Strategic product planning and innovation',
        careers: ['Design Strategist', 'Innovation Consultant', 'Product Manager']
      }
    ],

    topColleges: [
      { name: 'IIT Bombay IDC', ranking: '#1', location: 'Mumbai' },
      { name: 'NID Ahmedabad', ranking: '#2', location: 'Ahmedabad' },
      { name: 'IIT Delhi', ranking: '#3', location: 'Delhi' },
      { name: 'MIT ID Pune', ranking: '#4', location: 'Pune' }
    ],

    skills: [
      'Design Thinking', 'Prototyping', 'User Research', 
      '3D Modeling', 'Sketching', 'Material Knowledge',
      'Empathy', 'Problem Solving', 'Communication'
    ],

    careerPaths: [
      {
        role: 'Product Designer',
        companies: 'Tech Companies, Design Studios, Startups',
        salary: '₹6-15 LPA'
      },
      {
        role: 'UX Designer',
        companies: 'Google, Amazon, Microsoft, Flipkart',
        salary: '₹8-20 LPA'
      },
      {
        role: 'Design Manager',
        companies: 'Product Companies, Design Agencies',
        salary: '₹15-30 LPA'
      }
    ],

    resources: [
      { name: 'IDEO U', link: '#' },
      { name: 'Coursera Product Design', link: '#' },
      { name: 'UX Collective', link: '#' }
    ]
  };

  return (
    <div className="career-detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/career-streams')}>
          <i className="fas fa-arrow-left"></i> Back to Career Streams
        </button>
      </div>

      <section className="career-hero" style={{background: 'linear-gradient(135deg, #1a73e8, #ff6d00)'}}>
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
          <h2 className="section-title">Top Product Design Colleges</h2>
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

      <section className="cta-section-career" style={{background: 'linear-gradient(135deg, #1a73e8, #ff6d00)'}}>
        <div className="container">
          <h2>Ready to Create Products People Love?</h2>
          <p>Take our career assessment to find your path in product design</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDesign;