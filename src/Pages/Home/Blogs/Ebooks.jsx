import React from "react";
import "./Ebooks.css";

import ebook1 from "../../../assets/irragation1.jpg";
import ebook2 from "../../../assets/dronespray1.jpg";
import ebook3 from "../../../assets/solar1.jpg";
import ebook4 from "../../../assets/cows1.jpg";

const Ebooks = () => {
  const ebooks = [
    {
      id: 1,
      title: "Smart Irrigation Guide",
      description:
        "A practical guide to efficient irrigation methods for boosting crop yields while conserving water.",
      image: ebook1,
      link: "#",
    },
    {
      id: 2,
      title: "Drone Farming 101",
      description:
        "An introduction to drone technology for crop monitoring, spraying, and precision farming.",
      image: ebook2,
      link: "#",
    },
    {
      id: 3,
      title: "Solar Energy for Farms",
      description:
        "Learn how solar power is transforming rural farming through affordable energy solutions.",
      image: ebook3,
      link: "#",
    },
    {
      id: 4,
      title: "Profitable Dairy Farming",
      description:
        "A complete handbook on modern dairy farming practices, animal health, and market access.",
      image: ebook4,
      link: "#",
    },
  ];

  return (
    <div className="ebooks">
      <h2>📚 Free Ebooks & Guides</h2>
      <p>
        Explore our collection of ebooks designed to help farmers embrace modern
        agricultural practices and technologies.
      </p>
      <div className="ebook-grid">
        {ebooks.map((ebook) => (
          <div className="ebook-card" key={ebook.id}>
            <img src={ebook.image} alt={ebook.title} />
            <h3>{ebook.title}</h3>
            <p>{ebook.description}</p>
            <a href={ebook.link} className="download-btn">
              📥 Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ebooks;
