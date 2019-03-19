import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../App.css';

class Project3 extends Component {
    state = {
        projects: [
            {
                
            }
        ]
    }

    render() {
        return (      
            <div className="project3 project__card">
                <h3 className="project__title">Relocater</h3>
                <a href="https://github.com/BryantCabrera/relocater" target="_blank" rel="noopener noreferrer" className="project__img--link"><img src="/imgs/relocater.png" alt="Relocater Project" title="Relocater Project" className="project__img"></img></a>
                <ul className="project__description">
                    <li>•	MERN Stack app that provides CA county stats to cater to users' relocation needs</li>
                    <li>•	Tech: React, CSS, BEM, d3, SVG, mongoDB, mongoose, OAuth, bcrypt</li>
                    <li>•	Implemented Google OAuth2 authorization</li>
                    <li>•	Managed GitHub branches and merges</li>
                    <li>•	Developed algorithm that calculates estimated salary to maintain current lifestyle</li>           
                </ul>
                <a href="https://relocater.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project__link--deployed">Deployed Project</a>
                <img src="/imgs/github.png" alt="GitHub" title="GitHub" className="project__link--github-icon"></img>
                <a href="https://github.com/BryantCabrera/relocater" target="_blank" rel="noopener noreferrer" className="project__link--code">View Code</a>
            </div>
        )
    }
}

export default withRouter(Project3);