import { React } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import './Home.css';


// import WhyHtps from './Pages/Whyhtps'; 

import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/Hero';
import { BusJourney } from '../components/Usp';
import { Programs } from '../components/Programs';
import {Room} from '../components/ConceptRoom';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <BusJourney />
      <Programs />
      <Room/>
      <Testimonial />
    </>
  );
};

export default Home;
