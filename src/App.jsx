import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

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
            </Routes>
        </Router>
    </div>
  );
}

export default App;
