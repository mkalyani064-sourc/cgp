import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const GraphicDesign = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Graphic Design',
    subtitle: 'Create, Visualize, Communicate',
    description: 'Graphic design combines art and technology to communicate ideas through visual content.',
    overview: 'Graphic designers create visual concepts that inspire, inform, and captivate consumers. They work on branding, advertising, digital media, and more.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '3-4 Years' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 (Any Stream)' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹4-12 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '12% annually' }
    ],

    specializations: [
      {
        name: 'Brand Identity',
        description: 'Creating logos and brand guidelines',
        careers: ['Brand Designer', 'Logo Designer', 'Visual Identity Specialist']
      },
      {
        name: 'UI/UX Design',
        description: 'Designing user interfaces and experiences',
        careers: ['UI Designer', 'UX Designer', 'Product Designer']
      },
      {
        name: 'Print Design',
        description: 'Designing for print media',
        careers: ['Print Designer', 'Packaging Designer', 'Publication Designer']
      },
      {
        name: 'Motion Graphics',
        description: 'Creating animated visual content',
        careers: ['Motion Designer', 'Animator', 'Video Editor']
      }
    ],

    topColleges: [
      { name: 'NID Ahmedabad', ranking: '#1', location: 'Ahmedabad' },
      { name: 'NIFT Delhi', ranking: '#2', location: 'Delhi' },
      { name: 'MIT ID Pune', ranking: '#3', location: 'Pune' },
      { name: 'Srishti Bangalore', ranking: '#4', location: 'Bangalore' }
    ],

    skills: [
      'Adobe Creative Suite', 'Typography', 'Color Theory', 
      'Creativity', 'Communication', 'Attention to Detail',
      'Layout Design', 'Digital Illustration', 'Branding'
    ],

    careerPaths: [
      {
        role: 'Graphic Designer',
        companies: 'Agencies, Studios, Corporate',
        salary: '₹4-8 LPA'
      },
      {
        role: 'UI/UX Designer',
        companies: 'Tech Companies, Startups',
        salary: '₹6-15 LPA'
      },
      {
        role: 'Creative Director',
        companies: 'Advertising Agencies, Design Studios',
        salary: '₹12-25 LPA'
      }
    ],

    resources: [
      { name: 'Behance', link: '#' },
      { name: 'Skillshare Design', link: '#' },
      { name: 'Adobe Creative Cloud', link: '#' }
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
          <h2 className="section-title">Top Design Colleges</h2>
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
          <h2>Ready to Create Something Beautiful?</h2>
          <p>Take our career assessment to find your path in design</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesign;