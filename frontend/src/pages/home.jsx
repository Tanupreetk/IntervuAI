import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center h-screen ">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white animate-fade-in-down">
        Welcome to your AI Interview Coach
      </h1>
      <p className="text-lg md:text-lg text-white mb-10 max-w-2xl animate-fade-in-up">
        Sharpen your skills, get instant feedback, and ace your next interview. Choose your path below to get started.
      </p>
      <div className="flex flex-col md:flex-row gap-6 animate-fade-in">
        <Link
          to="/select-category/mock"
          className="bg-primary text-white font-bold py-4 px-10 rounded-lg text-xl hover: transition-transform transform hover:scale-105 shadow-lg"
        >
          Take a Mock Test
        </Link>
        <Link
          to="/select-category/prep"
          className="bg-primary text-white font-bold py-4 px-10 rounded-lg text-xl hover: transition-transform transform hover:scale-105 shadow-lg"
        >
          Start Preparation
        </Link> 
      </div>
    </div>
  );
};

export default Home;
