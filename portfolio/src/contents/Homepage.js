import React, { Component } from "react";
import profilepic from "../img/profilepic";
import RTE from 'react-typing-effect;'

class Homepage extends Component {
    render() {
        return (
            <div className="condiv home">
             <img src={profilepic} alt="ProfilePic" className ="profilepic"></img> 
             <RTE className="typingeffect" text={[ "Hello!", "I'm Seth Staggs", "I'm a web developer"]} speed={100} eraseDelay={700}/>
            </div>
        )
    }
}

export default Homepage