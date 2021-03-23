import React, { Component } from "react";

import Widecard from "../components/Widecard";

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education:</h1>
            <Widecard degree="Associates of Computer Science" school="South Plains College" start="Fall 2016" finish="Spring 2019"/>
            <Widecard degree="Full Stack Web Development Certificate" school="Southern Methodist University" start="September 2020" finish="March 2021"/>
            </div>
            )
        }
    }

export default Education