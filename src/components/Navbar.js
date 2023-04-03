import React, { useState, useRef, useEffect, useContext, } from 'react';
import '../styles/dist/navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { SelectedPageContext } from '../App';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const navbarRef = useRef(null);
  const [selectedPage, setSelectedPage] = useContext(SelectedPageContext);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setShowLinks(false);
    }
  };

  const thisPage = useLocation().pathname.slice(1);
  useEffect(() => {
    setSelectedPage(thisPage);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setSelectedPage, thisPage]);

  return (
    <nav className="navbar" ref={navbarRef}>
      <button className="navbar-toggle" onClick={handleToggle}>
        <span className="navbar-toggle-icon"></span>
      </button>
      <div className={`navbar-links ${showLinks ? 'active' : ''}`}>
        <Link className={`${selectedPage === '' ? 'selected' : ''}`} to={"/"} onClick={() => { setShowLinks(false); setSelectedPage("") }} >Home</Link>
        <Link className={`${selectedPage === 'about' ? 'selected' : ''}`} to={"about"} onClick={() => { setShowLinks(false); setSelectedPage("about") }} >About</Link>
        <Link className={`${selectedPage === 'portfolio' ? 'selected' : ''}`} to={"portfolio"} onClick={() => { setShowLinks(false); setSelectedPage("portfolio") }} >Portfolio</Link>
        <Link className={`${selectedPage === 'contact' ? 'selected' : ''}`} to={"contact"} onClick={() => { setShowLinks(false); setSelectedPage("contact") }} >Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
