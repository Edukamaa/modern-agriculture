import React from "react";
import "./FarmAdvisory.css";

const FarmAdvisory = () => {
  const adviceSections = [
    {
      title: "Crop Diseases & Pest Management",
      content: "Learn to identify, prevent, and manage common crop diseases and pests using eco-friendly solutions like crop rotation, organic pesticides, and early detection methods."
    },
    {
      title: "Financial Management",
      content: "Get tips on budgeting, record-keeping, accessing farm loans, and investing wisely in inputs to maximize profit and reduce risks."
    },
    {
      title: "Production Optimization",
      content: "Boost yields by applying precision farming, soil testing, irrigation scheduling, and using high-yield seed varieties."
    },
    {
      title: "Harvesting & Post-Harvest Handling",
      content: "Discover the best harvesting practices, storage techniques, and value addition methods to reduce losses and increase income."
    },
    {
      title: "Animal Farming",
      content: "Advice on cattle, goats, and sheep rearing including feeding programs, breeding, and disease control for healthy livestock."
    },
    {
      title: "Poultry Management",
      content: "Tips on housing, vaccination, feeding, and egg/meat production to keep poultry farms profitable and disease-free."
    },
    {
      title: "Agri-Tech Solutions",
      content: "Explore digital platforms, IoT devices, drones, and mobile apps that are transforming farming efficiency and productivity."
    },
    {
      title: "Future Farming Trends",
      content: "Get insights on vertical farming, hydroponics, aquaponics, and climate-smart agriculture shaping the future of food security."
    },
    {
      title: "Past Lessons in Farming",
      content: "Reflect on traditional farming methods, indigenous knowledge, and how past experiences guide sustainable practices today."
    },
    {
      title: "Soil Health & Fertility",
      content: "Understand soil testing, organic manure, and balanced fertilization for healthier crops and long-term sustainability."
    },
    {
      title: "Water Management",
      content: "Learn about irrigation systems, rainwater harvesting, and conservation practices to deal with water scarcity."
    },
    {
      title: "Market Access",
      content: "Discover how to connect with buyers, cooperatives, and digital platforms for better farm produce prices."
    },
    {
      title: "Climate Change Adaptation",
      content: "Guidelines on resilient crops, greenhouse farming, and practices to withstand unpredictable weather conditions."
    },
    {
      title: "Farm Safety",
      content: "Advice on safe use of machinery, chemicals, and protective gear to safeguard farmers’ health."
    },
    {
      title: "Organic Farming",
      content: "Switch to sustainable farming by reducing chemicals, using compost, and ensuring healthier produce for consumers."
    },
    {
      title: "Beekeeping",
      content: "Maximize income with honey production, pollination services, and modern hive management."
    },
    {
      title: "Agri-Business Opportunities",
      content: "Explore agribusiness startups like dairy processing, seed multiplication, and value chain enterprises."
    },
    {
      title: "Government Policies & Grants",
      content: "Stay updated on subsidies, grants, and agricultural policies that can support farm growth."
    },
    {
      title: "Farm Mechanization",
      content: "Benefits of using tractors, planters, and harvesters for large-scale efficiency and time saving."
    },
    {
      title: "Youth & Women in Agriculture",
      content: "Encouraging participation, innovations, and opportunities for young people and women in modern farming."
    }
  ];

  return (
    <div className="advisory-section">
      <h2 className="advisory-title">Farm Advisory & Solutions</h2>
      <p className="advisory-intro">
        A one-stop knowledge hub offering expert advice on crops, livestock, technology, and agribusiness. Explore solutions below:
      </p>
      <div className="advisory-grid">
        {adviceSections.map((item, index) => (
          <div key={index} className="advisory-card">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmAdvisory;
