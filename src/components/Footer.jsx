import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="my-footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/your-instagram-link" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/your-github-link" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/your-twitter-link" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        </div>
      </div>
      <div className='copyright-message'>
      <p>Copyright &#169; 2023 Sanelisiwe Sileku. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
