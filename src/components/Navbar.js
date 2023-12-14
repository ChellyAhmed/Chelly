import React, { useState, useRef, useEffect, useContext, } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SelectedPageContext } from '../App';

function Navbar({ toggleTheme, theme }) {
  const [showLinks, setShowLinks] = useState(false);
  const navbarRef = useRef(null);
  const [selectedPage, setSelectedPage] = useContext(SelectedPageContext);

  const handleToggleTheme = () => {
    toggleTheme();
    console.log("toggle theme");
  }

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
      <div className="navbar-logo"
        style={{ display: showLinks && 'none' }}>
        <Link to={"/"} onClick={() => { setShowLinks(false); setSelectedPage("") }} >Ahmed Chelly</Link>
      </div>
      <div className={`navbar-links ${showLinks ? 'active' : ''}`}>
        <Link className={`${selectedPage === '' ? 'selected' : ''}`} to={"/"} onClick={() => { setShowLinks(false); setSelectedPage("") }} >Home</Link>
        <Link className={`${selectedPage === 'about' ? 'selected' : ''}`} to={"about"} onClick={() => { setShowLinks(false); setSelectedPage("about") }} >About</Link>
        <Link className={`${selectedPage === 'portfolio' ? 'selected' : ''}`} to={"portfolio"} onClick={() => { setShowLinks(false); setSelectedPage("portfolio") }} >Portfolio</Link>
        <Link className={`${selectedPage === 'contact' ? 'selected' : ''}`} to={"contact"} onClick={() => { setShowLinks(false); setSelectedPage("contact") }} >Contact</Link>
      </div>
      <div className="navbar-end-section">
        {
          theme === 'dark' ?
            <i className="bi bi-brightness-high" onClick={handleToggleTheme}></i>
            :
            <i className="bi bi-moon" onClick={handleToggleTheme}></i>
        }
        <button className="navbar-toggle"
          aria-label="Toggle navigation"
          onClick={handleToggle}>
          <span className="navbar-toggle-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
