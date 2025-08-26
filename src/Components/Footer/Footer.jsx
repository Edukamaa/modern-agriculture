import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">

          {/* Services */}
          <div className="footer-col">
            <h5>Our Services</h5>
            <ul>
              <li><a href="#">Precision Farming Tools</a></li>
              <li><a href="#">Smart Irrigation Systems</a></li>
              <li><a href="#">Digital Co-op Management</a></li>
              <li><a href="#">AI Crop Health Monitoring</a></li>
              <li><a href="#">Farmer Training & Support</a></li>
              <li><a href="#">Renewable Energy Solutions</a></li>
              <li><a href="#">Market Integration Platforms</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5>Contact Us</h5>
            <p>Email: info@kamaraagriculturalsolutions.com</p>
            <p>Phone: +254 712 907 068</p>
            <p>Address: Nairobi, Kenya</p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">About Kamara</a></li>
              <li><a href="#">Our Solutions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div className="footer-col">
            <h5>About Kamara Agricultural Solutions</h5>
            <p>
              Kamara Agricultural Solutions is a technology-driven organization committed 
              to empowering smallholder farmers across Sub-Saharan Africa. Our mission is 
              to provide innovative, affordable, and sustainable solutions that improve 
              productivity, enhance climate resilience, and connect farmers directly to markets.
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>&copy; 2025 Kamara Agricultural Solutions. All rights reserved.</p>
          <div className="footer-socials">
            <a href="http://tiktok.com/@kamau.edward5" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/kamaukariuki100/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://x.com/kamauedward100" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://wa.me/254722785480" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="https://www.facebook.com/kamaraagriculturalsolutions" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/edwardk-kariuki" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
