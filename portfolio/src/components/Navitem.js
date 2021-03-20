import { Link } from "react-router-dom";
import React, { Component } from "react";

class Navitem extends Component {

    render() {
        return (
            <li>

                <Link to={this.props.tolink} >
                    {this.props.item}
                </Link>
            </li>
        )
    }
};

export default Navitem;