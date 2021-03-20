import React, { Component } from "react";

class Projectcard extends Component {
    render() {
        return (
            <div class="widecard">
                <div class="compdet">
                    <h3>{this.props.title}</h3>
                    <p class='secondtext'>{this.props.desc}</p>
                    <a class='secondtext' href={this.props.link}>Visit Repo</a>
                </div>
            </div>
        );
    }
}

export default Projectcard