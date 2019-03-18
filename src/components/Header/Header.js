import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import '../../App.css';

class Header extends Component {
    state = {
        email: ''
    }

    toggleEmail = () => {
        const email = this.state.email === '' ? 'cabrera.bryant@gmail.com' : '';
        this.setState({
            email: email
        });
    }

    render() {
        return (
            <header className="header">
                <NavLink exact to="/" className="logo--link">
                    <img src="/imgs/bryantcabrera_logo.svg" alt="Bryant Cabrera's Logo" title="Bryant Cabrera's Logo" className="logo--img"></img>
                </NavLink>
                <ul className="contact__list">
                    <li className="contact__list--item">
                        <span className="contact__list__email">{this.state.email}</span>
                    </li>
                    <li className="contact__list--item">
                        <a className="contact__list--link" href="#about" onClick={this.toggleEmail}>
                            <img className="contact__list--img" src="/imgs/gmail.png" alt="Bryant's Email" title="Bryant's Email"></img>
                        </a>
                    </li>
                    <li className="contact__list--item">
                        <a className="contact__list--link" href="https://github.com/BryantCabrera" target="_blank" rel="noopener noreferrer">
                            <img className="contact__list--img" src="/imgs/github.png" alt="Bryant's GitHub" title="Bryant's GitHub"></img>
                        </a>
                    </li>
                    <li className="contact__list--item">
                        <a className="contact__list--link" href="https://www.linkedin.com/in/bryantcabrera/" target="_blank" rel="noopener noreferrer">
                            <img className="contact__list--img" src="/imgs/linkedin--header.png" alt="Bryant's LinkedIn" title="Bryant's LinkedIn"></img>
                        </a>
                    </li>
                </ul>
            </header>
        )
    }
}

export default withRouter(Header);