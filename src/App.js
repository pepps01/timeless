import React, { useState , useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/about/About';
import Careers from './pages/careers/Careers';
import Contact from './pages/contact/Contact';
import Homepage from './pages/homepage/Homepage';
import Products from './pages/products/Products';
import Pricing from './pages/pricing/Pricing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CareerDetails from './pages/careers/CareerDetails';
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <>
      <Router className="App">
      <ToastContainer />
        <Header setIsOpen={setIsOpen} isOpen={isOpen} />
        <div className="global">
        
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careerdetails" element={<CareerDetails />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;

