import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../App.css';

class Projects extends Component {
    render() {
        return (
            <section id="projects" class="projects">
                This is projects.
            </section>
        )
    }
}

export default withRouter(Projects);