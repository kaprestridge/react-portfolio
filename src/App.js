import './App.css';
//components
import About from './components/About'
import Nav from './components/Nav'
//img
// import background from './img/print-bg.png'
const App = () => {
  return(
    <>
    <div id="background "className="font-mono bg-hero-pattern" >
    <Nav />
    <About />
    </div>
    </>
  )
}

export default App;


// style={{ backgroundImage: `url(${background})`, resizeMode: 'repeat' }}