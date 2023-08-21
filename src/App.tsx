import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Courses from './pages/Courses';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import TermsAndPrivacy from './pages/TermsAndPrivacy';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
       <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
            <Route path="*" element={<PageNotFound />} /> 
       </Routes>
    </div>
  );
}

export default App;
