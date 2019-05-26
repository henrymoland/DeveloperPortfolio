import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <a className="navbar-brand" href="/"><i class="fas fa-laptop-code"></i> Henry Moland</a>
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} className="nav-link">   
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} className="nav-link">   
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} className="nav-link">   
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} className="nav-link">   
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="blog" spy={true} smooth={true} offset={50} duration={500} className="nav-link">
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} className="nav-link"> 
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="create" spy={true} smooth={true} offset={50} duration={500} className="nav-link"> 
                            Create Post
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;