import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../App.css';

class Project5 extends Component {
    state = {
        projects: [
            {
                
            }
        ]
    }

    render() {
        return (      
            <div className="project2 project__card">
                <h3 className="project__title">GamePlay</h3>
                <a href="https://github.com/BryantCabrera/gameplay-react" target="_blank" rel="noopener noreferrer" className="project__img--link"><img src="/imgs/tutor-me.png" alt="GamePlay Project" title="GamePlay Project" className="project__img"></img></a>
                <ul className="project__description">
                    <li>•	MERN Stack game hub app that tracks player stats from iFrame-embedded web socket games.</li>
                    <li>•	Tech: React, CSS, Node, Express, MongoDB, Mongoose, authentication with bcrypt, BEM, web sockets, iFrame, Adobe XD</li>
                    <li>•	Created web socket games, embedded them in iFrames in GamePlay hub app, and coded communication methods between them.</li>
                </ul>
                <a href="https://bryant-tutor-me.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project__link--deployed">Deployed Project</a>
                <img src="/imgs/github.png" alt="GitHub" title="GitHub" className="project__link--github-icon"></img>
                <a href="https://github.com/BryantCabrera/tutor-me" target="_blank" rel="noopener noreferrer" className="project__link--code">View Code</a>
            </div>
        )
    }
}

export default withRouter(Project5);