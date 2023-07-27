import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Technologies from './components/technologies/Technologies'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ReactGA from 'react-ga';
import {useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import ReactGA from 'react-ga';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const TRACKING_ID = "G-F3P097DYC6"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

// import ReactDOM from 'react-dom';

const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

export const App = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Technologies />
      <Contact />
      <Footer />
    </>
  )
}
export default App