import React from "react";
import "./Solutions.css";
import { motion } from "framer-motion";
import img1 from "./assets/di3.jpeg";
import img2 from "./assets/i2.jpg";
import img3 from "./assets/di7.jpg";
import img4 from "./assets/i7.jpeg";
import img5 from "./assets/i6.jpg";
import img6 from "./assets/di8.png";

const solutionsData = [
  { title: "Deepfake Detection", description: "AI-based detection for altered videos and images.", img: img1 },
  { title: "Voice Cloning Identification", description: "Analyzing and detecting AI-generated fake voices.", img: img2 },
  { title: "Generative AI Fraud Prevention", description: "Identifying synthetic fraud attempts in Fintech & banking.", img: img3 },
  { title: "Identity Verification & Fraud Detection", description: "Secure ID authentication & prevention of identity theft.", img: img4 },
  { title: "Social Media Scam Detection", description: "AI-powered scanning for fake content & fraud accounts.", img: img5 },
  { title: "Real-time AI Content Analysis", description: "Live analysis for media & financial transactions.", img: img6 },
];

const Solutions = () => {
  return (
    <section id="solutions" className="solutions-section">
      <h2 className="solutions-title">Our AI-Powered Solutions</h2>
      <p className="solutions-description">
        Protecting you from AI-generated fraud, deepfake scams, and identity theft.
      </p>

      <div className="solutions-container">
        {solutionsData.map((solution, index) => (
          <motion.div
            key={index}
            className="solution-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={solution.img} alt={solution.title} className="solution-img" />
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            {/* <button className="coming-soon-btn">Coming Soon...</button> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
