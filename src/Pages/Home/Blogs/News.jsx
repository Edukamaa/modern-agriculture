
import React from "react";
import "./News.css";
import { FaNewspaper, FaChartLine, FaTractor, FaLeaf } from "react-icons/fa";

const newsItems = [
  {
    id: 1,
    title: "Government Subsidy Boosts Fertilizer Access",
    date: "August 20, 2025",
    category: "Policy",
    icon: <FaLeaf />,
    content:
      "The Ministry of Agriculture has announced a 20% subsidy on fertilizer for smallholder farmers across Kiambu, Murang'a, Nyeri, Kirinyaga, and Nairobi counties. This move aims to lower production costs and boost food security.",
  },
  {
    id: 2,
    title: "Milk Prices Rise as Demand Surges",
    date: "August 18, 2025",
    category: "Market",
    icon: <FaTractor />,
    content:
      "Dairy farmers are celebrating as milk prices hit Ksh 55 per liter in Nairobi. The increase is linked to higher urban demand and reduced imports. Experts advise farmers to scale up dairy production while maintaining quality.",
  },
  {
    id: 3,
    title: "Drones Revolutionizing Crop Spraying",
    date: "August 15, 2025",
    category: "Technology",
    icon: <FaChartLine />,
    content:
      "Farmers in Kirinyaga are embracing drone technology for crop spraying. The innovation reduces chemical wastage, saves time, and minimizes health risks compared to manual spraying.",
  },
  {
    id: 4,
    title: "Maize Harvest Expected to Double",
    date: "August 12, 2025",
    category: "Crops",
    icon: <FaNewspaper />,
    content:
      "Reports from Murang'a and Nyeri show that improved irrigation methods have significantly increased maize yields. Farmers expect up to 70% more harvest compared to last season.",
  },
];

const News = () => {
  return (
    <div className="news-container">
      <h2 className="news-title">
        <FaNewspaper /> Agricultural News Updates
      </h2>
      <p className="news-subtitle">
        Stay informed with the latest updates on markets, technology, and policies affecting farmers.
      </p>

      <div className="news-list">
        {newsItems.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-header">
              <span className="news-icon">{item.icon}</span>
              <h3>{item.title}</h3>
            </div>
            <span className="news-date">{item.date} • {item.category}</span>
            <p className="news-content">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
