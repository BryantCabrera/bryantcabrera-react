import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../App.css';

class Main extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                component="main"
                className="about route"
                transitionName="main"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={true}
                transitionLeaveTimeout={300}>
            {/* <main className="about route"> */}
               <h1 className="about__name">Bryant Cabrera</h1>
                <p className="about__summary">
                    I’m a full stack software engineer who specializes in the MERN stack. My experience with Adobe and Apple design tools enriches my web development skills, redefining what it means to be a full stack developer.
                </p>
                <h2 className="skills__title">Skills</h2>
                <div className="skills">
                    <div className="html skill">
                        <img src="/imgs/html5.png" alt="HTML5" title="HTML5" className="skill__img"></img>
                        <p className="skill__text">HTML 5</p>
                    </div>
                    <div className="css skill">
                        <img src="/imgs/css3.png" alt="CSS3" title="CSS3" className="skill__img"></img>
                        <p className="skill__text">CSS 3</p>
                    </div>
                    <div className="javascript skill">
                        <img src="/imgs/javascript.png" alt="JavaScript" title="JavaScript" className="skill__img"></img>
                        <p className="skill__text">JavaScript</p>
                    </div>
                    <div className="jquery skill">
                        <img src="/imgs/jquery.png" alt="jQuery" title="jQuery" className="skill__img"></img>
                        <p className="skill__text">jQuery</p>
                    </div>
                    <div className="mongodb skill">
                        <img src="/imgs/mongodb.png" alt="MongoDB" title="MongoDB" className="skill__img"></img>
                        <p className="skill__text">MongoDB</p>
                    </div>
                    <div className="mongoose skill">
                        <img src="/imgs/mongoose.png" alt="Mongoose" title="Mongoose" className="skill__img"></img>
                        <p className="skill__text">Mongoose</p>
                    </div>
                    <div className="express skill">
                        <img src="/imgs/node.png" alt="Express" title="Express" className="skill__img"></img>
                        <p className="skill__text">Express</p>
                    </div>
                    <div className="React skill">
                        <img src="/imgs/react.png" alt="React" title="React" className="skill__img"></img>
                        <p className="skill__text">React</p>
                    </div>
                    <div className="node skill">
                        <img src="/imgs/node.png" alt="Node" title="Node" className="skill__img"></img>
                        <p className="skill__text">Node</p>
                    </div>
                    <div className="python skill">
                        <img src="/imgs/python.png" alt="Python" title="Python" className="skill__img"></img>
                        <p className="skill__text">Python</p>
                    </div>
                    <div className="firebase skill">
                        <img src="/imgs/firebase.svg" alt="Firebase" title="Firebase" className="skill__img"></img>
                        <p className="skill__text">Firebase</p>
                    </div>
                    <div className="django skill">
                        <img src="/imgs/django.png" alt="Django" title="Django" className="skill__img"></img>
                        <p className="skill__text">Django</p>
                    </div>
                    <div className="flask skill">
                        <img src="/imgs/flask.png" alt="Flask" title="Flask" className="skill__img"></img>
                        <p className="skill__text">Flask</p>
                    </div>
                    <div className="sql skill">
                        <img src="/imgs/sql.png" alt="SQL" title="SQL" className="skill__img"></img>
                        <p className="skill__text">SQL</p>
                    </div>
                    <ul className="skills__list">
                        <li className="skills__list--item">React Semantic-UI | RESTful routing | PostgreSQL | JSON | Web Sockets | OAuth2 | RegEx | MVC | Heroku | Git | GitHub | Terminal</li>
                        <li className="skills__list--item">Adobe Illustrator | Adobe Photoshop | Adobe InDesign | Adobe XD | Adobe Dreamweaver | Adobe After Effects | Final Cut Pro X | Compressor 4 | Motion 5 | YouTube</li>
                        <li className="skills__list--item">Microsoft Office | Microsoft Word | Microsoft Excel | Microsoft PowerPoint | Microsoft Outlook | SalesForce</li>
                    </ul>
                </div>
            {/* </main> */}
            </ReactCSSTransitionGroup>
        )
    }
}

export default withRouter(Main);