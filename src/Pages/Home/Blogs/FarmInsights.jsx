import React from "react";
import "./FarmInsights.css";
import { FaLeaf, FaTractor, FaSeedling, FaLightbulb } from "react-icons/fa";

const insights = [
  {
    icon: <FaLeaf />,
    title: "Sustainable Farming Practices",
    content:
      "Discover eco-friendly methods like crop rotation, organic manure use, and integrated pest management to improve soil health and ensure long-term productivity.",
    date: "August 2025",
    author: "Modern Agric Team",
  },
  {
    icon: <FaTractor />,
    title: "Mechanization & Smart Tools",
    content:
      "Explore how drones, tractors, and precision farming equipment are reshaping agricultural efficiency and cutting costs for farmers of all scales.",
    date: "July 2025",
    author: "Agri-Tech Division",
  },
  {
    icon: <FaSeedling />,
    title: "Profitable Crops to Grow in 2025",
    content:
      "From high-demand vegetables like cabbages and onions to export-ready maize varieties — learn which crops guarantee better returns this year.",
    date: "June 2025",
    author: "Market Analysts",
  },
  {
    icon: <FaLightbulb />,
    title: "Investment Opportunities in Agriculture",
    content:
      "Agriculture is no longer just farming; it’s agribusiness. See how investors can tap into poultry, dairy, irrigation, and renewable energy solutions in the sector.",
    date: "May 2025",
    author: "Investment Desk",
  },
];

const FarmInsights = () => {
  return (
    <section className="farm-insights">
      <div className="insights-header">
        <h2>Farm Insights & Knowledge Hub</h2>
        <p>
          Stay updated with the latest trends, farming tips, and agribusiness
          opportunities that are transforming modern agriculture.
        </p>
      </div>

      <div className="insights-grid">
        {insights.map((item, index) => (
          <div className="insight-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <div className="meta">
              <span>{item.date}</span> | <span>{item.author}</span>
            </div>
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FarmInsights;
