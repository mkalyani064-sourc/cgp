import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AssessmentPages.css';

const InterestMapping = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const interestCategories = [
    {
      category: "Creative Arts 🎨",
      interests: [
        { id: 1, name: "Drawing & Painting", icon: "🎨", emoji: "🎨" },
        { id: 2, name: "Photography", icon: "📸", emoji: "📸" },
        { id: 3, name: "Writing Stories", icon: "✍️", emoji: "✍️" },
        { id: 4, name: "Music & Dancing", icon: "🎵", emoji: "🎵" }
      ]
    },
    {
      category: "Technology & Science 💻",
      interests: [
        { id: 5, name: "Coding", icon: "💻", emoji: "💻" },
        { id: 6, name: "Robotics", icon: "🤖", emoji: "🤖" },
        { id: 7, name: "Space & Astronomy", icon: "🚀", emoji: "🚀" },
        { id: 8, name: "Science Experiments", icon: "🔬", emoji: "🔬" }
      ]
    },
    {
      category: "People & Helping 🤝",
      interests: [
        { id: 9, name: "Teaching Others", icon: "👩‍🏫", emoji: "👩‍🏫" },
        { id: 10, name: "Helping People", icon: "🤝", emoji: "🤝" },
        { id: 11, name: "Counseling", icon: "🗣️", emoji: "🗣️" },
        { id: 12, name: "Volunteering", icon: "❤️", emoji: "❤️" }
      ]
    },
    {
      category: "Business & Leadership 📊",
      interests: [
        { id: 13, name: "Starting a Business", icon: "🚀", emoji: "🚀" },
        { id: 14, name: "Leading Teams", icon: "👥", emoji: "👥" },
        { id: 15, name: "Marketing", icon: "📢", emoji: "📢" },
        { id: 16, name: "Finance", icon: "💰", emoji: "💰" }
      ]
    },
    {
      category: "Sports & Adventure 🏃",
      interests: [
        { id: 17, name: "Playing Sports", icon: "⚽", emoji: "⚽" },
        { id: 18, name: "Traveling", icon: "✈️", emoji: "✈️" },
        { id: 19, name: "Fitness", icon: "💪", emoji: "💪" },
        { id: 20, name: "Outdoor Activities", icon: "🏕️", emoji: "🏕️" }
      ]
    }
  ];

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      if (selectedInterests.length < 8) {
        setSelectedInterests([...selectedInterests, interest]);
      }
    }
  };

  const getCareerSuggestions = () => {
    const categories = selectedInterests.map(i => {
      for (let cat of interestCategories) {
        if (cat.interests.some(int => int.id === i.id)) {
          return cat.category;
        }
      }
      return null;
    });

    if (categories.includes("Creative Arts 🎨")) {
      return {
        careers: ["Graphic Designer", "Content Creator", "Artist", "Photographer"],
        courses: ["Digital Art", "Creative Writing", "Visual Design"],
        skills: ["Creativity", "Visual Thinking", "Attention to Detail"]
      };
    }
    if (categories.includes("Technology & Science 💻")) {
      return {
        careers: ["Software Developer", "Data Scientist", "Engineer", "Researcher"],
        courses: ["Programming", "Data Analysis", "Web Development"],
        skills: ["Problem Solving", "Logical Thinking", "Technical Skills"]
      };
    }
    if (categories.includes("People & Helping 🤝")) {
      return {
        careers: ["Teacher", "Counselor", "Social Worker", "HR Professional"],
        courses: ["Psychology", "Communication", "Social Work"],
        skills: ["Empathy", "Communication", "Patience"]
      };
    }
    if (categories.includes("Business & Leadership 📊")) {
      return {
        careers: ["Entrepreneur", "Manager", "Marketing Specialist", "Business Analyst"],
        courses: ["Business Management", "Marketing", "Leadership"],
        skills: ["Leadership", "Strategic Thinking", "Decision Making"]
      };
    }
    if (categories.includes("Sports & Adventure 🏃")) {
      return {
        careers: ["Sports Coach", "Fitness Trainer", "Travel Guide", "Event Manager"],
        courses: ["Sports Science", "Fitness Training", "Event Management"],
        skills: ["Physical Fitness", "Motivation", "Teamwork"]
      };
    }
    return {
      careers: ["Explore Various Fields", "Talk to a Counselor", "Try Different Activities"],
      courses: ["Career Exploration", "Skill Development", "Personality Development"],
      skills: ["Adaptability", "Curiosity", "Open-mindedness"]
    };
  };

  if (showResults) {
    const suggestions = getCareerSuggestions();
    return (
      <div className="assessment-page">
        <div className="results-container">
          <button className="back-btn" onClick={() => setShowResults(false)}>
            <i className="fas fa-arrow-left"></i> Back to Interests
          </button>

          <div className="results-header">
            <div className="result-badge">🌈 Your Interest Profile</div>
            <h1>You Selected {selectedInterests.length} Interests!</h1>
            <div className="selected-interests-badge">
              {selectedInterests.map((interest, i) => (
                <span key={i} className="badge-item">
                  {interest.emoji} {interest.name}
                </span>
              ))}
            </div>
          </div>

          <div className="interest-results-grid">
            <div className="result-card careers">
              <h3>🎯 Recommended Careers</h3>
              <ul>
                {suggestions.careers.map((career, index) => (
                  <li key={index}>
                    <i className="fas fa-briefcase"></i> {career}
                  </li>
                ))}
              </ul>
            </div>

            <div className="result-card courses">
              <h3>📚 Suggested Courses</h3>
              <ul>
                {suggestions.courses.map((course, index) => (
                  <li key={index}>
                    <i className="fas fa-book"></i> {course}
                  </li>
                ))}
              </ul>
            </div>

            <div className="result-card skills">
              <h3>💪 Skills to Develop</h3>
              <ul>
                {suggestions.skills.map((skill, index) => (
                  <li key={index}>
                    <i className="fas fa-star"></i> {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="fun-activities">
            <h3>🎮 Fun Activities to Try</h3>
            <div className="activities-grid">
              <div className="activity-card">
                <span className="activity-emoji">🎨</span>
                <h4>Join a Workshop</h4>
                <p>Hands-on experience in your interest areas</p>
              </div>
              <div className="activity-card">
                <span className="activity-emoji">👥</span>
                <h4>Talk to a Mentor</h4>
                <p>Get real-world insights from professionals</p>
              </div>
              <div className="activity-card">
                <span className="activity-emoji">💼</span>
                <h4>Try an Internship</h4>
                <p>Experience your dream career firsthand</p>
              </div>
            </div>
          </div>

          <div className="results-actions">
            <button className="retake-btn" onClick={() => {
              setSelectedInterests([]);
              setShowResults(false);
            }}>
              <i className="fas fa-redo"></i> Start Over
            </button>
            <button className="download-btn">
              <i className="fas fa-download"></i> Save My Profile
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="assessment-page">
      <div className="interest-container">
        <button className="back-btn" onClick={() => navigate('/assessment')}>
          <i className="fas fa-arrow-left"></i> Back to Stages
        </button>

        <div className="interest-header">
          <h1>🎯 What Gets You Excited?</h1>
          <p>Pick the things you love (choose up to 8)</p>
          <div className="selection-counter">
            <span className="counter">{selectedInterests.length}</span> / 8 selected
          </div>
        </div>

        <div className="interest-categories">
          {interestCategories.map((category, idx) => (
            <div key={idx} className="interest-category">
              <h3>{category.category}</h3>
              <div className="interest-grid">
                {category.interests.map((interest) => (
                  <button
                    key={interest.id}
                    className={`interest-chip ${selectedInterests.includes(interest) ? 'selected' : ''}`}
                    onClick={() => toggleInterest(interest)}
                  >
                    <span className="interest-emoji">{interest.emoji}</span>
                    <span className="interest-name">{interest.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedInterests.length > 0 && (
          <div className="interest-footer">
            <button 
              className="see-results-btn"
              onClick={() => setShowResults(true)}
            >
              See My Results ✨
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterestMapping;