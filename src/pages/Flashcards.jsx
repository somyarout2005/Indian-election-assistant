import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
import './Flashcards.css';

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flashcards = [
    {
      term: 'ECI',
      fullForm: 'Election Commission of India',
      definition: 'The constitutional body responsible for administering election processes in India at national and state levels.',
      color: 'var(--saffron-main)'
    },
    {
      term: 'EVM',
      fullForm: 'Electronic Voting Machine',
      definition: 'A device used to cast and record votes electronically, replacing traditional paper ballots.',
      color: 'var(--green-main)'
    },
    {
      term: 'VVPAT',
      fullForm: 'Voter Verifiable Paper Audit Trail',
      definition: 'An independent verification system for EVMs that allows voters to verify that their vote was cast correctly via a paper slip.',
      color: '#3B82F6'
    },
    {
      term: 'MCC',
      fullForm: 'Model Code of Conduct',
      definition: 'A set of guidelines issued by the ECI for conduct of political parties and candidates during elections to ensure free and fair polling.',
      color: '#A855F7'
    },
    {
      term: 'NOTA',
      fullForm: 'None of the Above',
      definition: 'A ballot option designed to allow the voter to indicate disapproval of all of the candidates in a voting system.',
      color: '#F43F5E'
    },
    {
      term: 'EPIC',
      fullForm: 'Elector\'s Photo Identity Card',
      definition: 'Commonly known as Voter ID card, issued by the ECI to adult citizens to serve as an identity proof while casting votes.',
      color: 'var(--saffron-light)'
    }
  ];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1));
    }, 150);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const currentCard = flashcards[currentIndex];

  return (
    <div className="flashcards-page animate-fade-in">
      <div className="page-header text-center">
        <h1 className="page-title">Electoral <span className="gradient-text">Flashcards</span></h1>
        <p className="page-subtitle">Master the terminology of Indian Elections.</p>
      </div>

      <div className="flashcard-container">
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
          <div className="flashcard-inner">
            
            {/* Front of Card */}
            <div className="flashcard-front glass-panel">
              <div className="card-top-accent" style={{ backgroundColor: currentCard.color }}></div>
              <h2 className="card-term">{currentCard.term}</h2>
              <div className="flip-hint">
                <RotateCw size={16} /> Click to flip
              </div>
            </div>

            {/* Back of Card */}
            <div className="flashcard-back glass-panel">
              <div className="card-top-accent" style={{ backgroundColor: currentCard.color }}></div>
              <div className="card-content">
                <h3 className="card-fullform">{currentCard.fullForm}</h3>
                <p className="card-def">{currentCard.definition}</p>
              </div>
            </div>

          </div>
        </div>

        <div className="flashcard-controls">
          <button className="control-btn" onClick={handlePrev}>
            <ChevronLeft size={24} />
          </button>
          <span className="card-counter">
            {currentIndex + 1} / {flashcards.length}
          </span>
          <button className="control-btn" onClick={handleNext}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
