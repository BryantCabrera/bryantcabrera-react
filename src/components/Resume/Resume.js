import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../App.css';

class Resume extends Component {
    render() {
        return (
            <div className="resume--component route">
                <h2>Resume</h2>
                <section id="resume">
                    <div className="resume">
                        <div className="resume__about">
                            Bryant Cabrera
                        </div>
                        <div className="resume__profile--title resume__title">
                            Profile
                        </div>
                        <ul className="resume__profile resume__content">
                            <li>•	Strong 6-year background successfully managing organizations to achieve business goals.</li>
                            <li>•	Robust math, science, and tech background.</li>
                            <li>•	Expansive connection to Stanford & UCLA alumni networks and Los Angeles non-profit/cultural organizations.</li>
                            <li>•	Fluent in English and proficient in Spanish.</li>             
                        </ul>
                        <div className="resume__education--title resume__title">
                            Education
                        </div>
                        <div className="resume__education resume__content">
                            Stanford University, Bachelor of Arts, Human Biology <span className="resume__date">2012</span><br/>
                            Specialized in nutrition, biochemical functions, and human anatomy.   
                        </div>
                        <div className="resume__experience--title resume__title">
                            Experience
                        </div>
                        <div className="resume__experience resume__content">
                            <div className="resume__content--item">
                                <div className="resume__content--item__header"><span className="resume__content--item__title">Bryant’s Tutoring, Los Angeles, CA</span><span className="resume__content--item__date">06/12 – present</span></div>
                                <span className="resume__content--item__position">Founder, Private Tutor</span><br/>
                                <span className="resume__content--item__description">Self-started, independent, full-service tutoring company.</span><br/>
                                <ul className="resume__content--item__list">
                                    <li>
                                        Manage 11 clients simultaneously.  Clientele portfolio of over 40 students.
                                    </li>
                                    <li>
                                        Created guerrilla marketing strategy, posting on social media and tutoring at local high schools.
                                    </li>
                                    <li>
                                        100% of students scored a 4 or 5 on Advanced Placement tests.
                                    </li>
                                    <li>
                                        90% of high school and college students improved grades in math courses.
                                    </li>
                                </ul>
                            </div>
                            <div className="resume__content--item">
                                <div className="resume__content--item__header"><span className="resume__content--item__title">Cardinal Academics, Los Angeles, CA</span><span className="resume__content--item__date">08/15 – present</span></div>
                                <span className="resume__content--item__position">Private Tutor</span><br/>
                                <span className="resume__content--item__description">Full-service tutoring and test-prep company.</span><br/>
                                <ul className="resume__content--item__list">
                                    <li>
                                        Crafted individualized learning schedules, featuring weekly progress reports that helped students improve by at least 20% on college prep and Advanced Placement tests.
                                    </li>
                                    <li>
                                        Managed up to 14 clients and SAT/ACT/ISEE/subject programs simultaneously.
                                    </li>
                                    <li>
                                        Triaged client needs and assigned to appropriate tutors.
                                    </li>
                                    <li>
                                        One of few tutors to receive an increase in pay rate from $40/hour to $45/hour.
                                    </li>
                                </ul>
                            </div>
                            <div className="resume__content--item">
                                <div className="resume__content--item__header"><span className="resume__content--item__title">Lootsie, Culver City, CA</span><span className="resume__content--item__date">03/16 – 11/16</span></div>
                                <span className="resume__content--item__position">Account Director</span><br/>
                                <span className="resume__content--item__description">Software company fueling rewards program for apps and developing ad-hoc loyalty campaigns for clients.</span><br/>
                                <ul className="resume__content--item__list">
                                    <li>
                                        Managed over 20 brand relationships, including Suja Juice, Perfect 365, We Heart It, and My Yoga Works.
                                    </li>
                                    <li>
                                        Utilized SQL to report KPI to stakeholders.
                                    </li>
                                    <li>
                                        Tested prototypes and parsed through JSON with CTO to troubleshoot customers’ bug reports.
                                    </li>
                                    <li>
                                        Designed pitch decks using Adobe Photoshop and Invision.
                                    </li>
                                    <li>
                                        Developed and documented outreach, acquisition, maintenance, and marketing workflow.
                                    </li>
                                    <li>
                                        Implemented and conducted internal training sessions for 3 senior members and 6 interns to adopt the SalesForceIQ and outreach.io customer relationship management systems to improve company efficiency.
                                    </li>
                                    <li>
                                        Managed intern marketing projects, which developed a system for converting online leads, including    creation of over 20 blog posts and 3 email campaigns.
                                    </li>
                                </ul>
                            </div>
                            <div className="resume__content--item">
                                <div className="resume__content--item__header"><span className="resume__content--item__title">Intergenerational Queer Anthology, West Hollywood, CA</span><span className="resume__content--item__date">02/15 – 10/15</span></div>
                                <span className="resume__content--item__position">Marketing and Branding Coordinator</span><br/>
                                <span className="resume__content--item__description">Organization establishing a space for LGBT from all generations to communicate and share knowledge.</span><br/>
                                <ul className="resume__content--item__list">
                                    <li>
                                        Co-created company name, direction, project goals, and branding.
                                    </li>
                                    <li>
                                        Co-produced a video, featuring 30-person team, that produced over 30 submissions to written anthology.
                                    </li>
                                </ul>
                            </div>
                            <div className="resume__content--item">
                                <div className="resume__content--item__header"><span className="resume__content--item__title">Festival of Philippine Arts & Culture at Grand Park, FilAm Arts, Los Angeles, CA</span><span className="resume__content--item__date">07/14 – 07/15</span></div>
                                <span className="resume__content--item__position">Filipino Artist Network Coordinator</span><br/>
                                <span className="resume__content--item__description">Cultural group promoting awareness and celebration of Filipino art.</span><br/>
                                <ul className="resume__content--item__list">
                                    <li>
                                        Successfully closed over 30 artists, increasing recruitment of visual artists by a factor of 7.
                                    </li>
                                    <li>
                                        Boosted sales from $500 to over $5,000.
                                    </li>
                                    <li>
                                        Executed guerrilla marketing strategy, attending weekly local performances to recruit artists, speaking at  local colleges, and canvassing at local businesses.
                                    </li>
                                </ul>
                            </div>
                            <div className="resume__content--item">
                                <div className="resume__content--item__header"><span className="resume__content--item__title">Geriatrics and Internal Medicine, Ronald Reagan UCLA Medical Center, Westwood, CA</span><span className="resume__content--item__date">10/13 – 04/14</span></div>
                                <span className="resume__content--item__position">Research Data Manager & Medical Scribe Assistant</span><br/>
                                <span className="resume__content--item__description">Research group specializing in disease prevention.</span><br/>
                                <ul className="resume__content--item__list">
                                    <li>
                                        Managed over 500 patient files and surveys.  Responsible for file creation, survey dissemination, data entry, and database management.
                                    </li>
                                    <li>
                                        Calibrated Optical Character Recognition technology to streamline data entry for future patients.
                                    </li>
                                    <li>
                                        Created documentation for maintaining database of all 4 Nurse Practitioners in the Dementia Care Program.
                                    </li>
                                    <li>
                                        Managed and trained a team of work-study students in data entry.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="resume__extracurriculars--title resume__title">
                            Extracurriculars
                        </div>
                        <div className="resume__extracurriculars resume__content">
                            <div className="resume__content--item">
                                <div className="resume__content--item__header"><span className="resume__content--item__title">D.I.C.E. Lives, AIDS Project Los Angeles, Peer Health Educator</span><span className="resume__content--item__date">01/15-02/16</span></div> 
                                <span className="resume__content--item__description">Recruited over 20 minority youth to HIV prevention workshop presentations.</span>
                            </div>
                            <div className="resume__content--item">
                                <div className="resume__content--item__header"><span className="resume__content--item__title">Anakbayan Silicon Valley, Chapter Forming Committee</span><span className="resume__content--item__date">03/10 – 06/12</span></div>
                                <span className="resume__content--item__description">Co-established youth organization that spearheaded 21 joint statements and rallies on political and socioeconomic issues that Filipinos were facing domestically and abroad.</span> 
                            </div>
                            <div className="resume__content--item">
                                <div className="resume__content--item__header"><span className="resume__content--item__title">Kayumanggi, Stanford University, Executive Director</span><span className="resume__content--item__date">09/08 – 06/12</span></div>
                                <span className="resume__content--item__description">Produced Stanford’s 1st Filipino Cultural Night, grossing over $10,000.  Directed cast of over 70 students.</span>  
                            </div>
                        </div>
                        <div className="resume__publications--title resume__title">
                            Publications
                        </div>
                        <div className="resume__publications resume__content">
                            Changing Eating Behavior in Dining Halls Using an Iterative Design Process. McClain, A.D., Hekler, E., 
                            Cabrera B. (April 2012).  Presented at the 2012 Society for Behavioral Medicine.            
                        </div>
                        <div className="resume__soft-skills--title resume__title">
                            Soft Skills
                        </div>
                        <ul className="resume__soft-skills resume__content">
                            <li>•	Excellent problem-solving skills</li>
                            <li>•	Strong work ethic</li>
                            <li>•	Incredible time management abilities</li>
                            <li>•	Great communication skills</li>
                            <li>•	Active community builder and team player</li>
                            <li>•	Positive attitude</li>
                            <li>•	Ability to accept and learn from criticism</li>
                            <li>•	Demonstrable flexibility and adaptability</li>               
                        </ul>
                    </div> 
                </section>
            </div>
        )
    }
}

export default withRouter(Resume);