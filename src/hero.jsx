import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import "./Hero.css";
import i1 from "./assets/i1.png";
import i2 from "./assets/i2.png";
import i3 from "./assets/i3.webp";
import i4 from "./assets/i4.jpg";

const images = [i1, i2, i3, i4];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Bottom image starts enlarged

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change size every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>AI-Powered Trust & Security for the Digital World</h1>
        <p>
        Deepfakes and AI-generated fraud are rising. <span>Axory AI</span> empowers individuals and businesses with real-time detection and secure verification.
        </p>
        <div className="search-box">
          <a href="https://calendly.com/tarini_padmanabhuni/30min" target="_blank" rel="noopener noreferrer" className="cta-button">
            Book a Call
          </a>
        </div>
        {/* <div className="stats">
          <div className="stat">
            <h2><CountUp start={0} end={10000} duration={3} />+</h2>
            <p>Followers</p>
          </div>
          <div className="stat">
            <h2><CountUp start={0} end={500} duration={3} />+</h2>
            <p>Clients Satisfied</p>
          </div>
          <div className="stat">
            <h2><CountUp start={0} end={2500} duration={3} />+</h2>
            <p>Page Visitors</p>
          </div>
        </div> */}
      </div>

      {/* 🌟 Circular Image Layout */}
      <div className="image-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`img${index}`}
            className={`circle img${index + 1} ${index === activeIndex ? "large" : ""}`} 
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
