import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data/data';

const CategorySelectionPage = () => {
  const { mode } = useParams();
  const navigate = useNavigate();

  const handleCategorySelect = (categoryId) => {
    navigate(`/${mode}/${categoryId}`);
  };
  
  const title = mode === 'mock' ? 'Choose a Mock Test Category' : 'Choose a Preparation Category';
  const description = mode === 'mock' 
    ? 'Select a category to start your timed mock interview.' 
    : 'Select a category to review questions and answers in a flashcard format.';

  return (
    <div className="animate-fade-in p-6">
      <h1 className="text-3xl font-bold text-center mb-2">{title}</h1>
      <p className="text-dark-text-secondary text-center mb-8">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {Object.values(CATEGORIES).map((category) => {
          // HR has no mock tests, so don't show it in mock mode
          if (mode === 'mock' && category.mock.length === 0) {
            return null;
          }
          return (
            <div
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className="bg-dark-card p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition-all transform hover:-translate-y-1"
            >
              <category.icon className="w-12 h-12 text-secondary mb-4" />
              <h2 className="text-xl font-bold text-white">{category.name}</h2>
              <p className="text-dark-text-secondary mt-2">{category.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelectionPage;
