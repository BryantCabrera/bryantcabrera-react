import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Project1 from './Project1';
import '../../App.css';

class Projects extends Component {
    state = {
        projects: [
            {

            }
        ]
    }

    render() {
        return (
            <section id="projects" className="projects">
                <h2>Projects</h2>
                <Project1 />
            </section>
        )
    }
}

export default withRouter(Projects);