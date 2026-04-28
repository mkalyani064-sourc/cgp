import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AssessmentPages.css';

const AptitudeTesting = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Sections data
  const sections = [
    {
      title: 'Numerical Reasoning',
      icon: 'fa-calculator',
      time: '10 mins',
      color: '#1a73e8',
      lightColor: '#e8f0fe',
      description: 'Test your ability to work with numbers and solve mathematical problems',
      questions: [
        {
          id: 1,
          question: "What is 15% of 200?",
          options: ["20", "25", "30", "35"],
          correct: 2
        },
        {
          id: 2,
          question: "If a shirt costs ₹800 and is on 20% discount, what's the final price?",
          options: ["₹640", "₹660", "₹680", "₹700"],
          correct: 0
        },
        {
          id: 3,
          question: "What comes next in the sequence: 2, 6, 12, 20, ?",
          options: ["28", "30", "32", "36"],
          correct: 1
        },
        {
          id: 4,
          question: "If you earn ₹50,000 per month and save 25%, how much do you save?",
          options: ["₹10,000", "₹12,500", "₹15,000", "₹17,500"],
          correct: 1
        }
      ]
    },
    {
      title: 'Verbal Reasoning',
      icon: 'fa-book',
      time: '8 mins',
      color: '#00c853',
      lightColor: '#e8f5e9',
      description: 'Evaluate your language comprehension and verbal skills',
      questions: [
        {
          id: 1,
          question: "Which word is the odd one out?",
          options: ["Happy", "Joyful", "Sad", "Elated"],
          correct: 2
        },
        {
          id: 2,
          question: "Complete the analogy: Book is to Reading as Pen is to _____",
          options: ["Writing", "Paper", "Ink", "Drawing"],
          correct: 0
        },
        {
          id: 3,
          question: "Choose the correct spelling:",
          options: ["Accommodate", "Acommodate", "Accommodate", "Acomodate"],
          correct: 0
        },
        {
          id: 4,
          question: "Select the most appropriate word: She was _____ of her achievements.",
          options: ["Proud", "Pride", "Proudly", "Prideful"],
          correct: 0
        }
      ]
    },
    {
      title: 'Logical Reasoning',
      icon: 'fa-puzzle-piece',
      time: '12 mins',
      color: '#1a73e8',
      lightColor: '#e8f0fe',
      description: 'Assess your problem-solving and logical thinking abilities',
      questions: [
        {
          id: 1,
          question: "If all cats are mammals, and some pets are cats, then:",
          options: [
            "All pets are mammals",
            "Some pets are mammals",
            "No pets are mammals",
            "All mammals are pets"
          ],
          correct: 1
        },
        {
          id: 2,
          question: "Which number should replace the question mark? 3, 6, 11, 18, ?",
          options: ["25", "27", "29", "31"],
          correct: 1
        },
        {
          id: 3,
          question: "If today is Monday, what day will it be in 100 days?",
          options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
          correct: 1
        },
        {
          id: 4,
          question: "A is B's sister. C is B's mother. D is C's father. How is A related to D?",
          options: ["Granddaughter", "Daughter", "Niece", "Cousin"],
          correct: 0
        }
      ]
    },
    {
      title: 'Spatial Reasoning',
      icon: 'fa-cubes',
      time: '8 mins',
      color: '#00c853',
      lightColor: '#e8f5e9',
      description: 'Measure your visual and spatial intelligence',
      questions: [
        {
          id: 1,
          question: "Which shape would you get if you fold a square diagonally?",
          options: ["Rectangle", "Triangle", "Circle", "Square"],
          correct: 1
        },
        {
          id: 2,
          question: "How many faces does a cube have?",
          options: ["4", "6", "8", "12"],
          correct: 1
        },
        {
          id: 3,
          question: "If you rotate a clock 90 degrees clockwise, where does the 12 point?",
          options: ["3 o'clock", "6 o'clock", "9 o'clock", "12 o'clock"],
          correct: 0
        },
        {
          id: 4,
          question: "Which net can be folded to make a cube?",
          options: ["Cross shape", "T shape", "L shape", "Line of 4"],
          correct: 0
        }
      ]
    }
  ];

  const currentSectionData = sections[currentSection];
  const currentQuestionData = currentSectionData.questions[currentQuestion];
  
  const totalQuestions = sections.reduce((acc, sec) => acc + sec.questions.length, 0);
  const questionsDone = sections.slice(0, currentSection).reduce((acc, sec) => acc + sec.questions.length, 0) + currentQuestion + 1;
  const progress = (questionsDone / totalQuestions) * 100;

  const handleAnswer = (optionIndex) => {
    setAnswers({
      ...answers,
      [`${currentSection}-${currentQuestion}`]: optionIndex
    });

    if (currentQuestion < currentSectionData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentQuestion(sections[currentSection - 1].questions.length - 1);
    }
  };

  const getOptionLabel = (index) => {
    return String.fromCharCode(65 + index); // A, B, C, D
  };

  if (showResults) {
    return (
      <div className="assessment-page">
        <div className="results-container">
          <button className="back-btn" onClick={() => navigate('/assessment')}>
            <i className="fas fa-arrow-left"></i> Back to Stages
          </button>
          <div className="results-header">
            <div className="result-badge">🎉 Test Complete!</div>
            <h1>Great Job!</h1>
            <p>Your aptitude test results are ready</p>
          </div>
          <div className="results-actions">
            <button className="retake-btn" onClick={() => {
              setCurrentSection(0);
              setCurrentQuestion(0);
              setAnswers({});
              setShowResults(false);
            }}>
              <i className="fas fa-redo"></i> Retake Test
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
      <div className="aptitude-container">
        {/* Header */}
        <button className="back-btn" onClick={() => navigate('/assessment')}>
          <i className="fas fa-arrow-left"></i> Back to Stages
        </button>

        <div className="aptitude-header">
          <h1>Aptitude Testing</h1>
          <p>Evaluate your natural talents across different areas</p>
        </div>

        {/* Progress Bar */}
        <div className="aptitude-progress">
          <div className="progress-info">
            <span className="section-badge">
              Section {currentSection + 1} of {sections.length}
            </span>
            <span className="question-badge">
              Question {currentQuestion + 1} of {currentSectionData.questions.length}
            </span>
          </div>
          <div className="progress-bar-track">
            <div 
              className="progress-bar-fill" 
              style={{width: `${progress}%`}}
            ></div>
          </div>
        </div>

        {/* Section Chips */}
        <div className="section-chips">
          {sections.map((section, index) => (
            <div 
              key={index}
              className={`section-chip ${index === currentSection ? 'active' : ''} ${index < currentSection ? 'completed' : ''}`}
              style={{
                backgroundColor: index === currentSection ? section.color : 'transparent',
                borderColor: section.color,
                color: index === currentSection ? 'white' : section.color
              }}
            >
              <i className={`fas ${section.icon}`}></i>
              <span>{section.title}</span>
            </div>
          ))}
        </div>

        {/* Question Card */}
        <div className="question-card">
          {/* Section Header */}
          <div className="question-section-header">
            <div 
              className="section-icon-large"
              style={{backgroundColor: currentSectionData.lightColor}}
            >
              <i className={`fas ${currentSectionData.icon}`} style={{color: currentSectionData.color}}></i>
            </div>
            <div className="section-info">
              <h2 style={{color: currentSectionData.color}}>{currentSectionData.title}</h2>
              <p>{currentSectionData.description}</p>
              <div className="section-time">
                <i className="far fa-clock" style={{color: currentSectionData.color}}></i>
                <span>{currentSectionData.time}</span>
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="question-content">
            <h3>{currentQuestionData.question}</h3>
            
            <div className="options-container">
              {currentQuestionData.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${
                    answers[`${currentSection}-${currentQuestion}`] === index ? 'selected' : ''
                  }`}
                  onClick={() => handleAnswer(index)}
                  style={{
                    borderColor: answers[`${currentSection}-${currentQuestion}`] === index 
                      ? currentSectionData.color 
                      : '#e0e0e0'
                  }}
                >
                  <span 
                    className="option-letter"
                    style={{
                      backgroundColor: answers[`${currentSection}-${currentQuestion}`] === index 
                        ? currentSectionData.color 
                        : '#f0f0f0',
                      color: answers[`${currentSection}-${currentQuestion}`] === index 
                        ? 'white' 
                        : '#666'
                    }}
                  >
                    {getOptionLabel(index)}
                  </span>
                  <span className="option-text">{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="question-navigation">
            <button 
              className="nav-button prev"
              onClick={handlePrevious}
              disabled={currentSection === 0 && currentQuestion === 0}
            >
              <i className="fas fa-arrow-left"></i>
              Previous
            </button>
            
            <div className="question-dots">
              {currentSectionData.questions.map((_, index) => (
                <span 
                  key={index}
                  className={`dot ${index === currentQuestion ? 'active' : ''} ${answers[`${currentSection}-${index}`] !== undefined ? 'answered' : ''}`}
                  style={{
                    backgroundColor: index === currentQuestion 
                      ? currentSectionData.color 
                      : answers[`${currentSection}-${index}`] !== undefined 
                        ? currentSectionData.color + '80'
                        : '#e0e0e0'
                  }}
                  onClick={() => setCurrentQuestion(index)}
                ></span>
              ))}
            </div>

            <button 
              className="nav-button next"
              onClick={() => {
                if (currentQuestion < currentSectionData.questions.length - 1) {
                  setCurrentQuestion(currentQuestion + 1);
                } else if (currentSection < sections.length - 1) {
                  setCurrentSection(currentSection + 1);
                  setCurrentQuestion(0);
                }
              }}
              disabled={answers[`${currentSection}-${currentQuestion}`] === undefined}
            >
              {currentSection === sections.length - 1 && currentQuestion === currentSectionData.questions.length - 1
                ? 'Finish'
                : 'Next'
              }
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* Hint */}
          <div className="question-hint">
            <i className="fas fa-lightbulb" style={{color: '#ffc107'}}></i>
            <span>Pick the answer that feels right. You can't go back to previous sections!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AptitudeTesting;