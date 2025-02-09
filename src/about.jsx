import React, { useEffect, useState } from "react";
import img from "./assets/di1.jpeg";

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
        flexDirection: "row", // Default row layout
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 2rem",
        backgroundColor: "#f5f7fa",
        color: "#2d2e32",
        minHeight: "60vh",
      }}
    >
      {/* Text Content */}
      <div
        style={{
          flex: 1,
          minWidth: "300px",
          maxWidth: "600px",
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          About <span style={{ color: "#4FBABB" }}>Us</span>
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.5", marginTop: "1rem" }}>
          <span style={{ color: "#4D427C", fontWeight: "bold" }}>Axory AI</span> is dedicated to <span style={{ color: "#4D427C" }}>safeguarding digital integrity</span>
          through <span style={{ color: "#4FBABB", fontWeight: "bold" }}>cutting-edge deepfake detection technology</span>. Our platform equips
          <span style={{ color: "#4FBABB", fontWeight: "bold" }}> media enterprises, HR teams, and individuals</span> with the tools needed to identify and
          combat AI-generated content. We leverage advanced algorithms to provide <span style={{ color: "#4FBABB", fontWeight: "bold" }}>real-time analysis and insights</span>,
          ensuring users can navigate the digital landscape with confidence.
        </p>
      </div>

      {/* Image */}
      <div
        style={{
          flex: 1,
          minWidth: "250px",
          maxWidth: "500px",
          textAlign: "center",
          marginTop: "2rem", // Space for small screens
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
        }}
      >
        <img
          src={img}
          alt="About"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "12px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </section>
  );
};

export default About;
