import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from './contents/Homepage';
import Aboutme from './contents/Aboutme';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Footer from './components/Footer';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route exact path="/">
                 <Homepage/>   
                </Route>
                <Route path="/about">
                    <Aboutme/>
                </Route>
                <Route path="/education">
                    <Education/>
                </Route>
                <Route path="/skills">
                    <Skills/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Footer/>
            </div>
        </Router>
    )
};

export default App;
