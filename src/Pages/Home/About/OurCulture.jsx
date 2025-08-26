import React from "react";
import "./OurCulture.css";
import {
  FaHandsHelping,
  FaSeedling,
  FaUsers,
  FaAward,
  FaLeaf,
  FaTractor,
} from "react-icons/fa";

import cabbage1 from "../../../assets/cabbage1.jpg";
import cows1 from "../../../assets/cows1.jpg";
import poultry2 from "../../../assets/poultry2.jpg";
import tractor1 from "../../../assets/tractor1.jpg";
import tractor2 from "../../../assets/tractor2.jpg";
import poultry3 from "../../../assets/poultry3.jpg";
import onion4 from "../../../assets/onion4.jpg";
import maizefarm3 from "../../../assets/maizefarm3.jpg";
import irrigation from "../../../assets/irrigation.jpg";
import irrigation1 from "../../../assets/irragation1.jpg";

const OurCulture = () => {
  return (
    <div className="culture-container">
      {/* Intro Section */}
      <section className="culture-intro">
        <h2> Our Culture at Kamara Agricultural Solutions</h2>
        <p>
          We are more than an agribusiness – we are a family of innovators,
          dreamers, and doers. At Kamara Agric Solutions, our culture is rooted
          in values that uplift farmers, empower communities, and drive
          sustainable growth in agriculture.
        </p>
      </section>

      {/* Core Values */}
      <section className="culture-section">
        <h3>🌟 Core Values</h3>
        <div className="culture-grid">
          <div className="culture-card">
            <FaSeedling className="icon" />
            <h4>Sustainability</h4>
            <p>We promote eco-friendly farming and renewable energy solutions.</p>
          </div>
          <div className="culture-card">
            <FaHandsHelping className="icon" />
            <h4>Integrity</h4>
            <p>We are honest, transparent, and driven by trust with farmers and clients.</p>
          </div>
          <div className="culture-card">
            <FaUsers className="icon" />
            <h4>Collaboration</h4>
            <p>We build strong partnerships that strengthen communities.</p>
          </div>
          <div className="culture-card">
            <FaAward className="icon" />
            <h4>Excellence</h4>
            <p>We aim to deliver top-quality services and innovative solutions.</p>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="culture-section reverse">
        <div className="culture-text">
          <h3>🤝 Team Culture & Work Ethic</h3>
          <p>
            Our team thrives on collaboration, creativity, and problem-solving.
            We embrace technology, value inclusivity, and encourage innovation
            at every step. Whether in the field or at the office, we work
            together as one to achieve excellence.
          </p>
        </div>
        <div className="culture-image">
          <img src={tractor1} alt="Team working" />
        </div>
      </section>

      {/* Stories & Achievements */}
      <section className="culture-section">
        <div className="culture-image">
          <img src={maizefarm3} alt="Farmer success" />
        </div>
        <div className="culture-text">
          <h3>🏆 Stories & Achievements</h3>
          <ul>
            <li>✅ Trained 500+ farmers in digital farming solutions.</li>
            <li>✅ Increased yields by 40% through modern practices.</li>
            <li>✅ Established partnerships with 10+ agri-tech innovators.</li>
            <li>✅ Empowered women and youth in agribusiness projects.</li>
          </ul>
        </div>
      </section>

      {/* Visuals / Slider */}
      <section className="culture-visuals">
        <h3>📸 Life at Kamara Agric Solutions</h3>
        <div className="culture-slider">
          <img src={cows1} alt="Cows" />
          <img src={poultry2} alt="Poultry" />
          <img src={cabbage1} alt="Cabbages" />
          <img src={onion4} alt="Onions" />
          <img src={irrigation} alt="Irrigation" />
          <img src={tractor2} alt="Tractor" />
          <img src={poultry3} alt="More Poultry" />
          <img src={irrigation1} alt="Irrigation 2" />
        </div>
      </section>

      {/* CTA */}
      <section className="culture-cta">
        <h2>Be Part of the Change </h2>
        <p>
          Whether you’re a farmer, an investor, or simply passionate about
          agriculture – there’s a place for you at Kamara Agric Solutions.
        </p>
        <button className="cta-btn">Join Us</button>
        <button className="cta-btn secondary">Learn More</button>
      </section>
    </div>
  );
};

export default OurCulture;
