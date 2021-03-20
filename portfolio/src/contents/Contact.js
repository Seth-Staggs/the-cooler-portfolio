import React, { Component } from 'react';


class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me:</h1>
                <table>
                <th>Name</th>
                        <td>Seth D. Staggs</td>
                    
                    <tr>
                        <th>Email:</th>
                        <td>
                            <a href="mailto:Sethstaggs2@gmail.com">Sethstaggs2@gmail.com</a>
                        </td>
                    </tr>
                    <tr>
                        <th>Phone:</th>
                        <td>
                            <a href="tel:+18173079082">1(817)-307-9082</a>

                        </td>
                    </tr>
                    <tr>
                        <th>LinkedIn</th>
                        <td>
                            <a href="https://www.linkedin.com/in/seth-staggs-65811b158/">www.linkedin.com/seth-staggs</a>

                        </td>
                    </tr>
                    <tr>
                        <th>GitHub</th>
                        <td>
                            <a href="https://github.com/Seth-Staggs">https://github.com/Seth-Staggs</a>

                        </td>
                    </tr>  
                </table>
            </div>
        )
    }
}

export default Contact