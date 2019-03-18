import React, { Component } from 'react';
import { Route, Switch, withRouter, NavLink } from 'react-router-dom';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import Project1 from '../Projects/Project1';
import Project2 from '../Projects/Project2';
import Project3 from '../Projects/Project3';
import Project4 from '../Projects/Project4';
import Project5 from '../Projects/Project5';
import Resume from '../Resume/Resume';
import '../../App.css';

class Nav extends Component {
    state = {
        projectsLink: [<NavLink exact to="/projects">Projects</NavLink>]
    }

    updateProjectsLink = (link) => {
        this.setState({
            projectsLink: link
        });
    }

    render() {
        return (
            <nav className="nav">
                <NavLink exact to="/" className="nav__about">About</NavLink>
                <div className="nav__projects">
                    {/* {this.state.projectsLink.map((project, index) => (
                        project
                    ))} */}
                    Projects: <NavLink exact to="/projects/settlersofcatan" className="project__link">Settlers of Catan</NavLink> | <NavLink exact to="/projects/gameplay" className="project__link">GamePlay</NavLink> | <NavLink exact to="/projects/relocater" className="project__link">Relocater</NavLink> | <NavLink exact to="/projects/letsplay" className="project__link">Let's Play</NavLink> | <NavLink exact to="/projects/tutorme" className="project__link">Tutor Me</NavLink>
                </div>
                <NavLink exact to="/resume" className="nav__resume">Resume</NavLink>
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
                                updateProjectsLink={this.updateProjectsLink}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/projects/settlersofcatan"
                        component={() => (
                            <Project1
                                history={this.props.history}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/projects/gameplay"
                        component={() => (
                            <Project5
                                history={this.props.history}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/projects/relocater"
                        component={() => (
                            <Project3
                                history={this.props.history}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/projects/letsplay"
                        component={() => (
                            <Project4
                                history={this.props.history}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/projects/tutorme"
                        component={() => (
                            <Project2
                                history={this.props.history}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/resume"
                        component={() => (
                            <Resume
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