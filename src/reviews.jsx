import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Reviews.css";

const reviews = [
  {
    name: "Sucheta Kolekar",
    title: "Assistant Director, Innovation and Incubation",
    text: "",
  },
  {
    name: "Zuber Ahmed",
    title: "Chief Innovation Officer, MAHE",
    text: "The next YC cohort members from Manipal!",
  },
  {
    name: "Atul Batra",
    title: "Startup Advisior and Mentor",
    text: "This is the need of the hour.",
  },
  {
    name: "Dr. Srinivas Padmanabhuni",
    title: "CTO, AIensured",
    text: "Great Product, with great Potential",
  },
  {
    name: "Neelima Vobugari",
    title: "CIO, AIensured",
    text: "Team with high potential, product of the hour!",
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const totalSlides = Math.ceil(reviews.length / 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="reviews-section">
      <h2 className="reviews-heading">
        <span>What</span> customers say about us?{" "}
      </h2>
      <motion.div
        className="reviews-wrapper"
        animate={{ x: `-${index * 100}%` }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        {[...Array(totalSlides)].map((_, slideIndex) => (
          <div className="reviews-slide" key={slideIndex}>
            {reviews
              .slice(slideIndex * 5, slideIndex * 5 + 5)
              .map((review, i) => (
                <div
                  className={`review-card ${i === 2 ? "center" : "side"}`}
                  key={i}
                >
                  <h3>{review.name}</h3>
                  <p className="title">{review.title}</p>
                  <p>{review.text}</p>
                </div>
              ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Reviews;
