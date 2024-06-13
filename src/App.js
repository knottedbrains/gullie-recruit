// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Profile from './pages/Profile';
import MainHeader from './components/MainHeader';
import UserHeader from './components/UserHeader';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<><MainHeader /><Home /></>} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/profile" element={<><UserHeader /><Profile /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
