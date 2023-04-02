import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';

function Navbar() {
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

  return (
    <nav className="navbar" ref={navbarRef}>
      <button className="navbar-toggle" onClick={handleToggle}>
        <span className="navbar-toggle-icon"></span>
      </button>
      <div className={`navbar-links ${showLinks ? 'active' : ''}`}>
        <a href="#home" onClick={() => {setShowLinks(false)}} >Home</a>
        <a href="#about" onClick={() => {setShowLinks(false)}} >About</a>
        <a href="#portfolio" onClick={() => {setShowLinks(false)}} >Portfolio</a>
        <a href="#contact" onClick={() => {setShowLinks(false)}} >Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
