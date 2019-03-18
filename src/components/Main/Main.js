import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import '../../App.css';

class Main extends Component {
    render() {
        return (
            <main className="about">
                <Header />
               This is main.
            </main>
        )
    }
}

export default withRouter(Main);