import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-left">
                <Link to="/" className="nav-home"><h1>Katie Kimura</h1></Link>
            </div>
            <div  className="nav-right">
                <Link to="/about" className="nav-item">About Me</Link>
                <Link to="/projects" className="nav-item">Projects</Link>
            </div>
            
        </nav>
    );
};

export default Navbar;