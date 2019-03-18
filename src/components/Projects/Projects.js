import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';
import '../../App.css';

class Projects extends Component {
    state = {
        projects: [
            {

            }
        ]
    }

    // componentDidMount () {
    //     const projectsNav = [
    //         <NavLink exact to="/games/settlersofcatan" className="project__link">Settlers of Catan</NavLink>,
    //         <NavLink exact to="/games/gameplay" className="project__link">GamePlay</NavLink>,
    //         <NavLink exact to="/games/relocater" className="project__link">Relocater</NavLink>,
    //         <NavLink exact to="/games/letsplay" className="project__link">Let's Play</NavLink>,
    //         <NavLink exact to="/games/tutorme" className="project__link">Tutor Me</NavLink>,
    //     ];
    //     // this.props.updateProjectsLink(projectsNav);
    // }

    render() {
        return (
            <section id="projects" className="projects">
                <h2>Projects</h2>
                <Project1 />
                <Switch>
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
                </Switch>
            </section>
        )
    }
}

export default withRouter(Projects);