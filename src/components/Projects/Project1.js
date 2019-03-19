import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../App.css';

class Project1 extends Component {
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
                <div className="project1 project__card">
                    <h3 className="project__title">Settlers of Catan</h3>
                    <a href="https://github.com/BryantCabrera/Settlers-of-Catan" target="_blank" rel="noopener noreferrer" className="project__img--link"><img src="/imgs/settlers-of-catan.png" alt="Settlers of Catan Project" title="Settlers of Catan Project" className="project__img"></img></a>
                    <ul className="project__description">
                        <li>•	Web app recreation of popular 4-player boardgame featuring JavaScript game logic</li>
                        <li>•	Tech: jQuery, clip paths, & CSS Grid to construct interactable boardgame area</li>
                        <li>•	Data structures comprised of nested objects and arrays, connecting data with referencing</li>    
                    </ul>
                    <a href="https://bryantcabrera.github.io/Settlers-of-Catan" target="_blank" rel="noopener noreferrer" className="project__link--deployed">Deployed Project</a>
                    <img src="/imgs/github.png" alt="GitHub" title="GitHub" className="project__link--github-icon"></img>
                    <a href="https://github.com/BryantCabrera/Settlers-of-Catan" target="_blank" rel="noopener noreferrer" className="project__link--code">View Code</a>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default withRouter(Project1);