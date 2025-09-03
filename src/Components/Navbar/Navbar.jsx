import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <nav className="navbar">
      {/* Logo always left */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Modern Agric" />
        </Link>
      </div>

      {/* Controls row: Back + Hamburger */}
      <div className="navbar-controls">
        {!isHome && (
          <button className="back-btn" onClick={() => navigate(-1)}>
            ←
          </button>
        )}

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Nav Links */}
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>

        <li className="dropdown">
          <span>About Us</span>
          <ul className="dropdown-menu">
            <li><Link to="/about/our-culture" onClick={toggleMenu}>Our Culture</Link></li>
            <li><Link to="/about/our-team" onClick={toggleMenu}>Our Team</Link></li>
            <li><Link to="/about/projects" onClick={toggleMenu}>Projects</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Our Solutions</span>
          <ul className="dropdown-menu">
            <li><Link to="/solutions/farm-advisory" onClick={toggleMenu}>Farm Advisory</Link></li>
            <li><Link to="/solutions/agri-inputs" onClick={toggleMenu}>Agri Inputs</Link></li>
            <li><Link to="/solutions/markets" onClick={toggleMenu}>Markets</Link></li>
            <li><Link to="/solutions/renewable-energy" onClick={toggleMenu}>Renewable Energy</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Blogs</span>
          <ul className="dropdown-menu">
            <li><Link to="/blogs/farm-insights" onClick={toggleMenu}>Farm Insights</Link></li>
            <li><Link to="/blogs/news" onClick={toggleMenu}>News</Link></li>
            <li><Link to="/blogs/ebooks" onClick={toggleMenu}>eBooks</Link></li>
            <li><Link to="/blogs/webinars" onClick={toggleMenu}>Webinars</Link></li>
            <li><Link to="/blogs/magazines" onClick={toggleMenu}>Magazines</Link></li>
            <li><Link to="/blogs/reels" onClick={toggleMenu}>Reels</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Resources</span>
          <ul className="dropdown-menu">
            <li><Link to="/resources/roi-calculator" onClick={toggleMenu}>ROI Calculator</Link></li>
            <li><Link to="/resources/my-notes" onClick={toggleMenu}>My Notes</Link></li>
            <li><Link to="/resources/farm-scores" onClick={toggleMenu}>Farm Scores</Link></li>
            <li><Link to="/resources/weather" onClick={toggleMenu}>Weather</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Contact Us</span>
          <ul className="dropdown-menu">
            <li><Link to="/contact/join-us" onClick={toggleMenu}>Join Us</Link></li>
            <li><Link to="/contact/leave-message" onClick={toggleMenu}>Leave a Message</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
