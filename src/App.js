import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import School from './pages/school';
import Notes from './pages/notes';
import College from './pages/college';
import Enterprise from './pages/enterprise';
import Airenmask from './pages/airenmask';
import Navbar from './components/Navbar/Nav';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school" element={<School />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/college" element={<College />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/airenmask" element={<Airenmask />} />
      </Routes>
    </div>
  );
}

export default App;
