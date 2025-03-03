import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo2 from "./assets/logo2.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Section */}

        {/* Opening Hours */}
        <div className="footer-section">
          <img src={logo2}></img>
          <p>Where AI powers Authenticity</p>
          <p>Innovation Centre, MIT Rd, Eshwar Nagar, Manipal, Karnataka 576104</p>
        </div>



        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li> About Us</li>
            <li> Contact Us</li>
            <li> Book a Call</li>
            <li> Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>✉️<a href="mailto:contact@tarini@axory.ai">tarini@axory.ai</a></p>
          <p>✉️<a href="mailto:contact@axory.com">axorytech@gmail.com</a></p>
          <div className="social-icons">
            <a>
            <FaTwitter className="icon" /></a>
            <a><FaFacebookF className="icon" /></a>
            <a href="https://www.instagram.com/axory.ai/"><FaInstagram className="icon" /></a>
            <a href="https://www.linkedin.com/company/axory-ai"><FaLinkedinIn className="icon" /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h2>Want to Share personal experience?</h2>
          <p>Drop us your mail id. We'll reach out to you soon!</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Your email" />
            <button>Send</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© <a href="#">AXORY AI</a>, All Rights Reserved.</p>
        <ul>
          <li>Home</li>
          <li>Cookies</li>
          <li>Help</li>
          <li>FAQs</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
