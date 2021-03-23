import React, { Component } from "react";

import Projectcard from "../components/Projectcard";

class Projects extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Projects:</h1>
            <Projectcard title="Password Generator" desc="This is a simple random password generator." link="https://github.com/Seth-Staggs/SethsPasswordGenerator"/>
            <Projectcard title="Weather Dasboard" desc="a weather app using openweatherapi" link="https://github.com/Seth-Staggs/Seths-Weather-Dashboard"/>
            <Projectcard title="Budget Tracker" desc="a budget tracker app using cached data." link="https://github.com/Seth-Staggs/SethsBudgetTracker"/>
            <Projectcard title="Team Builder" desc="Takes user input and generates a team layout with member information" link="https://github.com/Seth-Staggs/Seths_TeamGenerator"/>
            <Projectcard title="Round Table" desc="Social Media app tailored to table top gaming" link="https://github.com/Seth-Staggs/Project-3"/>
            <Projectcard title="Day Planner" desc="basic day planner that stores into local storage" link="https://github.com/Seth-Staggs/Seths-Day-Planner"/>
            </div>
            )
        }
    }

export default Projects