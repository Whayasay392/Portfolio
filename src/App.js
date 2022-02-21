
// import './App.css';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <main >
      <Container>
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Contact />
      </Container>
     
    </main>
  );
}

export default App;
