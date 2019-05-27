import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <div className="project-wrapper">
                <h3 className="section-heading">Things I have worked On</h3>

                <div className="box" style={{background: "url(https://cdn-images-1.medium.com/max/1600/1*tPiV1idpK1xa05Rv_ImK-Q.png) no-repeat center center", backgroundSize: "cover"}}>
                    <div className="hover-box">
                        <h3 className="project-box-heading">Pay Me</h3>
                        <p>Project 2 is an application created to allow users send message. It was created with react</p>
                        <h6>Tech Stack:</h6>
                        <div className="row" style={{ marginTop: 5, paddingLeft: 15}}>
                            <div className ="col">
                                <p className="tech-stack-text">React</p>
                                <p className="tech-stack-text">CSS3</p>
                                <p className="tech-stack-text">Node</p>
                            </div>
                            <div className ="col">
                                <p className="tech-stack-text">Firebase</p>
                            </div>
                        </div>
                                <button className="btn btn-light" style={{marginTop: 25}}>Preview Project</button>
                    </div>
                </div>

                <div className="box" style={{background: "url(https://www.sketchappsources.com/resources/source-image/annuacion-web-ui-kit.jpg) no-repeat center center", backgroundSize: "cover"}}>
                    <div className="hover-box">
                        <h3 className="project-box-heading">Pay Me</h3>
                        <p>Project 2 is an application created to allow users send message. It was created with react</p>
                        <h6>Tech Stack:</h6>
                        <div className="row" style={{ marginTop: 5, paddingLeft: 15}}>
                            <div className ="col">
                                <p className="tech-stack-text">React</p>
                                <p className="tech-stack-text">CSS3</p>
                                <p className="tech-stack-text">Node</p>
                            </div>
                            <div className ="col">
                                <p className="tech-stack-text">Firebase</p>
                            </div>
                        </div>
                                <button className="btn btn-light" style={{marginTop: 25}}>Preview Project</button>
                    </div>
                </div>

                <div className="box" style={{background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa61qy73dtm_3BZfFrhPtPeZti-swL5PpZbSewTcBxeo5IR5LM) no-repeat center center", backgroundSize: "cover"}}>
                    <div className="hover-box">
                        <h3 className="project-box-heading">Pay Me</h3>
                        <p>Project 2 is an application created to allow users send message. It was created with react</p>
                        <h6>Tech Stack:</h6>
                        <div className="row" style={{ marginTop: 5, paddingLeft: 15}}>
                            <div className ="col">
                                <p className="tech-stack-text">React</p>
                                <p className="tech-stack-text">CSS3</p>
                                <p className="tech-stack-text">Node</p>
                            </div>
                            <div className ="col">
                                <p className="tech-stack-text">Firebase</p>
                            </div>
                        </div>
                                <button className="btn btn-light" style={{marginTop: 25}}>Preview Project</button>
                    </div>
                </div>
    
            </div>     
        </section>
    )
}

export default Projects;