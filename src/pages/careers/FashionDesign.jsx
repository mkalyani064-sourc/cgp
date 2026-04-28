import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const FashionDesign = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Fashion Design',
    subtitle: 'Design, Style, Inspire',
    description: 'Fashion design is the art of creating clothing, accessories, and footwear that are both functional and aesthetically pleasing.',
    overview: 'Fashion designers bring creative visions to life, influencing trends and shaping how people express themselves through clothing.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '3-4 Years' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 (Any Stream)' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹4-15 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '8% annually' }
    ],

    specializations: [
      {
        name: 'Apparel Design',
        description: 'Designing clothing and garments',
        careers: ['Apparel Designer', 'Garment Technologist', 'Fashion Illustrator']
      },
      {
        name: 'Accessory Design',
        description: 'Creating bags, shoes, and jewelry',
        careers: ['Accessory Designer', 'Footwear Designer', 'Jewelry Designer']
      },
      {
        name: 'Textile Design',
        description: 'Designing fabrics and patterns',
        careers: ['Textile Designer', 'Print Designer', 'Fabric Developer']
      },
      {
        name: 'Fashion Styling',
        description: 'Creating looks for photoshoots and events',
        careers: ['Fashion Stylist', 'Personal Shopper', 'Image Consultant']
      }
    ],

    topColleges: [
      { name: 'NIFT Delhi', ranking: '#1', location: 'Delhi' },
      { name: 'NIFT Mumbai', ranking: '#2', location: 'Mumbai' },
      { name: 'Pearl Academy', ranking: '#3', location: 'Delhi' },
      { name: 'Symbiosis Pune', ranking: '#4', location: 'Pune' }
    ],

    skills: [
      'Creativity', 'Sketching', 'Pattern Making', 
      'Sewing', 'Fabric Knowledge', 'Trend Forecasting',
      'Color Theory', 'Communication', 'Business Acumen'
    ],

    careerPaths: [
      {
        role: 'Fashion Designer',
        companies: 'Design Houses, Brands, Self-Employed',
        salary: '₹4-12 LPA'
      },
      {
        role: 'Fashion Stylist',
        companies: 'Magazines, Celebrities, Production Houses',
        salary: '₹5-15 LPA'
      },
      {
        role: 'Textile Designer',
        companies: 'Fabric Mills, Home Furnishing Companies',
        salary: '₹4-8 LPA'
      }
    ],

    resources: [
      { name: 'Vogue Business', link: '#' },
      { name: 'Skillshare Fashion', link: '#' },
      { name: 'Business of Fashion', link: '#' }
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
          <h2 className="section-title">Top Fashion Colleges</h2>
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
          <h2>Ready to Make Your Mark in Fashion?</h2>
          <p>Take our career assessment to find your path in fashion design</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default FashionDesign;