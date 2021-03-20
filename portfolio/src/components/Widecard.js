import React, { Component } from "react";

class Widecard extends Component {
    render() {
        return (
            <div class="widecard">
                <div class="compdet">
                    <h3>{this.props.degree}</h3>
                    <h4 class="secondtext">{this.props.school}</h4>
                    <h4 class="secondtext">{this.props.start} - {this.props.finish}</h4>
                </div>
            </div>
        )
    }
}

export default Widecard