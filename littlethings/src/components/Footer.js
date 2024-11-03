import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <h2>Little Things</h2>
        <p>Making a Difference, One Act of Kindness at a Time.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      {/* <div className="footer-middle">
        <h3>Quick Links</h3>
        <ul className="footer-middle-ul">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div> */}

      {/* <div className="footer-company">
        <h3>Company</h3>
        <ul classname="footer-company-ul">
          <li><a href="#terms">Terms and Conditions</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#cookies">Cookie Preferences</a></li>
        </ul>
      </div> */}

      <div className="footer-right">
        <h3>Contact Us</h3>
        <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Your Phone Number" required />
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>&copy; 2024 Mercy Njambi</p>
      </div>
    </footer>
  );
};

export default Footer;
