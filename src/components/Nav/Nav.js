import React, { Component } from 'react';
import { Route, Switch, withRouter, NavLink } from 'react-router-dom';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import '../../App.css';

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <NavLink exact to="/" className="nav__about">About</NavLink>
                <NavLink exact to="/projects" className="nav__projects">Projects</NavLink>
                <NavLink exact to="/" className="nav__resume">Resume</NavLink>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => (
                            <Main
                                history={this.props.history}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/projects"
                        component={() => (
                            <Projects
                                history={this.props.history}
                            />
                        )}
                    />
                </Switch>
            </nav>
        )
    }
}

export default withRouter(Nav);