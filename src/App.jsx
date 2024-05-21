import React from 'react'
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
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Education/>
    <Skilles/>
    <Work/>
    <Contact/>
    <Form/>
    <Footer/>
    </>
  )
}

export default App