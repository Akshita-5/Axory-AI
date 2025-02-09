import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Reviews.css";

const reviews = [
  { name: "Sucheta Kolekar", title: "Assistant Director, Innovation and Incubation", text: "" },
  { name: "Zuber Ahmed", title: "Chief Innovation Officer, MAHE", text: "The next YC cohort members from Manipal!" },
  { name: "Atul Batra", title: "Startup Advisor and Mentor", text: "This is the need of the hour." },
  { name: "Dr. Srinivas Padmanabhuni", title: "CTO, AIensured", text: "Great Product, with great Potential" },
  { name: "Neelima Vobugari", title: "CIO, AIensured", text: "Team with high potential, product of the hour!" },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(3);
  const totalReviews = reviews.length;

  // Adjust the number of visible reviews based on screen size
  useEffect(() => {
    const updateVisibleReviews = () => {
      if (window.innerWidth > 1024) {
        setVisibleReviews(3);
      } else if (window.innerWidth > 768) {
        setVisibleReviews(2);
      } else {
        setVisibleReviews(1);
      }
    };

    updateVisibleReviews();
    window.addEventListener("resize", updateVisibleReviews);
    return () => window.removeEventListener("resize", updateVisibleReviews);
  }, []);

  // Auto-scroll functionality with circular effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalReviews);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalReviews]);

  return (
    <div className="reviews-section">
      <h2 className="reviews-heading">
        <span>What</span> people say about us?{" "}
      </h2>
      <div className="carousel-container">
        <motion.div
          className="reviews-wrapper"
          animate={{ x: `-${currentIndex * (100 / visibleReviews)}%` }}
          transition={{ ease: "easeInOut", duration: 1 }}
          style={{
            width: `${totalReviews * (100 / visibleReviews)}%`, // Dynamic width
            display: "flex",
          }}
        >
          {reviews.map((review, index) => (
            <div
              className={`review-card ${
                index === currentIndex ? "center" : "side"
              }`}
              key={index}
            >
              <h3>{review.name}</h3>
              <p className="title">{review.title}</p>
              <p>{review.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
