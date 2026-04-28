import "./index.css";
import "./components/contact.css"
import "./components/Skill.css"
import "./components/prjct.css"
import Navbar from './components/Navbar';
// import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";


import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
      {/* <div style={{marginTop:"70px"}}> */}
      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
}

export default App;