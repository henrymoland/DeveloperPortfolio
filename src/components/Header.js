import React from 'react';

const Header = () => {
    return (
        <div className="home-bg" id="home">
            <div className="overlay">
                <div className="container overlay-container">
                    <h1 className="display-3 heading-text center animated bounceInDown">Hi, I'm Henry. I design and build beautiful web applications</h1>
                    <div className="btn-container">
                        <button className="btn btn-outline-light btn-lg my-4 animated fadeInUp" id="header-button">View My Work</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;