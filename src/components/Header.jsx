import React, { useState } from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import logo from "../assets/IMG-20260806-WA0008.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo / Brand */}
     <Link to="/" className="brand" onClick={closeMenu}>
  <img
    src={logo}
    alt="अभिषेक सिंह टाइगर"
    className="logo"
  />

  <div className="brand-name">
    <strong>अभिषेक सिंह टाइगर</strong>
    <span>जनसेवा • समर्पण • विश्वास</span>
  </div>
</Link>

        {/* Desktop + Mobile Navigation */}
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>

          <Link
            to="/"
            className="nav-link"
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="nav-link"
            onClick={closeMenu}
          >
            About
          </Link>

          <Link
            to="/mission"
            className="nav-link"
            onClick={closeMenu}
          >
            Mission
          </Link>

          <Link
            to="/gallery"
            className="nav-link"
            onClick={closeMenu}
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            className="nav-link"
            onClick={closeMenu}
          >
            Contact
          </Link>

        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Header;