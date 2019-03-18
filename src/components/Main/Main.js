import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../App.css';

class Main extends Component {
    render() {
        return (
            <main className="about">
               This is main.
            </main>
        )
    }
}

export default withRouter(Main);