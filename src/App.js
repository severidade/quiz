import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trivia from './pages/Trivia';
import Feedback from './pages/Feedback';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/trivia" element={<Trivia /> } />
        <Route path="/feedback" element={<Feedback /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
