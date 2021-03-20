import React, { Component } from "react";
import profilepic from "../img/profilepic.png";
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';

class Homepage extends Component {
    render() {
        return (
            <div className="condiv home">
             <img src={profilepic} alt="ProfilePic" className ="profilepic"></img> 
             <br></br>

             <ReactTypingEffect className="typingeffect" text={[ "Hello!", "I'm Seth Staggs", "I'm a web developer"]} speed={100} eraseDelay={700}/>

             <Social />
            </div>
        )
    }
}

export default Homepage