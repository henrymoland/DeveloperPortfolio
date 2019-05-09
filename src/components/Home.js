import React from 'react';
import '../style.css';


const Home = () => {
        return (
        <>
            <div className="home-bg">
                <div className="overlay">
                    <div className="container overlay-container">
                    
                        <h1 className="display-3 heading-text">I'm a Software Developer that have a passion for creating beautiful applications for the web</h1>
                        <div className="btn-container">
                            <button className="btn btn-outline-light btn-lg my-4">View My Work</button>
                        </div>
                    </div>
                </div>
            </div>

            <section id="skills">
                <div className="container">
                    <h1 className="section-heading center">My skills and tools</h1>
                    <i class="fab fa-html5"></i>
                    <i className="fab fa-js"></i>
                    <i class="fab fa-node"></i>
                    <i class="fab fa-css3-alt"></i>
                    <i class="fab fa-node-alt"></i>
                    <i class="fab fa-react"></i>
                    <i class="fab fa-python"></i>
                    <i class="fab fa-less"></i>
                </div>
            </section>
        </>
        )

}
export default Home;