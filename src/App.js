import './App.css';
//components
import About from './components/About'
import Nav from './components/Nav'
//img
// import background from './img/print-bg.png'
const App = () => {
  return(
    <>
    <body class="font-mono bg-hero-pattern" >
    <Nav />
    <About />
    </body>
    </>
  )
}

export default App;


// style={{ backgroundImage: `url(${background})`, resizeMode: 'repeat' }}