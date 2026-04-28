import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerDetail.css';

const Medicine = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careerData = {
    title: 'Medicine & Healthcare',
    subtitle: 'Heal, Care, Innovate',
    description: 'Medicine is the science and practice of caring for patients, diagnosing and treating diseases, injuries, and other physical and mental impairments.',
    overview: 'Healthcare is one of the most noble and rewarding professions. Medical professionals save lives, improve quality of life, and contribute to the wellbeing of society.',
    
    keyHighlights: [
      { icon: 'fa-clock', label: 'Duration', value: '5.5 Years (MBBS)' },
      { icon: 'fa-graduation-cap', label: 'Eligibility', value: '10+2 with PCB' },
      { icon: 'fa-rupee-sign', label: 'Avg. Salary', value: '₹8-20 LPA' },
      { icon: 'fa-briefcase', label: 'Job Growth', value: '15% annually' }
    ],

    specializations: [
      {
        name: 'Cardiology',
        description: 'Study and treatment of heart disorders',
        careers: ['Cardiologist', 'Cardiac Surgeon', 'Interventional Cardiologist']
      },
      {
        name: 'Neurology',
        description: 'Diagnosis and treatment of nervous system disorders',
        careers: ['Neurologist', 'Neurosurgeon', 'Clinical Neurologist']
      },
      {
        name: 'Pediatrics',
        description: 'Medical care of infants, children, and adolescents',
        careers: ['Pediatrician', 'Neonatologist', 'Child Specialist']
      },
      {
        name: 'Orthopedics',
        description: 'Treatment of musculoskeletal system',
        careers: ['Orthopedic Surgeon', 'Sports Medicine Doctor', 'Joint Replacement Specialist']
      }
    ],

    topColleges: [
      { name: 'AIIMS Delhi', ranking: '#1', location: 'New Delhi' },
      { name: 'CMC Vellore', ranking: '#2', location: 'Vellore' },
      { name: 'JIPMER', ranking: '#3', location: 'Puducherry' },
      { name: 'KEM Hospital', ranking: '#4', location: 'Mumbai' }
    ],

    skills: [
      'Empathy', 'Communication', 'Attention to Detail', 
      'Problem Solving', 'Patience', 'Teamwork',
      'Stress Management', 'Continuous Learning', 'Ethical Judgment'
    ],

    careerPaths: [
      {
        role: 'Doctor (MBBS)',
        companies: 'Government Hospitals, Private Hospitals, Clinics',
        salary: '₹8-15 LPA'
      },
      {
        role: 'Specialist Surgeon',
        companies: 'Super-specialty Hospitals, Research Centers',
        salary: '₹15-40 LPA'
      },
      {
        role: 'Medical Researcher',
        companies: 'Research Institutes, Pharma Companies',
        salary: '₹10-25 LPA'
      }
    ],

    resources: [
      { name: 'NEET Preparation Guide', link: '#' },
      { name: 'Khan Academy Medicine', link: '#' },
      { name: 'Coursera Medical Courses', link: '#' }
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
          <h2 className="section-title">Top Medical Colleges in India</h2>
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
          <h2>Ready to Start Your Medical Journey?</h2>
          <p>Take our career assessment to find the perfect medical specialization for you</p>
          <button className="cta-btn-career" onClick={() => navigate('/assessment')}>
            Take Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Medicine;