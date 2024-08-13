
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-links">
          
          <ul>
            <h4><a href="#about">About ShopEase</a></h4>
           <p>ShopEase is your go-to destination for a seamless online shopping experience.
           Discover top brands, exclusive deals, and much more.</p>
          </ul>
        </div>

        
        <div className="footer-address">
          <h4>Our Address</h4>
          <p>Ngong Lane Plaza,<br /> Moringa School,<br /> Room 101</p>
        </div>

        
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.linkedin.com/in/nicksonmogaka/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/nick_mokua/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
