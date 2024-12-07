import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          
          {/* Organization Info */}
          <div className="footer-col">
            <h4>My Little Thing</h4>
            <p>Small Acts, Big Impacts!!</p>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61552651657086" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.instagram.com/mylittlething19/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/in/ramadhan-obiero-32575356/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.linkedin.com/in/ramadhan-obiero-32575356/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/volunteer">Involve</Link></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/cookies">Cookie Preferences</Link></li>
            </ul>              
          </div>
          
          {/* Contact Section */}
          <div className="footer-col">
            <div className="footer-section-highlight">
              <p>Have questions or want to get involved?</p>
              <Link to="/contacts" className="footer-btn">Contact Us</Link>
            </div>
          </div>
          
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} My Little Thing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
