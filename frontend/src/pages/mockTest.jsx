import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data/data';

const MockTestPage = () => {
  const { category: categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = categoryId ? CATEGORIES[categoryId] : undefined;
  const questions = category?.mock || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);

  if (!category) {
    return <div>Category not found.</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setAnswers({ ...answers, [currentQuestion.id]: option });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(answers[questions[currentQuestionIndex + 1].id] || null);
    }
  };
  
  const handleSubmit = () => {
    navigate('/results', { state: { answers, questions, categoryId } });
  };

  return (
    <div className="max-w-2xl mx-auto bg-dark-card p-8 rounded-lg shadow-2xl animate-fade-in">
      <h1 className="text-2xl font-bold mb-2 text-secondary">{category.name} Mock Test</h1>
      <p className="text-dark-text-secondary mb-6">Question {currentQuestionIndex + 1} of {questions.length}</p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white">{currentQuestion.question}</h2>
      </div>

      <div className="flex flex-col gap-4">
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionSelect(option)}
            className={`text-left p-4 rounded-lg border-2 transition-colors ${
              selectedOption === option
                ? 'bg-secondary border-blue-400 text-white font-bold'
                : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-8 flex justify-end gap-4">
        {currentQuestionIndex < questions.length - 1 ? (
          <button onClick={handleNext} className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Next
          </button>
        ) : (
          <button onClick={handleSubmit} className="bg-accent text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-600 transition-colors">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MockTestPage;