import React from 'react';
import './Footer.css'; 
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
<footer className="footer-container">
  <div className="footer-top">
    <div className="footer-left">
      <img src="/nexar.png" alt="Nexar Logo" className="footer-logo" /> 
      <p className="company-info">NEXAR - Your partner in innovation</p>
      <p className="contact-info">
        Email: <a href="mailto:info@nexar.com">info@nexar.com</a>
      </p>
    </div>
    <div className="footer-middle">
      <ul className="footer-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
        <li><NavLink to="/offer" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Offer</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Us</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink></li>
      </ul>
    </div>
    <div className="footer-right">
      <p>Follow us:</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/nexar_boost?igsh=MWQ4bWU1dnpuZzZnbA==" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-instagram fa-2x"></i>
          Instagram
        </a>
        <a href="https://www.facebook.com/share/18k5dpDG6p/" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-facebook fa-2x"></i>
          Facebook
        </a>
        <a href="https://wa.me/212610210330" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-whatsapp fa-2x"></i>
          WhatsApp
        </a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-conditions">Terms & Conditions</a></p>
  </div>
</footer>

  );
};

export default Footer;
