import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/homepage/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router className="App">
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </Router>
);
reportWebVitals();
