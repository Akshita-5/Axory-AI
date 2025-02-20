import React, { useState, useEffect } from 'react';
import './Reviews.css';

const Carousel = () => {
  const reviews = [
    { name: "Sucheta Kolekar", title: "Assistant Director, Innovation and Incubation", text: "Innovative and impactful!" },
    { name: "Zuber Ahmed", title: "Chief Innovation Officer, MAHE", text: "The next YC cohort members from Manipal!" },
    { name: "Atul Batra", title: "Startup Advisor and Mentor", text: "This is the need of the hour." },
    { name: "Dr. Srinivas Padmanabhuni", title: "CTO, AIensured", text: "Great Product, with great Potential" },
    { name: "Neelima Vobugari", title: "CIO, AIensured", text: "Team with high potential, product of the hour!" },
    { name: "Shri Chanchal Kumar", title: "IAS, Secretary, Ministry of DoNER, GOI", text: "This is a Good Product" },
    { name: "Jai Prakash Govindraj", title: "Cyber Security Expert", text: "Apt solution for current-day scenarios" },
  ];

  const [position, setPosition] = useState(0);
  const itemWidth = 300; // Width of each carousel item
  const totalWidth = itemWidth * reviews.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition + 2; // Move 2px per frame
        return newPosition >= totalWidth ? 0 : newPosition;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [totalWidth]);

  // Triple the items to ensure smooth infinite scroll
  const displayItems = [...reviews, ...reviews, ...reviews];

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">
        <span className="teal-text">What</span> people say about us?
      </h2>
      <div className="carousel-container">
        <div 
          className="carousel" 
          style={{ 
            transform: `translateX(${-position}px)`,
            width: `${totalWidth * 3}px` // Triple width for three sets of items
          }}
        >
          {displayItems.map((review, index) => (
            <div key={index} className="carousel-item">
              <p className="review-text">{review.text}</p>
              <p className="review-name">{review.name}</p>
              <p className="review-title">{review.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;