import React, { useState, useEffect } from "react";
import "./Blog.css";

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

const url = `https://gnews.io/api/v4/search?q=deepfake OR "AI fraud" OR "Generative AI fraud" OR "voice cloning" OR "Fintech fraud" OR "identity theft" OR "identity fraud"&lang=en&sortby=publishedAt&apikey=${apiKey}`;

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        if (!apiKey) throw new Error("API Key is missing!");

        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        if (data.articles) {
          const latestArticles = data.articles.slice(0, 10).map((article, idx) => ({
            id: idx,
            title: article.title,
            image: article.image || "default.jpg",
            summary: article.description || "No description available.",
            url: article.url,
          }));
          setArticles(latestArticles);
          setCurrentArticle(latestArticles[0]); // Set first article as default
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
    const interval = setInterval(fetchNews, 108000000); // Refresh every 30 hours
    return () => clearInterval(interval);
  }, []);

  // Auto-switch main article every 3 seconds
  useEffect(() => {
    if (articles.length > 0) {
      const slideInterval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % articles.length);
      }, 3000);
      return () => clearInterval(slideInterval);
    }
  }, [articles]);

  // Update the current article when index changes
  useEffect(() => {
    if (articles.length > 0) {
      setCurrentArticle(articles[index]);
    }
  }, [index, articles]);

  return (
    <div className="blog-section">
      <h2 className="blog-title">AI & Deepfake Fraud News</h2>
      <p className="blog-description">
        Stay updated on the latest AI fraud and deepfake misuse cases affecting society.
      </p>
      <div className="blog-container">
        {currentArticle && (
          <div className="main-article">
            <img
              src={currentArticle.image}
              alt={currentArticle.title}
              className="article-image"
            />
            <h3>{currentArticle.title}</h3>
            <p>{currentArticle.summary}</p>
            <a
              href={currentArticle.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        )}
        <div className="article-list">
          {articles.map((article, idx) => (
            <div
              key={article.id}
              className="article-item"
              onClick={() => setIndex(idx)} // Click updates the main article
            >
              <h4>{article.title}</h4>
              <p>{article.summary.split(" ").slice(0, 10).join(" ")}...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
