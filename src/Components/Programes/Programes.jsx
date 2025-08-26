import React from "react";
import "./Programes.css";

import farmAdvisoryImg from "../../assets/agricmoney2.jpg";
import agriInputsImg from "../../assets/ploughedland2.jpg";
import marketsImg from "../../assets/agricmoney3.jpg";
import renewableEnergyImg from "../../assets/biogas1.jpg";

const programes = [
  {
    title: "Farm Advisory",
    img: farmAdvisoryImg,
    description:
      "Practical agronomy and field support: crop planning, pest & disease scouting, nutrient management, and seasonal advice to increase yields and reduce risk.",
  },
  {
    title: "Agri Inputs",
    img: agriInputsImg,
    description:
      "Reliable access to quality seeds, fertilizers, and farmer-friendly tools — tested for local conditions and packaged for smallholder affordability.",
  },
  {
    title: "Markets",
    img: marketsImg,
    description:
      "Market-linkage services that connect farmers to buyers, improve price discovery, and reduce middlemen — increasing returns for producers.",
  },
  {
    title: "Renewable Energy",
    img: renewableEnergyImg,
    description:
      "Off-grid energy solutions (biogas, solar irrigation, low-cost pumps) that reduce operating costs and improve farm resilience and sustainability.",
  },
];

const Programes = () => {
  return (
    <section className="programes-section" aria-labelledby="programes-heading">
      <div className="container">
        <h2 id="programes-heading" className="programes-title">
          PROGRAMES
        </h2>
        <p className="programes-sub">
          Practical, scalable interventions that support farmer livelihoods, improve productivity, and build resilient rural value chains.
        </p>

        <div className="programes-grid">
          {programes.map((p, i) => (
            <article className="programe-card" key={i}>
              <div className="programe-circle" aria-hidden="true">
                <img src={p.img} alt={p.title} />
              </div>

              <div className="programe-body">
                <h3 className="programe-title">{p.title}</h3>
                <p className="programe-desc">{p.description}</p>
                <button
                  className="learn-more-btn"
                  onClick={() => {
                    alert(`${p.title} — Learn more (implement navigation)`);
                  }}
                >
                  Learn More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programes;
