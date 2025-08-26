// src/Pages/Home/Blogs/Reels.jsx
import React from "react";
import "./Reels.css";

const Reels = () => {
  const reels = [
    {
      id: 1,
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      caption: "🌽 How to boost your maize yield using crop rotation.",
      likes: "1.2K",
      comments: "245",
    },
    {
      id: 2,
      video: "https://www.w3schools.com/html/movie.mp4",
      caption: "🐓 Poultry tips: Keeping your chickens healthy & productive.",
      likes: "3.1K",
      comments: "654",
    },
    {
      id: 3,
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      caption: "🚜 Drones in agriculture – spraying made easy.",
      likes: "5.8K",
      comments: "1.1K",
    },
    {
      id: 4,
      video: "https://www.w3schools.com/html/movie.mp4",
      caption: "💧 Irrigation hacks for small-scale farmers.",
      likes: "2.7K",
      comments: "512",
    },
    {
      id: 5,
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      caption: "☀ Solar-powered farming solutions in Kenya.",
      likes: "4.4K",
      comments: "890",
    },
  ];

  return (
    <div className="reels-container">
      <h2 className="reels-title">🎥 Farmer Reels</h2>
      <p className="reels-subtitle">Quick tips, hacks & stories from the farm</p>

      <div className="reels-feed">
        {reels.map((reel) => (
          <div key={reel.id} className="reel-card">
            <video src={reel.video} controls loop />
            <p className="caption">{reel.caption}</p>
            <div className="reel-meta">
              <span>❤️ {reel.likes}</span>
              <span>💬 {reel.comments}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;
