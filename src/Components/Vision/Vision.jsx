import React from "react";
import "./Vision.css";
import cowsImg from "../../assets/cows2.jpg";
import soybeansImg from "../../assets/soybeans1.jpg";

// Reusable Card Component
const InfoCard = ({ title, subtitle, text, list, imgSrc, imgAlt, reverse }) => {
  return (
    <div className={`info-card ${reverse ? "reverse" : ""}`}>
      {/* Image */}
      <div className="card-image">
        <img src={imgSrc} alt={imgAlt} />
      </div>

      {/* Text */}
      <div className="card-text">
        <h2 className="section-title">{title}</h2>
        {Array.isArray(text) ? (
          text.map((p, i) => <p key={i} className="section-paragraph">{p}</p>)
        ) : (
          <p className="section-paragraph">{text}</p>
        )}
        {subtitle && <h3 className="section-subtitle">{subtitle}</h3>}
        {list && (
          <ul className="section-list">
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Main Vision Component
const Vision = () => {
  return (
    <section className="vision-section">
      {/* Vision Card */}
      <InfoCard
        title="Discover Kamara Agric Solutions – Our Vision"
        text={[
          "At Kamara Agricultural Solutions, we see a future where every smallholder farmer, livestock keeper, and fisher in Sub-Saharan Africa can access the tools, knowledge, and markets they need to thrive. We are committed to transforming African agriculture into a competitive, sustainable, and technology-driven sector that uplifts rural communities.",
          "Our vision is to build a resilient, food-secure Africa, where agriculture is not just a means of survival, but a path to prosperity. We believe that with the right technology and training, farmers can unlock their full potential and compete on a global scale."
        ]}
        imgSrc={cowsImg}
        imgAlt="Cows"
      />

      {/* Mission Card */}
      <InfoCard
        title="Our Mission"
        text="Our mission is to digitally transform agricultural value chains—connecting farmers directly with markets, advisory services, and resources that improve productivity and profitability."
        list={[
          "Increase farm productivity through modern techniques and precision farming.",
          "Facilitate access to quality inputs like seeds, fertilizers, and tools.",
          "Promote renewable energy solutions for sustainable farming.",
          "Provide market linkages that ensure fair prices for farmers."
        ]}
        imgSrc={soybeansImg}
        imgAlt="Soybeans"
        reverse
      />
    </section>
  );
};

export default Vision;
