import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <a className="navbar-brand" href="/"><i class="fas fa-laptop-code"></i> Henry Moland</a>
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-link">Blog</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/create" className="nav-link">Create Post</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;