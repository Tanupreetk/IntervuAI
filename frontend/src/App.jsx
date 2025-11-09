import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/home';
import CategorySelect from './pages/categorySelect';
import Prep from './pages/prep';
import MockTestPage from './pages/mockTest';
import Results from './pages/results';
import NotFound from './pages/notfound';
function App() {
  return (
    <div className='bg-dark-bg text-dark-text font-sans min-h-screen'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-category/:mode" element={<CategorySelect />} />
        <Route path="/mock/:category" element={<MockTestPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/prep/:category" element={<Prep />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
