import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      {/* <div class="nav-wrapper">
  <div class="nav-inner"> */}
     <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="/">ABOUT US</a>
        <a href="/about">PROJECTS</a>
        <a href="/projects">BLOG</a>
        <a href="/projects">MY ESTATE</a>
        <a href="/contact">CONTACT US</a>
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
