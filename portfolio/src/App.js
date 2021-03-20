import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from './contents/Homepage';
import Aboutme from './contents/Aboutme';

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
            </div>
        </Router>
    )
};

export default App;
