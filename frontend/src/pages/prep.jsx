import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CATEGORIES } from '../data/data';

const PrepPage = () => {
  const { category: categoryId } = useParams();
  const category = categoryId ? CATEGORIES[categoryId] : undefined;
  const questions = category?.prep || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!category) {
    return <div>Category not found.</div>;
  }
  
  if (questions.length === 0) {
    return <div>No preparation questions available for this category.</div>;
  }
  
  const currentCard = questions[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };
  
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="flex flex-col items-center animate-fade-in">
        <h1 className="text-3xl font-bold mb-4 text-center">{category.name} Preparation</h1>
        <p className="text-dark-text-secondary mb-8">Card {currentIndex + 1} of {questions.length}</p>

        <div 
          className="w-full max-w-2xl h-80 perspective-1000"
          onClick={handleFlip}
        >
          <div className={`relative w-full h-full transform-style-3d transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}>
              {/* Front of card */}
              <div className="absolute w-full h-full backface-hidden bg-dark-card rounded-lg shadow-xl flex items-center justify-center p-6">
                  <h2 className="text-2xl font-semibold text-center text-white">{currentCard.question}</h2>
              </div>
              {/* Back of card */}
              <div className="absolute w-full h-full backface-hidden bg-secondary rounded-lg shadow-xl flex items-center justify-center p-6 transform rotate-y-180">
                  <p className="text-lg text-white">{currentCard.answer}</p>
              </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-dark-text-secondary">Click card to flip</p>

        <div className="mt-8 flex items-center gap-6">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
            </button>
            <button onClick={handleNext} disabled={currentIndex === questions.length - 1} className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Next
            </button>
        </div>
    </div>
  );
};

export default PrepPage;