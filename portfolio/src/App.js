
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Skills' element={<Skills />}/>
          <Route path='/Project' element={<Project />}/>
          <Route path='/Contact' element={<Contact />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
