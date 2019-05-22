import React from 'react';
import '../style.css';


const Home = () => {
        return (
        <>
            <div className="home-bg">
                <div className="overlay">
                    <div className="container overlay-container">
                    
                        <h1 className="display-3 heading-text center">Hi, I'm Henry. I design and build beautiful web applications</h1>
                        <div className="btn-container">
                            <button className="btn btn-outline-light btn-lg my-4">View My Work</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <section id="skills">
                <div className= "container">
                <div className="skills-wrapper">
                    
                    <h3 className="section-heading">My skills and tools</h3>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i className="fab fa-html5"></i>
                            <h5 className="card-title">HTML5</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i class="fab fa-js"></i>
                            <h5 className="card-title">Javascript</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i class="fab fa-css3"></i>
                            <h5 className="card-title">CSS</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i class="fab fa-react"></i>
                            <h5 className="card-title">React</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i className="fab fa-python"></i>
                            <h5 className="card-title">Python</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i class="fab fa-node"></i>
                            <h5 className="card-title">Node</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i class="fab fa-less"></i>
                            <h5 className="card-title">Less</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i class="fab fa-react"></i>
                            <h5 className="card-title">React</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i class="fab fa-react"></i>
                            <h5 className="card-title">React</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    </div>
                </div>
             
            </section>

            <section id="projects">
                <div className="container">
                    <div className="project-wrapper">
                        <h3 className="section-heading">My projects</h3>

                        <div className="box" style={{background: "url(https://assets.wordpress.envato-static.com/uploads/2017/02/01-diagonal-slanted-web-design.jpg) no-repeat center center", backgroundSize: "cover"}}>
                        </div>


                        <div className="box" style={{background: "url(https://leerob.io/static/images/how-stripe-designs-beautiful-websites/website.png) no-repeat center center", backgroundSize: "cover"}}>
                            <div className="hover-box">
                                <h3 className="project-box-heading">Project 2</h3>
                                <p style={{fontSize: ".8rem", fontWeight: 400}}>Project 2 is an application created to allow users send message. It was created with react</p>
                                
                                <p style={{fontWeight: 700, textAlign: "center", marginTop: 5}}>Tech Stack:</p>
                                <div className="row">
                                    <div className ="col">
                                        <p style={{fontSize: ".8rem", fontWeight: 400}}>React</p>
                                        <p style={{fontSize: ".8rem", fontWeight: 400}}>CSS3</p>
                                        <p style={{fontSize: ".8rem", fontWeight: 400}}>Node</p>
                                    </div>
                                    <div className ="col">
                                        <p style={{fontSize: ".8rem", fontWeight: 400}} >Firebase</p>
                                    </div>
                                </div>

                                <button className="btn btn-light" style={{marginTop: 15}}>View Project</button>
                            </div>
                        </div>

                        <div className="box" style={{background: "url(https://assets.wordpress.envato-static.com/uploads/2017/02/01-diagonal-slanted-web-design.jpg) no-repeat center center", backgroundSize: "cover"}}>
                        </div>

                        <div className="box" style={{background: "url(https://assets.wordpress.envato-static.com/uploads/2017/02/01-diagonal-slanted-web-design.jpg) no-repeat center center", backgroundSize: "cover"}}>
                        </div>

                        <div className="box" style={{background: "url(https://assets.wordpress.envato-static.com/uploads/2017/02/01-diagonal-slanted-web-design.jpg) no-repeat center center", backgroundSize: "cover"}}>
                        </div>

                        <div className="box" style={{background: "url(https://assets.wordpress.envato-static.com/uploads/2017/02/01-diagonal-slanted-web-design.jpg) no-repeat center center", backgroundSize: "cover"}}>
                        </div>
                    </div>
                </div>
            </section>
        </>
        )

}
export default Home;