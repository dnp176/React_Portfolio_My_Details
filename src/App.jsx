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
const TRACKING_ID = "UA-227016277-4"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

ReactGA.event({
  category: 'User',
  action: 'Created an Account'
});

export const App = () => {
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