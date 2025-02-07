import React, { useEffect, useState } from "react";
import img from "./assets/di1.jpeg"

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4rem 2rem",
        backgroundColor: "#f5f7fa",
        color: "#2d2e32",
        minHeight: "60vh",
      }}
    >
      {/* Image on the Left */}
      <div
        style={{
          flex: 1,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-50px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <img
          src={img}
          alt="About"
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      {/* Text Content on the Right */}
      <div
        style={{
          flex: 1,
          paddingLeft: "3rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(50px)",
          transition: "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: "bold",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-30px)",
            transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
          }}
        >
          About <span style={{ color: "#4FBABB" }}>Us</span>
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.5", marginTop: "1rem" }}>
        <span style={{ color: "#4D427C", fontWeight: "bold" }}>Axory AI</span> is dedicated to <span style={{ color: "#4D427C" }}>safeguarding digital integrity</span> through <span style={{ color: "#4FBABB", fontWeight: "bold" }}>cutting-edge deepfake detection technology</span>. Our innovative platform equips <span style={{ color: "#4FBABB", fontWeight: "bold" }}>media enterprises, HR teams, and individuals</span> with the tools needed to identify and combat AI-generated content. We leverage advanced algorithms to provide <span style={{ color: "#4FBABB", fontWeight: "bold" }}>real-time analysis and insights</span>, ensuring users can navigate the digital landscape with confidence. Our mission is to create a safer online environment where authenticity prevails,<span style={{ color: "#4D427C", fontWeight: "bold" }}>protecting brands, individuals, and society from the growing threat of misinformation and digital deception.</span> 
        </p>
      </div>
    </section>
  );
};

export default About;
