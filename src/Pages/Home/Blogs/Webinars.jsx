import React from "react";
import "./Webinars.css";

const webinars = [
  {
    id: 1,
    title: "Smart Irrigation Systems",
    date: "March 25, 2025",
    description: "Learn how IoT-based irrigation helps farmers optimize water usage and improve crop yields.",
    link: "#"
  },
  {
    id: 2,
    title: "Sustainable Poultry Farming",
    date: "April 5, 2025",
    description: "Best practices in poultry farming for profitability and sustainability.",
    link: "#"
  },
  {
    id: 3,
    title: "Solar Energy for Farms",
    date: "April 15, 2025",
    description: "Discover how solar solutions reduce costs and improve energy access in farming.",
    link: "#"
  },
  {
    id: 4,
    title: "Agri-Finance & Investment",
    date: "May 2, 2025",
    description: "Financial strategies, micro-loans, and investment opportunities for farmers.",
    link: "#"
  }
];

const Webinars = () => {
  return (
    <div className="webinars">
      <h2>Upcoming & Past Webinars</h2>
      <p>
        Join our interactive webinars to learn from experts and innovators in modern agriculture. 
        Stay updated with the latest trends, technologies, and farming strategies.
      </p>
      <div className="webinar-list">
        {webinars.map((webinar) => (
          <div className="webinar-card" key={webinar.id}>
            <h3>{webinar.title}</h3>
            <p className="date">📅 {webinar.date}</p>
            <p>{webinar.description}</p>
            <a href={webinar.link} className="btn">Join / Watch</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webinars;
