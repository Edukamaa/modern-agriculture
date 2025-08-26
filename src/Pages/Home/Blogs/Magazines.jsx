import React from "react";
import "./Magazines.css";

const magazines = [
  {
    id: 1,
    title: "Sustainable Farming Digest",
    description:
      "A monthly magazine highlighting eco-friendly practices, organic farming, and climate-smart agriculture innovations.",
    link: "#",
  },
  {
    id: 2,
    title: "AgriTech Innovators",
    description:
      "Covers the latest technologies in precision farming, drones, AI, and modern farm equipment reshaping agriculture.",
    link: "#",
  },
  {
    id: 3,
    title: "Livestock & Poultry World",
    description:
      "An insightful magazine for livestock keepers, focusing on animal health, feed optimization, and market trends.",
    link: "#",
  },
  {
    id: 4,
    title: "Horticulture Today",
    description:
      "Dedicated to vegetable and fruit farming, pest management, and export opportunities for farmers.",
    link: "#",
  },
];

const Magazines = () => {
  return (
    <section className="magazines">
      <h2>📚 Featured Magazines</h2>
      <p>
        Stay informed with our collection of modern agriculture magazines packed
        with insights, innovations, and global farming practices.
      </p>
      <div className="magazine-list">
        {magazines.map((mag) => (
          <div className="mag-card" key={mag.id}>
            <h3>{mag.title}</h3>
            <p>{mag.description}</p>
            <a href={mag.link} target="_blank" rel="noopener noreferrer">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Magazines;
