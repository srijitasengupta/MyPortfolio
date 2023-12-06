import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import NavBar from './components/Navbar';
import Skills from './components/Skills';
import Contact  from './components/Contact';

function App() {
  return (
    <main >
      <NavBar />
      <About/>
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
