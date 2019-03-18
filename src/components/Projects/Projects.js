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

    componentDidMount () {
        // this.props.updateProjectsLink()
    }

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