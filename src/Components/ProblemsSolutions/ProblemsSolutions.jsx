import React from "react";
import "./ProblemsSolutions.css";

import agricmoney1 from "../../assets/agricmoney1.jpg";
import cabbage3 from "../../assets/cabbage3.jpg";
import carrots2 from "../../assets/carrots2.jpg";
import dronespray1 from "../../assets/dronespray1.jpg";
import hoho1 from "../../assets/hoho1.jpg";
import irragation1 from "../../assets/irragation1.jpg";
import maize2 from "../../assets/maize2.jpg";
import maizefarm from "../../assets/maizefarm.jpg";
import renewablee1 from "../../assets/renewablee1.jpg";
import tractor2 from "../../assets/tractor2.jpg";
import solar1 from "../../assets/solar1.jpg";

const ProblemsSolutions = () => {
  const data = [
    {
      problem: {
        heading: "Problem 1:",
        subheading: "Connecting Farmers to Quality Inputs",
        text: "Many farmers lack access to affordable, certified seeds, fertilizers, and modern tools which limits their productivity.",
        imgSrc: agricmoney1,
        imgAlt: "Agricultural money and seeds",
      },
      solution: {
        heading: "Solution 1:",
        subheading: "Connecting Farmers to Quality Inputs",
        text: "We create trusted supply chains and digital marketplaces that provide affordable access to certified seeds, fertilizers, and modern agricultural tools.",
        imgSrc: cabbage3,
        imgAlt: "Fresh cabbages in field",
      },
    },
    {
      problem: {
        heading: "Problem 2:",
        subheading: "Low Crop Yields and Livestock Productivity",
        text: "Traditional farming methods and lack of modern techniques result in low productivity and poor farm outputs.",
        imgSrc: carrots2,
        imgAlt: "Carrots on farm",
      },
      solution: {
        heading: "Solution 2:",
        subheading: "Promoting Modern and Precision Farming",
        text: "We offer precision agriculture tools, soil testing, and livestock monitoring solutions to increase yields and improve farm management.",
        imgSrc: dronespray1,
        imgAlt: "Drone spraying crops",
      },
    },
    {
      problem: {
        heading: "Problem 3:",
        subheading: "Fragmented and Inefficient Agricultural Value Chains",
        text: "Farmers often face middlemen and disconnected markets, reducing their income and increasing transaction costs.",
        imgSrc: hoho1,
        imgAlt: "Unorganized market",
      },
      solution: {
        heading: "Solution 3:",
        subheading: "Digitally Integrating Value Chains",
        text: "Our platforms link farmers directly with markets, advisory services, and buyers, ensuring better prices and smoother transactions.",
        imgSrc: irragation1,
        imgAlt: "Digital agriculture platform",
      },
    },
    {
      problem: {
        heading: "Problem 4:",
        subheading: "Limited Adoption of Technology by Smallholders",
        text: "Many farmers lack access or knowledge of digital tools that can improve farming efficiency and decision-making.",
        imgSrc: maize2,
        imgAlt: "Smallholder farm",
      },
      solution: {
        heading: "Solution 4:",
        subheading: "Delivering Farmer-Friendly Technology",
        text: "We develop easy-to-use mobile apps, SMS advisories, and management software tailored for smallholder farmers.",
        imgSrc: maizefarm,
        imgAlt: "Farmer using mobile app",
      },
    },
    {
      problem: {
        heading: "Problem 5:",
        subheading: "Climate Vulnerability and Resource Scarcity",
        text: "Changing climate patterns and resource constraints threaten farm productivity and sustainability.",
        imgSrc: renewablee1,
        imgAlt: "Dry farm land",
      },
      solution: {
        heading: "Solution 5:",
        subheading: "Implementing Climate-Smart Agriculture",
        text: "We promote water-efficient irrigation, soil conservation, and renewable energy solutions to build resilient farming systems.",
        imgSrc: solar1,
        imgAlt: "Solar panels on farm",
      },
    },
    {
      problem: {
        heading: "Problem 6:",
        subheading: "Inadequate Training and Extension Services",
        text: "Farmers often lack access to timely advice and training to optimize production.",
        imgSrc: tractor2,
        imgAlt: "Tractor working on farm",
      },
      solution: {
        heading: "Solution 6:",
        subheading: "Providing Training and Remote Advisory",
        text: "We deliver targeted training programs and remote expert support to help farmers improve practices and yields.",
        imgSrc: agricmoney1,
        imgAlt: "Training session",
      },
    },
     {
      problem: {
        heading: "Problem 7",
        subheading: "Barriers to Energy Access for Farming Operations",
        text: "Many rural farmers lack reliable power for irrigation, storage, and processing.",
        imgSrc: solar1,
        imgAlt: "Solar powered irrigation",
      },
      solution: {
        heading: "Solution 7",
        subheading: "Supplying Renewable Energy Technologies",
        text: "Solar-powered irrigation pumps, cold storage, and processing units enhance farm productivity sustainably.",
        imgSrc: renewablee1,
        imgAlt: "Renewable energy technology",
      },
    },
    {
      problem: {
        heading: "Problem 8",
        subheading: "Financial Exclusion and Lack of Access to Credit",
        text: "Smallholders struggle to secure loans or insurance to invest in their farms.",
        imgSrc: agricmoney1,
        imgAlt: "Money for farming",
      },
      solution: {
        heading: "Solution 8",
        subheading: "Facilitating Access to Finance and Insurance",
        text: "We partner with microfinance institutions and insurers to offer tailored financial products for farmers.",
        imgSrc: tractor2,
        imgAlt: "Farm tractor",
      },
    },
    {
      problem: {
        heading: "Problem 9",
        subheading: "High Post-Harvest Losses",
        text: "Poor storage and processing lead to significant loss of crop value after harvest.",
        imgSrc: maize2,
        imgAlt: "Maize crop",
      },
      solution: {
        heading: "Solution 9",
        subheading: "Reducing Post-Harvest Losses",
        text: "We provide improved storage facilities, drying technologies, and processing solutions to preserve crops.",
        imgSrc: carrots2,
        imgAlt: "Carrots crop",
      },
    },
    {
      problem: {
        heading: "Problem 10",
        subheading: "Market Price Volatility and Exploitation",
        text: "Farmers often receive unfair prices due to lack of market information and bargaining power.",
        imgSrc: maizefarm,
        imgAlt: "Farm market",
      },
      solution: {
        heading: "Solution 10",
        subheading: "Ensuring Fair Market Access and Transparency",
        text: "Our digital platforms provide transparent pricing, direct sales channels, and market information empowering farmers.",
        imgSrc: hoho1,
        imgAlt: "Market transparency",
      },
    },
    
  ];

  return (
    <section className="problems-solutions-section">
      <h1 className="main-heading">Solutions We Offer</h1>
      {data.map(({ problem, solution }, idx) => (
        <div key={idx} className="ps-row">
          <div className="card ps-problem">
            <img src={problem.imgSrc} alt={problem.imgAlt} className="ps-image" />
            <div className="ps-text">
              <h2 className="ps-heading">{problem.heading}</h2>
              <h3 className="ps-subheading">{problem.subheading}</h3>
              <p className="ps-paragraph">{problem.text}</p>
            </div>
          </div>

          <div className="card ps-solution">
            <img src={solution.imgSrc} alt={solution.imgAlt} className="ps-image" />
            <div className="ps-text">
              <h2 className="ps-heading">{solution.heading}</h2>
              <h3 className="ps-subheading">{solution.subheading}</h3>
              <p className="ps-paragraph">{solution.text}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProblemsSolutions;
