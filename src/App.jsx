import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <div>
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
