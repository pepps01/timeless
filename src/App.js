import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/about/About';
import Careers from './pages/careers/Careers';
import Contact from './pages/contact/Contact';
import Homepage from './pages/homepage/Homepage';
// import routes from './routes';
// import About from './pages/about/about';

function App() {
  return (
    <>
      <Router className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

