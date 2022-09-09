import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from './pages/about/About';
import Careers from './pages/careers/Careers';
import Contact from './pages/contact/Contact';
import Homepage from './pages/homepage/Homepage';
import Products from './pages/products/Products';
import Pricing from './pages/pricing/Pricing';
import './components/Header/Header.css';
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
                <Link to={link.path}>
                  <li>{link.name}</li>
                </Link>
              </div>
            ))}
          </ul>
          <div className="mobileNavbarBtn">
            <div className="getStartedBtn1">
              <a href='/contact'>Contact Us</a>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

