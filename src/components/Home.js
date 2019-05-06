import React from 'react';
import '../index.css';


const Home = () => {
        return (
            <div className="home-bg">
                <div className="overlay">
                    <div className="container overlay-container">
                        <h1 className="display-3 heading-text">I'm a Software Developer that have a passion for creating beautiful web applications</h1>
                        <div className="btn-container">
                            <button className="btn btn-outline-light btn-lg my-4">View My Work</button>
                        </div>
                    </div>
                </div>
            </div>
        )

}
export default Home;