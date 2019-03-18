import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../App.css';

class Project4 extends Component {
    state = {
        projects: [
            {
                
            }
        ]
    }

    render() {
        return (      
            <div className="project4 project__card">
                <h3 className="project__title">Let's Play</h3>
                <a href="https://github.com/BryantCabrera/letsplay-react" target="_blank" rel="noopener noreferrer" className="project__img--link"><img src="/imgs/settlers-of-catan.png" alt="Relocater Project" title="Relocater Project" className="project__img"></img></a>
                <ul className="project__description">
                    <li>•	Full-Stack app that provides boardgame data</li>
                    <li>•	Implemented Flask authorization</li>
                    <li>•	Managed GitHub branches and merges</li>
                    <li>•	Developed algorithm that calculates estimated salary to maintain current lifestyle</li>           
                </ul>
                <a href="https://letsplay-react.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project__link--deployed">Deployed Project</a>
                <img src="/imgs/github.png" alt="GitHub" title="GitHub" className="project__link--github-icon"></img>
                <a href="https://github.com/BryantCabrera/letsplay-flask" target="_blank" rel="noopener noreferrer" className="project__link--code">View Code</a>
            </div>
        )
    }
}

export default withRouter(Project4);