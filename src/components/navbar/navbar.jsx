import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <div className="nav-bar">
      <div className="nav-bar-left">
        <Link to="/">
          <h1>JMC</h1>
        </Link>
      </div>
      <div className="nav-bar-right">
        <Link to="/about" className="nav-links-box">
          <div className="nav-links">About Us</div>
        </Link>
        <Link to="/jobs" className="nav-links-box">
          <div className="nav-links">Previous Work</div>
        </Link>
        <Link to="/contact" className="nav-links-box">
          <div className="nav-links">Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
