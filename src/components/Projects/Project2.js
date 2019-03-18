import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../App.css';

class Project2 extends Component {
    state = {
        projects: [
            {
                
            }
        ]
    }

    render() {
        return (      
            <div className="project2 project__card">
                <h3 className="project__title">Tutor Me</h3>
                <a href="https://github.com/BryantCabrera/tutor-me" target="_blank" className="project__img--link"><img src="/imgs/tutor-me.png" alt="Tutor Me Project" title="Tutor Me Project" className="project__img"></img></a>
                <ul className="project__description">
                    <li>MEN Stack app that connects tutors and students</li>
                    <li>Tech: Node, Express, MongoDB, Mongoose, authentication with bcrypt, Google API, Sass, BEM, jQuery, Adobe XD</li>
                    <li>Utilized Google Maps API and Geocoder API to connect clients by zip code proximity</li>
                </ul>
                <a href="https://bryant-tutor-me.herokuapp.com/" target="_blank" className="project__link--deployed">Deployed Project</a>
                <img src="/imgs/github.png" alt="GitHub" title="GitHub" className="project__link--github-icon"></img>
                <a href="https://github.com/BryantCabrera/tutor-me" target="_blank" className="project__link--code">View Code</a>
            </div>
        )
    }
}

export default withRouter(Project2);