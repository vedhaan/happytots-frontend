import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
// import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhyHtps from './Pages/Whyhtps'; 
import Home from './Pages/Home'; 
import Footer from './components/Footer';
import {Navbar}  from './components/Navbar';
import About from './Pages/About';
import Admission from './Pages/Admission';
import Program from './Pages/Program';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <>

  <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />           
        <Route path="/home" element={<Home />} />
        <Route path="/why-htps" element={<WhyHtps />} />
        <Route path="/About" element={<About />} />
        <Route path="/Admission" element={<Admission />} />
        <Route path="/Program" element={<Program />} />
        <Route path="/Gallery" element={<Gallery />} />
        
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>

    <Footer/>
    </>
  );
};

export default App;
