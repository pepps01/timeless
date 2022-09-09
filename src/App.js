import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './components/Header/Header.css';

import Homepage from './pages/homepage/Homepage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Links } from './components/Header/Links';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Router className="App">
        <Header setIsOpen={setIsOpen} isOpen={isOpen} />
        <div
              className={isOpen ? "mobileNavbarShow" : "mobileNavbar"}
            >
              <ul className="mobileNavbarLinks">
                {Links.map((link, index) => (
                  <div key={index} className="navbarLink">
                    <li>{link.name}</li>
                  </div>
                ))}
              </ul>
              <div className="mobileNavbarBtn">
                <div className="getStartedBtn1">
                  <a href='/register'>Contact Us</a>
                </div>
              </div>
            </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

