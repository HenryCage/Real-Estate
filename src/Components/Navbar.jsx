import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyLogo</Link>
      </div>
      {/* <div class="nav-wrapper">
  <div class="nav-inner"> */}
     <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
       <Link to="/">HOME</Link>
       <Link to="/admin">MY ADMIN</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/properties">PROPERTIES</Link>
        <Link to="/contact">CONTACT US</Link>
      </div>
 
     <div className="call">
        <a href="tel:+2349157509505">CALL +234 915 7509 505</a>
        </div>
      <div
  className={`hamburger ${menuOpen ? 'open' : ''}`}
  onClick={() => setMenuOpen(prev => !prev)}
>
  <div className="bar bar1"></div>
  <div className="bar bar2"></div>
  <div className="bar bar3"></div>
</div>
    </nav>
  );
};

export default Navbar;
