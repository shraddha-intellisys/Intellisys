
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BiChevronDown } from 'react-icons/bi';
import intellisys_logo from "../assestes/intellisys_logo.gif";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (dropdownOpen) setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
    
    if (window.innerWidth <= 1024) {
      setMenuOpen(true);
    }
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeAllMenus();
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        closeAllMenus();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="navbar-logo-container">
        <img 
          src={intellisys_logo} 
          alt="Intellisys Logo" 
          className="navbar-logo" 
        />
      </Link>

      <button 
        className="menu-toggle" 
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <FontAwesomeIcon 
          icon={menuOpen ? faTimes : faBars} 
          className="menu-icon" 
          style={{ height: '32px', width: '32px' }}
        />
      </button>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeAllMenus}>Home</Link>

        <div className="services-dropdown">
          <button 
            className={`dropdown-button ${dropdownOpen ? 'active' : ''}`}
            onClick={toggleDropdown}
          >
            Services
            <BiChevronDown className={`dropdown-icon ${dropdownOpen ? 'rotate' : ''}`} />
          </button>
          <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
            <Link to="/webapp" className="dropdown-link" onClick={closeAllMenus}>Website Development</Link>
            <Link to="/mobileapp" className="dropdown-link" onClick={closeAllMenus}>Mobile App Development</Link>
            <Link to="/fullstackdevelopment" className="dropdown-link" onClick={closeAllMenus}>Full Stack Development</Link>
            <Link to="/cloud" className="dropdown-link" onClick={closeAllMenus}>Cloud Solutions</Link>
            <Link to="/cyber" className="dropdown-link" onClick={closeAllMenus}>Cybersecurity</Link>
            <Link to="/uiux" className="dropdown-link" onClick={closeAllMenus}>UI/UX</Link>
            <Link to="/softwaretesting" className="dropdown-link" onClick={closeAllMenus}>Software Testing</Link>
          </div>
        </div>

        <Link to="/technology" className="nav-link" onClick={closeAllMenus}>Technology</Link>
        <Link to="/career" className="nav-link" onClick={closeAllMenus}>Career</Link>
        <Link to="/about" className="nav-link" onClick={closeAllMenus}>About Us</Link>
        <Link to="/contact" className="nav-link" onClick={closeAllMenus}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;