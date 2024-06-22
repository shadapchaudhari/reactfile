import React from 'react'
import { Element } from 'react-scroll';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from './Components/About';
import Education from './Components/Education';
import Skilles from './Components/Skilles';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Form from './Components/Form';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div>
      <Element name="Navbar">
        <Navbar />
      </Element>
      <Element name="Hero">
        <Hero />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Education">
        <Education />
      </Element>
      <Element name="Skilles">
        <Skilles />
      </Element>
      <Element name="Work">
        <Work />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
      <Element name="Form">
        <Form />
      </Element>
      <Element name="Footer">
        <Footer />
      </Element>
    </div>
  );
}

export default App