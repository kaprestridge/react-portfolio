import './App.css';
//components
import About from './components/About'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Contact from './components/Contact';
//img
// import background from './img/print-bg.png'
const App = () => {
  return(
    <>
    <div id="background "className="font-mono bg-hero-pattern cursor-default" >
    <Nav />
    <About />
    <Projects />
    <Contact />
    </div>
    </>
  )
}

export default App;


// style={{ backgroundImage: `url(${background})`, resizeMode: 'repeat' }}