import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
            <ReactCSSTransitionGroup
                component="div"
                className="project__card--container"
                transitionName="project"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>  
                <div className="project2 project__card">
                    <h3 className="project__title">GamePlay</h3>
                    <a href="https://bryant-gameplay.herokuapp.com" target="_blank" rel="noopener noreferrer" className="project__img--link"><img src="/imgs/gameplay.png" alt="GamePlay Project" title="GamePlay Project" className="project__img"></img></a>
                    <ul className="project__description">
                        <li>•	MERN Stack game hub app that tracks player stats from iFrame-embedded web socket games.</li>
                        <li>•	Tech: React, CSS, Node, Express, MongoDB, Mongoose, authentication with bcrypt, BEM, web sockets, iFrame, Adobe XD</li>
                        <li>•	Created web socket games, embedded them in iFrames in GamePlay hub app, and coded communication methods between them.</li>
                        <li>•	Back-end GitHub Link: <a href="https://github.com/BryantCabrera/gameplay-express" target="_blank" rel="noopener noreferrer" title="GamePlay Back-End GitHub">View Code</a></li>
                    </ul>
                    <a href="https://bryant-gameplay.herokuapp.com" target="_blank" rel="noopener noreferrer" className="project__link--deployed">Deployed Project</a>
                    <img src="/imgs/github.png" alt="GitHub" title="GitHub" className="project__link--github-icon"></img>
                    <a href="https://github.com/BryantCabrera/gameplay-react" target="_blank" rel="noopener noreferrer" className="project__link--code">View Code</a>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default withRouter(Project5);