import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/about/About';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <>
      <Router className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

