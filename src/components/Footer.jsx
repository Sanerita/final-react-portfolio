import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { theme } from '../theme';

const Footer = () => {
  return (
    <footer 
      className="py-5 position-relative overflow-hidden"
      style={{ 
        backgroundColor: theme.colors.primaryDark,
        color: theme.colors.white
      }}
    >
      {/* Decorative elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
        <div className="circle-blur" style={{ 
          width: '300px', 
          height: '300px', 
          background: theme.colors.primaryLight, 
          filter: 'blur(80px)',
          position: 'absolute',
          top: '-100px',
          left: '-100px'
        }}></div>
        <div className="circle-blur" style={{ 
          width: '400px', 
          height: '400px', 
          background: theme.colors.white, 
          filter: 'blur(100px)',
          position: 'absolute',
          bottom: '-150px',
          right: '-150px'
        }}></div>
      </div>

      <Container className="position-relative">
        <Row className="justify-content-center">
          <Col xs={12} className="text-center mb-4">
            <h4 className="mb-4">Let's Connect</h4>
            <div className="d-flex justify-content-center gap-4 mb-4">
              <a 
                href="https://www.instagram.com/sane_sileku/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white fs-3 hover-scale"
                style={{ transition: 'transform 0.3s ease' }}
              >
                <FaInstagram />
              </a>
              <a 
                href="https://github.com/Sanerita" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white fs-3 hover-scale"
                style={{ transition: 'transform 0.3s ease' }}
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/sanelisiwe-sileku-272b4b96/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white fs-3 hover-scale"
                style={{ transition: 'transform 0.3s ease' }}
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com/Sanelisiwe71701" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white fs-3 hover-scale"
                style={{ transition: 'transform 0.3s ease' }}
              >
                <FaTwitter />
              </a>
            </div>
          </Col>
          <Col xs={12} className="text-center">
            <p className="mb-0">
              Made with <FaHeart className="text-danger beat" /> by Sanelisiwe Sileku
            </p>
            <p className="mt-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;