import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-react';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    {
      questionText: 'Who is responsible for administering the election processes in India?',
      options: [
        { text: 'Supreme Court of India', isCorrect: false },
        { text: 'Election Commission of India', isCorrect: true },
        { text: 'President of India', isCorrect: false },
        { text: 'Parliament', isCorrect: false },
      ],
      explanation: 'The Election Commission of India (ECI) is the autonomous constitutional authority responsible for administering election processes in India.'
    },
    {
      questionText: 'What does VVPAT stand for?',
      options: [
        { text: 'Voter Verifiable Paper Audit Trail', isCorrect: true },
        { text: 'Voting Verification Process Audit Test', isCorrect: false },
        { text: 'Voter Valuation Paper Action Trail', isCorrect: false },
        { text: 'Visual Verification Printed Audit Trail', isCorrect: false },
      ],
      explanation: 'VVPAT stands for Voter Verifiable Paper Audit Trail, an independent verification system for voting machines.'
    },
    {
      questionText: 'What is the minimum voting age in India?',
      options: [
        { text: '21 years', isCorrect: false },
        { text: '16 years', isCorrect: false },
        { text: '18 years', isCorrect: true },
        { text: '25 years', isCorrect: false },
      ],
      explanation: 'The minimum voting age in India was reduced from 21 to 18 years by the 61st Constitutional Amendment Act of 1988.'
    },
    {
      questionText: 'What is the purpose of the Model Code of Conduct (MCC)?',
      options: [
        { text: 'To decide the winning candidate', isCorrect: false },
        { text: 'To ensure free and fair elections', isCorrect: true },
        { text: 'To fund political parties', isCorrect: false },
        { text: 'To select the EVM machines', isCorrect: false },
      ],
      explanation: 'The MCC ensures a level playing field and prevents the ruling party from misusing official machinery during elections.'
    },
    {
      questionText: 'If a voter does not want to vote for any candidate, which option can they use?',
      options: [
        { text: 'Null Vote', isCorrect: false },
        { text: 'NOTA', isCorrect: true },
        { text: 'Abstain', isCorrect: false },
        { text: 'VETO', isCorrect: false },
      ],
      explanation: 'NOTA (None of the Above) allows voters to express their disapproval of all contesting candidates.'
    }
  ];

  const handleAnswerClick = (isCorrect, index) => {
    if (selectedAnswer !== null) return; // Prevent multiple clicks

    setSelectedAnswer(index);
    setIsCorrect(isCorrect);

    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 2500); // Wait to show explanation before moving on
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  return (
    <div className="quiz-page animate-fade-in">
      <div className="page-header text-center">
        <h1 className="page-title">Knowledge <span className="gradient-text">Quiz</span></h1>
        <p className="page-subtitle">Test your understanding of the Indian electoral system.</p>
      </div>

      <div className="quiz-container glass-panel">
        {showScore ? (
          <div className="score-section animate-fade-in">
            <Trophy size={64} className="trophy-icon" />
            <h2>Quiz Completed!</h2>
            <p className="score-text">
              You scored <span className="highlight-score">{score}</span> out of {questions.length}
            </p>
            <div className="score-bar-bg">
              <div 
                className="score-bar-fill" 
                style={{ width: `${(score / questions.length) * 100}%` }}
              ></div>
            </div>
            <button className="btn-primary mt-4" onClick={restartQuiz}>
              <RotateCcw size={18} /> Retake Quiz
            </button>
          </div>
        ) : (
          <div className="question-section">
            <div className="quiz-progress">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
            
            <div className="answer-options">
              {questions[currentQuestion].options.map((option, index) => {
                let buttonClass = 'answer-btn';
                if (selectedAnswer !== null) {
                  if (option.isCorrect) buttonClass += ' correct';
                  else if (selectedAnswer === index) buttonClass += ' incorrect';
                  else buttonClass += ' disabled';
                }

                return (
                  <button
                    key={index}
                    className={buttonClass}
                    onClick={() => handleAnswerClick(option.isCorrect, index)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="option-text">{option.text}</span>
                    {selectedAnswer !== null && option.isCorrect && <CheckCircle2 size={20} className="result-icon correct-icon" />}
                    {selectedAnswer === index && !option.isCorrect && <XCircle size={20} className="result-icon incorrect-icon" />}
                  </button>
                );
              })}
            </div>

            {selectedAnswer !== null && (
              <div className="explanation-box animate-fade-in">
                <strong>Explanation: </strong>
                {questions[currentQuestion].explanation}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
