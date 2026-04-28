import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const Literature = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Literature & Languages',
    subtitle: 'Read, Write, Express',
    description: 'Literature involves the study of written works, language, and the art of expression through words.',
    overview: 'Literature opens doors to understanding human experience, culture, and society. It develops critical thinking and communication skills.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '3 Years (BA)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 (Any Stream)' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹3-8 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '7% annually' }
    ],

    specializations: [
      {
        name: 'English Literature',
        description: 'Study of English literary works and criticism',
        careers: ['Professor', 'Writer', 'Editor', 'Critic']
      },
      {
        name: 'Journalism',
        description: 'Writing and reporting for media',
        careers: ['Journalist', 'Content Writer', 'Reporter', 'Editor']
      },
      {
        name: 'Creative Writing',
        description: 'Writing fiction, poetry, and creative non-fiction',
        careers: ['Author', 'Poet', 'Screenwriter', 'Content Creator']
      },
      {
        name: 'Linguistics',
        description: 'Scientific study of language',
        careers: ['Linguist', 'Translator', 'Language Teacher']
      }
    ],

    topColleges: [
      { name: 'Delhi University', ranking: '#1', location: 'Delhi' },
      { name: 'JNU', ranking: '#2', location: 'Delhi' },
      { name: 'Presidency College', ranking: '#3', location: 'Kolkata' },
      { name: 'St. Stephen\'s', ranking: '#4', location: 'Delhi' }
    ],

    skills: [
      'Writing', 'Critical Thinking', 'Research', 
      'Communication', 'Creativity', 'Empathy',
      'Analysis', 'Attention to Detail', 'Cultural Awareness'
    ],

    careerPaths: [
      {
        role: 'Content Writer',
        companies: 'Media Houses, Digital Agencies, Corporates',
        salary: '₹3-7 LPA'
      },
      {
        role: 'Editor',
        companies: 'Publishing Houses, News Organizations',
        salary: '₹4-9 LPA'
      },
      {
        role: 'Academic/Professor',
        companies: 'Universities, Colleges, Research Institutes',
        salary: '₹5-12 LPA'
      }
    ],

    resources: [
      { name: 'Project Gutenberg', link: '#' },
      { name: 'Coursera Literature Courses', link: '#' },
      { name: 'The Writing University', link: '#' }
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
          <h2 className="section-title">Top Colleges for Literature</h2>
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
          <h2>Ready to Express Yourself?</h2>
          <p>Take our career assessment to find your path in literature</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Literature;