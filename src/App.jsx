import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Error from "./components/Error";
import Internship from "./components/Internship";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const progressBarStyle = `
    .custom-progress-bar {
      background-color: purple !important;
    }
  `;

  return (
    <div>

<style>{progressBarStyle}</style>
      <Router>
        <Navbar />
        <ToastContainer 
          progressClassName="custom-progress-bar"
          autoClose='3000'
          hideProgressBar={false}
        />
        {/* <Home />
            <About />
            <Projects />
            <Contact /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/internship" element={<Internship
            company="Grenud Company"
            position="Software Developer Intern"
            duration="June 2023 - July 2023"
            description="At Grenud Ltd., I served as a dedicated Frontend Web Developer, making significant contributions to the development of an E-Commerce Web Application, earning recognition for my commitment to excellence."
            offerLetter="https://drive.google.com/file/d/1CGh6ZjHESlPQs9CjhzwjhDELu6DDhRPz/view?usp=drive_link"
          />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
