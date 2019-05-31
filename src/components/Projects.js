import React from 'react';


const Projects = () => {
    return (
        <section id="projects">
            <div className="project-wrapper">
                <h3 className="section-heading">Things I have worked On</h3>
                <div className="flex-container">
                    <div className="project-image-container">
                        <div className="box" style={{background: "url(http://i68.tinypic.com/2rxv792.png) no-repeat center center", backgroundSize: "cover"}}>    
                        </div>
                    </div>
                    <div className="project-text-box">
                        <h2 className="project-box-heading">Noteful</h2>
                        <p>Noteful is a note taking application that allow users to create notes. It is built with React on the frontend and Firebase on the backend for storing user data. Firebase authentication is also use to user authentication via the sign up/login form and Google login.</p>
                        <h5>Tech Stack:</h5>
                        <div className="row" style={{ marginTop: 10 }}>
                            <div className ="col">
                                    <p className="tech-stack-text">React, Node, Express, Materialize CSS and Firebase</p> 
                            </div>     
                        </div>
                        <button className="btn btn-lg btn-light" style={{marginTop: 25}}>
                            Preview Project
                        </button>
                    </div>
                </div>
            </div>     
        </section>
    )
}

export default Projects;