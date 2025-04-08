import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/" className="nav-home">
          <h1>Katie Kimura</h1>
        </Link>
      </div>
      <div className="nav-right">
        <a
          href="/Katie-Kimura-Resume.pdf"
          target="_blank"
          download
          title="Download my resume"
          className="nav-item"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
