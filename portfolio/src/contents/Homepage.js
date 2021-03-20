import React, { Component } from "react";
import profilepic from "../img/profilepic.png";
import ReactTypingEffect from 'react-typing-effect';


class Homepage extends Component {
    render() {
        return (
            <div className="condiv home">
             <div class="row">
             <img src={profilepic} alt="ProfilePic" className ="profilepic"></img> 
             </div>
        
             <div class="row">
             <ReactTypingEffect className="typingeffect" text={[ "Howdy!", "I'm Seth Staggs", "I'm a web developer"]} speed={100} eraseDelay={700}/>
             </div>
            </div>
        )
    }
}

export default Homepage