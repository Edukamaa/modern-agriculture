import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo2.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Modern Agric" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>

        <li className="dropdown">
          <span>About Us</span>
          <ul className="dropdown-menu">
            <li><Link to="/about/our-culture">Our Culture</Link></li>
            <li><Link to="/about/our-team">Our Team</Link></li>
            <li><Link to="/about/projects">Projects</Link></li> {/* ✅ Added here */}
          </ul>
        </li>

        <li className="dropdown">
          <span>Our Solutions</span>
          <ul className="dropdown-menu">
            <li><Link to="/solutions/farm-advisory">Farm Advisory</Link></li>
            <li><Link to="/solutions/agri-inputs">Agri Inputs</Link></li>
            <li><Link to="/solutions/markets">Markets</Link></li>
            <li><Link to="/solutions/renewable-energy">Renewable Energy</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Blogs</span>
          <ul className="dropdown-menu">
            <li><Link to="/blogs/farm-insights">Farm Insights</Link></li>
            <li><Link to="/blogs/news">News</Link></li>
            <li><Link to="/blogs/ebooks">eBooks</Link></li>
            <li><Link to="/blogs/webinars">Webinars</Link></li>
            <li><Link to="/blogs/magazines">Magazines</Link></li>
            <li><Link to="/blogs/reels">Reels</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Resources</span>
          <ul className="dropdown-menu">
            <li><Link to="/resources/roi-calculator">ROI Calculator</Link></li>
            <li><Link to="/resources/my-notes">My Notes</Link></li>
            <li><Link to="/resources/farm-scores">Farm Scores</Link></li>
            <li><Link to="/resources/weather">Weather</Link></li>

          </ul>
        </li>

        <li className="dropdown">
          <span>Contact Us</span>
          <ul className="dropdown-menu">
            <li><Link to="/contact/join-us">Join Us</Link></li>
            <li><Link to="/contact/leave-message">Leave a Message</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
