import React, { useEffect, useState } from "react";
import "./Hero.css";

import Subheading from "../Shared/Heading/Subheading/Subheading";
import Heading from "../Shared/Heading/Heading";
import Button from "../Shared/Heading/Button/Button";

import slide1 from "../../assets/dronesspray.jpg";
import slide2 from "../../assets/maizefarm2.jpg";
import slide3 from "../../assets/irragation2.jpg";

const slides = [
  {
    image: slide1,
    heading: "Digital Agri-Solutions for Modern Farming",
    subheading:
      "Revolutionizing productivity with smart, data-driven tools tailored for today’s farmer.",
    cta: "Explore Smart Tools",
  },
  {
    image: slide2,
    heading: "Impacting Lives, Empowering Communities",
    subheading:
      "Stay connected — traceable, transparent, and compliant.",
    cta: "See the Transformation",
  },
  {
    image: slide3,
    heading: "Future-Proofing African Agribusiness",
    subheading:
      "We guide your journey with modern agriculture solutions through strategy, training, and tools.",
    cta: "Start Your Journey",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // 10 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const { image, heading, subheading, cta } = slides[currentSlide];

  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content zoom-in">
          <Heading text={heading} color="#fff" />
          <Subheading text={subheading} color="#fff" />
          <Button text={cta} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
