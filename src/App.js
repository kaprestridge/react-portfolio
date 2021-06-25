import './App.css';
import React from 'react';
//components
import About from './components/About'
import Nav from './components/Nav'
import Projects from './components/Projects'
// import Contact from './components/Contact';


const App = () => {

  return(
    <>
    <div id="background "className="font-mono bg-hero-pattern cursor-default" >
    <Nav />
    <About />
    <Projects />
    </div>
    </>
  )
}

export default App;

