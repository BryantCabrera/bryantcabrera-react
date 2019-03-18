import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import '../../App.css';

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <NavLink exact to="/" className="nav__about">About</NavLink>
                <NavLink exact to="/" className="nav__projects">Projects</NavLink>
                <NavLink exact to="/" className="nav__resume">Resume</NavLink>
            </nav>
        )
    }
}

export default withRouter(Nav);