import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AssessmentPages.css';

const PersonalityAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "🎉 You're at a party! What's your vibe?",
      options: [
        { text: "Life of the party! Talking to everyone 🗣️", trait: "extrovert", score: 5 },
        { text: "Hanging with a small group of friends 👥", trait: "ambivert", score: 3 },
        { text: "Found a cozy corner with one good friend 🛋️", trait: "introvert", score: 1 },
        { text: "Why did I even come here? 🏃", trait: "introvert", score: 0 }
      ],
      icon: "🎉"
    },
    {
      id: 2,
      question: "📚 It's Sunday morning. What are you doing?",
      options: [
        { text: "Planning my entire week ahead 📅", trait: "organized", score: 5 },
        { text: "Reading a book with coffee ☕", trait: "thoughtful", score: 4 },
        { text: "Still sleeping... zzz 😴", trait: "relaxed", score: 2 },
        { text: "Already at the gym! 💪", trait: "active", score: 3 }
      ],
      icon: "📚"
    },
    {
      id: 3,
      question: "🤔 Your friend is upset. You...",
      options: [
        { text: "Give them a huge hug! 🫂", trait: "empathetic", score: 5 },
        { text: "Listen and offer advice 🎧", trait: "supportive", score: 4 },
        { text: "Take them out to cheer them up 🎬", trait: "energetic", score: 3 },
        { text: "Give them space to process 🌿", trait: "respectful", score: 2 }
      ],
      icon: "🤔"
    },
    {
      id: 4,
      question: "💼 At work/school, you're known for...",
      options: [
        { text: "Leading the team and making decisions 👑", trait: "leader", score: 5 },
        { text: "Coming up with creative ideas 💡", trait: "creative", score: 4 },
        { text: "Being super organized and detailed 📋", trait: "detail-oriented", score: 4 },
        { text: "Keeping everyone positive and motivated 🌟", trait: "motivator", score: 3 }
      ],
      icon: "💼"
    },
    {
      id: 5,
      question: "🎮 How do you solve problems?",
      options: [
        { text: "Make a pros & cons list immediately 📊", trait: "analytical", score: 5 },
        { text: "Talk it out with someone 🗣️", trait: "collaborative", score: 4 },
        { text: "Trust my gut feeling ✨", trait: "intuitive", score: 3 },
        { text: "Research every possible solution 🔍", trait: "thorough", score: 4 }
      ],
      icon: "🎮"
    }
  ];

  const handleAnswer = (option) => {
    setAnswers({
      ...answers,
      [currentQuestion]: option
    });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    setShowResults(true);
  };

  const getPersonalityType = () => {
    const traits = Object.values(answers).map(a => a.trait);

    if (traits.includes('extrovert') && traits.includes('leader')) {
      return {
        type: "The Natural Leader 🌟",
        description: "You're outgoing, confident, and people naturally look up to you! You thrive in roles where you can guide and inspire others.",
        careers: ["Team Leader", "Project Manager", "Entrepreneur", "Public Speaker"],
        strengths: ["Leadership", "Communication", "Confidence", "Motivation"]
      };
    } else if (traits.includes('creative') && traits.includes('intuitive')) {
      return {
        type: "The Creative Visionary 🎨",
        description: "You see the world differently and love expressing yourself! Your imagination is your superpower.",
        careers: ["Graphic Designer", "Content Creator", "Artist", "Marketing Specialist"],
        strengths: ["Creativity", "Originality", "Empathy", "Adaptability"]
      };
    } else if (traits.includes('analytical') && traits.includes('detail-oriented')) {
      return {
        type: "The Logical Thinker 🔍",
        description: "You love solving puzzles and figuring out how things work. Details matter to you!",
        careers: ["Data Analyst", "Engineer", "Researcher", "Accountant"],
        strengths: ["Analysis", "Problem-solving", "Precision", "Critical thinking"]
      };
    } else if (traits.includes('empathetic') && traits.includes('supportive')) {
      return {
        type: "The Caring Helper 💝",
        description: "You're always there for others and love making a difference in people's lives.",
        careers: ["Counselor", "Teacher", "Healthcare Worker", "Social Worker"],
        strengths: ["Empathy", "Patience", "Communication", "Kindness"]
      };
    } else {
      return {
        type: "The Balanced All-Rounder ⚖️",
        description: "You're flexible and adapt well to different situations! You have a bit of everything.",
        careers: ["Business Analyst", "Consultant", "Coordinator", "Entrepreneur"],
        strengths: ["Adaptability", "Versatility", "Balance", "Practical thinking"]
      };
    }
  };

  if (showResults) {
    const result = getPersonalityType();
    return (
      <div className="assessment-page">
        <div className="results-container">
          <button className="back-btn" onClick={() => navigate('/assessment')}>
            <i className="fas fa-arrow-left"></i> Back to Stages
          </button>

          <div className="results-header">
            <div className="result-badge">🎉 Your Results Are Ready!</div>
            <h1>{result.type}</h1>
            <p className="result-description">{result.description}</p>
          </div>

          <div className="results-grid">
            <div className="result-card strengths">
              <h3>✨ Your Superpowers</h3>
              <ul>
                {result.strengths.map((strength, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle"></i> {strength}
                  </li>
                ))}
              </ul>
            </div>

            <div className="result-card careers">
              <h3>🎯 Perfect Careers For You</h3>
              <ul>
                {result.careers.map((career, index) => (
                  <li key={index}>
                    <i className="fas fa-briefcase"></i> {career}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="suggestions-section">
            <h3>💡 Suggested Next Steps</h3>
            <div className="suggestions-grid">
              <div className="suggestion-card">
                <i className="fas fa-book-open"></i>
                <h4>Explore Careers</h4>
                <p>Learn more about careers that match your personality</p>
                <button className="suggestion-btn">Explore Now →</button>
              </div>
              <div className="suggestion-card">
                <i className="fas fa-user-tie"></i>
                <h4>Talk to a Counselor</h4>
                <p>Get personalized advice from our experts</p>
                <button className="suggestion-btn" onClick={() => navigate('/assessment')}>Start Assessment →</button>
              </div>
              <div className="suggestion-card">
                <i className="fas fa-graduation-cap"></i>
                <h4>Find Courses</h4>
                <p>Discover courses to build your skills</p>
                <button className="suggestion-btn">Find Courses →</button>
              </div>
            </div>
          </div>

          <div className="results-actions">
            <button className="retake-btn" onClick={() => {
              setAnswers({});
              setCurrentQuestion(0);
              setShowResults(false);
            }}>
              <i className="fas fa-redo"></i> Retake Assessment
            </button>
            <button className="download-btn">
              <i className="fas fa-download"></i> Download Report
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="assessment-page">
      <div className="assessment-container">
        <button className="back-btn" onClick={() => navigate('/assessment')}>
          <i className="fas fa-arrow-left"></i> Back to Stages
        </button>

        <div className="fun-header">
          <span className="question-icon">{questions[currentQuestion].icon}</span>
          <h1>Personality Adventure</h1>
          <p>Let's discover what makes you, YOU! 🎯</p>
          <div className="progress-fun">
            <div className="progress-bar-fun">
              <div
                className="progress-fill"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <span className="question-count-fun">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
        </div>

        <div className="fun-question-card">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="fun-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="fun-option-btn"
                onClick={() => handleAnswer(option)}
              >
                <span className="option-emoji">{option.text.split(' ')[0]}</span>
                <span className="option-text">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityAssessment;