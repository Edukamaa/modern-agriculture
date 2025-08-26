import React from "react";
import "./Projects.css";

import agricmoney from "../../../assets/agricmoney1.jpg";
import cabbage from "../../../assets/cabbage3.jpg";
import cows from "../../../assets/cows1.jpg";
import dronespray from "../../../assets/dronespray1.jpg";
import hoho from "../../../assets/hoho1.jpg";
import irrigation from "../../../assets/irragation1.jpg";
import maize from "../../../assets/maize3.jpg";
import poultry from "../../../assets/poultry1.jpg";
import solar from "../../../assets/solar1.jpg";

const Projects = () => {
  const projectData = [
    {
      img: agricmoney,
      title: "Agribusiness Financing",
      desc: "Supporting farmers with loans and grants to boost productivity.",
    },
    {
      img: cabbage,
      title: "Organic Vegetables",
      desc: "Sustainable cabbage farming with eco-friendly methods.",
    },
    {
      img: cows,
      title: "Dairy Farming",
      desc: "Improving milk production with hybrid breeds and training.",
    },
    {
      img: dronespray,
      title: "Drone Spraying",
      desc: "Smart farming with drones for spraying and monitoring crops.",
    },
    {
      img: hoho,
      title: "Horticulture",
      desc: "Greenhouse farming of vegetables for export and local markets.",
    },
    {
      img: irrigation,
      title: "Irrigation Systems",
      desc: "Modern irrigation projects ensuring year-round crop yields.",
    },
    {
      img: maize,
      title: "Maize Production",
      desc: "Mechanized maize farming to ensure food security.",
    },
    {
      img: poultry,
      title: "Poultry Farming",
      desc: "Large-scale poultry keeping for meat and egg supply.",
    },
    {
      img: solar,
      title: "Solar Solutions",
      desc: "Solar-powered irrigation and farming tools for sustainability.",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>Our Projects</h2>
        <p>
          Modern Agric is driving innovative agricultural projects that empower
          farmers, improve food security, and create sustainable solutions.
        </p>
      </div>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <button className="project-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
