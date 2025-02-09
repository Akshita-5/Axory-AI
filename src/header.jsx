import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // Smooth scrolling
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./assets/logo1.png";



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900); // Responsive breakpoint

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.getElementById("home")?.offsetHeight || 500;
      setIsScrolled(window.scrollY > heroSectionHeight);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
      if (window.innerWidth >= 900) setMenuOpen(false); // Auto-close menu on resize
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="axory logo" />
      </div>

      {/* Navigation - Switches between Desktop and Mobile */}
      {!isMobile ? (
        <>
          <nav className={`navbar ${isScrolled ? "hidden" : ""}`}>
            <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500}>About Us</ScrollLink>
            <ScrollLink to="solutions" smooth={true} duration={500}>Solutions</ScrollLink>
            <ScrollLink to="reviews" smooth={true} duration={500}>Reviews</ScrollLink>
            <ScrollLink to="blogs" smooth={true} duration={500}>Blogs</ScrollLink>
          </nav>

          <div className={`side-menu ${isScrolled ? "hidden" : ""}`}>
            <button className="btn primary">Get Started</button>
            <button className="btn secondary">Book a Demo</button>
          </div>
        </>
      ) : (
        <>
          {/* Hamburger Menu */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Mobile Sidebar Menu */}
          <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            <nav>
              <ScrollLink to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Home</ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About Us</ScrollLink>
              <ScrollLink to="solutions" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Solutions</ScrollLink>
              <ScrollLink to="reviews" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Reviews</ScrollLink>
              <ScrollLink to="blogs" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Blogs</ScrollLink>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
