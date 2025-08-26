// src/Components/Welcome/Welcome.jsx
import React from "react";
import "./Welcome.css";
import heroImg from "../../assets/combine harverster1.jpg";

const Welcome = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Kamara Agricultural Solutions</h1>
        <h2 className="hero-subtitle">
          African-led technology transfer organization delivering cutting-edge, 
          farmer-focused innovations to empower agricultural transformation 
          across Sub-Saharan Africa.
        </h2>
        <p className="hero-description">
          Founded in 2025, Kamara Agricultural Solutions is on a mission to redefine 
          farming for the modern era. We equip smallholder farmers, cooperatives, and 
          agribusinesses with practical, affordable, and scalable technologies to 
          overcome yield constraints, optimize resources, and adapt to a changing 
          climate.
        </p>
        <p className="hero-description">
          From precision farming tools to smart irrigation systems, from digital co-op 
          management platforms to AI-powered crop health monitoring, we bring the 
          future of farming to the present — right in the heart of Africa.
        </p>
        <p className="hero-description">
          Our vision is a prosperous, resilient, and food-secure Africa where every 
          farmer thrives through innovation, knowledge sharing, and technology 
          adoption.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn primary-btn"> Explore Our Solutions</button>
          <button className="hero-btn secondary-btn"> Join the Movement</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Combine Harvester" />
      </div>
    </section>
  );
};

export default Welcome;
