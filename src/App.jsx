import { useState } from "react";
import "./App.css";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Blog from "./blog.jsx";
import Hero from "./hero.jsx";
import About from "./about.jsx";
import Reviews from "./reviews.jsx";
import Solutions from "./solutions.jsx";
import { Helmet } from "react-helmet";

<Helmet>
  <title>Axory AI - AI Security & Fraud Detection</title>
  <meta
    name="description"
    content="Protect your identity with Axory AI's deepfake detection and fraud prevention solutions."
  />
</Helmet>;

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="solutions">
        <Solutions />
      </section>
      <section id="blog">
        <Blog /></section>
      <section id="reviews">
        <Reviews />
      </section>

      <Footer />
    </>
  );
}

export default App;
