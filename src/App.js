import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import './App.css';

class App extends Component {
    render() {
        return (
        <div className="App">
            <Header />
            <Nav />
        </div>
        );
    }
}

export default withRouter(App);
