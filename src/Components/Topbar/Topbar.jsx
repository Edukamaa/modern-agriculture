import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">

        {/* Contact Info */}
        <div className="contact-info">
          <span><strong>Email:</strong> info@kamaraagriculturalsolutions.com</span>
          <span className="ms-md-3"><strong>Phone:</strong> +254-722-785-480</span>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons mt-2 mt-md-0">
          {/* TikTok */}
          <a
            href="http://tiktok.com/@kamau.edward5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <i className="bi bi-tiktok"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/kamaukariuki100/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/kamauedward100?t=wI5t_OZBdHmWv-aqeEmqTw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <i className="bi bi-twitter-x"></i>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/254722785480"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="bi bi-whatsapp"></i>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61552110890263"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/edwardk-kariuki"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
