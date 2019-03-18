import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
            <div>
                <div className="project1 project__card">
                    <h3 className="project__title">Settlers of Catan</h3>
                    <a href="https://github.com/BryantCabrera/Settlers-of-Catan" target="_blank" className="project__img--link"><img src="/imgs/settlers-of-catan.png" alt="Settlers of Catan Project" title="Settlers of Catan Project" className="project__img"></img></a>
                    <ul className="project__description">
                        <li>Web app recreation of popular 4-player boardgame featuring JavaScript game logic</li>
                        <li>Tech: jQuery, clip paths, & CSS Grid to construct interactable boardgame area</li>
                        <li>Data structures comprised of nested objects and arrays, connecting data with referencing</li>    
                    </ul>
                    <a href="https://bryantcabrera.github.io/Settlers-of-Catan/#" target="_blank" className="project__link--deployed">Deployed Project</a>
                    <img src="/imgs/github.png" alt="GitHub" title="GitHub" className="project__link--github-icon"></img>
                    <a href="https://github.com/BryantCabrera/Settlers-of-Catan" target="_blank" className="project__link--code">View Code</a>
                </div>
                
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

                <div className="project3 project__card">
                    <h3 className="project__title">Relocater</h3>
                    <a href="https://github.com/BryantCabrera/relocater" target="_blank" className="project__img--link"><img src="/imgs/relocater.png" alt="Relocater Project" title="Relocater Project" className="project__img"></img></a>
                    <ul className="project__description">
                        <li>MERN Stack app that provides CA county stats to cater to users' relocation needs</li>
                        <li>Implemented Google OAuth2 authorization</li>
                        <li>Managed GitHub branches and merges</li>
                        <li>Developed algorithm that calculates estimated salary to maintain current lifestyle</li>           
                    </ul>
                    <a href="https://relocater.herokuapp.com/" target="_blank" className="project__link--deployed">Deployed Project</a>
                    <img src="/imgs/github.png" alt="GitHub" title="GitHub" className="project__link--github-icon"></img>
                    <a href="https://github.com/BryantCabrera/relocater" target="_blank" className="project__link--code">View Code</a>
                </div>
        
                <div className="project4 project__card">
                    <h3 className="project__title">Let's Play</h3>
                    <a href="https://github.com/BryantCabrera/letsplay-react" target="_blank" className="project__img--link"><img src="/imgs/settlers-of-catan.png" alt="Relocater Project" title="Relocater Project" className="project__img"></img></a>
                    <ul className="project__description">
                        <li>Full-Stack app that provides boardgame data</li>
                        <li>Implemented Flask authorization</li>
                        <li>Managed GitHub branches and merges</li>
                        <li>Developed algorithm that calculates estimated salary to maintain current lifestyle</li>           
                    </ul>
                    <a href="https://letsplay-react.herokuapp.com/" target="_blank" className="project__link--deployed">Deployed Project</a>
                    <img src="/imgs/github.png" alt="GitHub" title="GitHub" className="project__link--github-icon"></img>
                    <a href="https://github.com/BryantCabrera/letsplay-flask" target="_blank" className="project__link--code">View Code</a>
                </div>
            </div>
        )
    }
}

export default withRouter(Project1);