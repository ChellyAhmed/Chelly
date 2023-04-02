import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';

function Navbar({ selectedPage, newPage }) {
  const [showLinks, setShowLinks] = useState(false);
  const navbarRef = useRef(null);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setShowLinks(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changePage = (page) => {
    newPage(page);
  }

  return (
    <nav className="navbar" ref={navbarRef}>
      <button className="navbar-toggle" onClick={handleToggle}>
        <span className="navbar-toggle-icon"></span>
      </button>
      <div className={`navbar-links ${showLinks ? 'active' : ''}`}>
        <a className={`${selectedPage === 'home' ? 'selected' : ''}`} href="#home" onClick={() => { setShowLinks(false); changePage("home") }} >Home</a>
        <a className={`${selectedPage === 'about' ? 'selected' : ''}`} href="#about" onClick={() => { setShowLinks(false); changePage("about") }} >About</a>
        <a className={`${selectedPage === 'portfolio' ? 'selected' : ''}`} href="#portfolio" onClick={() => { setShowLinks(false); changePage("portfolio") }} >Portfolio</a>
        <a className={`${selectedPage === 'contact' ? 'selected' : ''}`} href="#contact" onClick={() => { setShowLinks(false); changePage("contact") }} >Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
