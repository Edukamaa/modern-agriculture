// src/Components/CallToAction/CallToAction.jsx
import React from "react";
import "./CallToAction.css";
import bgImage from "../../assets/ploughedland1.jpg";

const CallToAction = () => {
  return (
    <section
      className="cta-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="cta-overlay">
        <div className="cta-content">
          <h2>Need Solutions to Digitize Your Agricultural Value Chain and Boost Farm Productivity?</h2>
          <p>
            Get in touch with Kamara Agricultural Solutions to discuss how our innovative technologies and expert support can transform your farming operations. We also help you meet compliance and sustainability standards.
          </p>
          <button className="cta-button">Book a Consultation Call Today</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
