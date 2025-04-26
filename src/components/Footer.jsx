import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">MovieHub</h3>
            <p>Your ultimate movie collection app</p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/movies">Movies</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MovieHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;