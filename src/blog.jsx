import React, { useState, useEffect } from "react";
import "./Blog.css";

const apiKey = "b4e658a4fcc4434298ce58863c71fcc7";
const url = `https://newsapi.org/v2/everything?q=(deepfake OR "AI fraud" OR "Generative AI fraud" OR "voice cloning" OR "Fintech fraud" OR "identity theft" OR "identity fraud")&language=en&sortBy=publishedAt&apiKey=${apiKey}`;


const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [index, setIndex] = useState(0);
  const truncateWords = (text, limit) => {
    const words = text.split(" ");
    return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.articles) {
          const latestArticles = data.articles.slice(0, 10).map((article, idx) => ({
            id: idx,
            title: article.title,
            image: article.urlToImage || "default.jpg",
            summary: article.description || "No description available.",
            url: article.url,
          }));
          setArticles(latestArticles);
          setCurrentArticle(latestArticles[0]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();

    const interval = setInterval(fetchNews, 60 * 60 * 1000); // Refresh every hour
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      const slideInterval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % articles.length);
      }, 5000);
      return () => clearInterval(slideInterval);
    }
  }, [articles]);

  useEffect(() => {
    if (articles.length > 0) {
      setCurrentArticle(articles[index]);
    }
  }, [index, articles]);

  return (
    <div className="blog-section">
      <h2 className="blog-title">AI & Deepfake Fraud News</h2>
      <p className="blog-description">Stay updated on the latest AI fraud and deepfake misuse cases affecting society.</p>
      <div className="blog-container">
        {currentArticle && (
          <div className="main-article">
            <img src={currentArticle.image} alt={currentArticle.title} className="article-image" />
            <h3>{currentArticle.title}</h3>
            <p>{currentArticle.summary}</p>
            <a href={currentArticle.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        )}
<div className="article-list">
  {articles.map((article, idx) => (
    <div key={article.id} className="article-item" onClick={() => setIndex(idx)}>
      <h4>{article.title}</h4>
      <p>{truncateWords(article.summary, 10)}</p> 
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Blog;
