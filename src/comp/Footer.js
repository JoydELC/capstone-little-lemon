// components/Footer.js
import React from 'react';
// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <h1>Little Lemon</h1>
      </div>
      <nav>
        <ul className="footer-nav">
          <h1>Doormat Navigation</h1>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
      <div className="contact">
        <h1>Contact</h1>
        <p>Address</p>
        <p>Phone Number</p>
        <p>Email</p>
      </div>
      <div className="social-media">
        <a href="#"><i className="fab fa-facebook"></i>Facebook</a>
        <a href="#"><i className="fab fa-twitter"></i>Twitterr</a>
        <a href="#"><i className="fab fa-instagram"></i>Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;