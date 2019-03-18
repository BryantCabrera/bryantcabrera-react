import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import '../../App.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <NavLink exact to="/" className="logo--link">
                    <img src="./imgs/bryantcabrera_logo.svg" alt="Bryant Cabrera's Logo" title="Bryant Cabrera's Logo" className="logo--img"></img>
                </NavLink>
                <ul className="navbar__list">
                    <li className="navbar__list--item"><a className="navbar__list--link" href="#about">About</a></li>
                    <li className="navbar__list--item"><a className="navbar__list--link"  href="#projects">Projects</a></li>
                    <li className="navbar__list--item"><a className="navbar__list--link"  href="#resume">Resume</a></li>
                    <li className="navbar__list--item"><a className="navbar__list--link"  href="#contact">Contact</a></li>
                </ul>
            </header>
        )
    }
}

export default withRouter(Header);