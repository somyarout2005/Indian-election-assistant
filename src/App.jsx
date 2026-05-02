import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Flashcards from './pages/Flashcards';
import Quiz from './pages/Quiz';
import Assistant from './pages/Assistant';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/assistant" element={<Assistant />} />
        </Routes>
      </main>
      
      <div className="bg-decoration">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
