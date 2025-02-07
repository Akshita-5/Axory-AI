import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // Smooth scrolling
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./assets/logo1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.getElementById("home")?.offsetHeight || 500;
      setIsScrolled(window.scrollY > heroSectionHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo (Always Visible) */}
      <div className="logo">
        <img src={logo} alt="axory logo" />
      </div>

      {/* Desktop Navbar (Hides on Scroll) */}
      <nav className={`navbar ${isScrolled ? "hidden" : ""}`}>
        <ScrollLink to="home" smooth={true} duration={500}>
          Home
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500}>
          About Us
        </ScrollLink>
        <ScrollLink to="solutions" smooth={true} duration={500}>
          Solutions
        </ScrollLink>
        <ScrollLink to="reviews" smooth={true} duration={500}>
          Reviews
        </ScrollLink>
        <ScrollLink to="blogs" smooth={true} duration={500}>
          Blogs
        </ScrollLink>
      </nav>

      {/* Side Menu Buttons (Hides on Scroll) */}
      <div className={`side-menu ${isScrolled ? "hidden" : ""}`}>
        <button className="btn primary">Get Started</button>
        <button className="btn secondary">Book a Demo</button>
      </div>

      {/* Hamburger Menu (Always Visible) */}
      <div className={`hamburger ${isScrolled ? "hamburger-visible" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav>
          <ScrollLink to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            About Us
          </ScrollLink>
          <ScrollLink to="solutions" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            Solutions
          </ScrollLink>
          <ScrollLink to="reviews" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            Reviews
          </ScrollLink>
          <ScrollLink to="blogs" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            Blogs
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
