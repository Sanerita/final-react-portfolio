import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  // Dark pearl aqua color scheme
  const darkPearlAqua = '#2a7f7f';  // Matches navbar color
  const lightPearlAqua = '#88D8D8'; // For accents

  return (
    <footer 
      className="py-5 position-relative overflow-hidden"
      style={{ 
        backgroundColor: darkPearlAqua,
        color: '#ffffff',
        marginTop: '3rem'
      }}
    >
      {/* Decorative elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
        <div 
          className="circle-blur" 
          style={{ 
            width: '300px', 
            height: '300px', 
            background: lightPearlAqua, 
            filter: 'blur(80px)',
            position: 'absolute',
            top: '-100px',
            left: '-100px'
          }} 
        />
      </div>

      <Container className="position-relative">
        <Row className="justify-content-center">
          <Col xs={12} className="text-center mb-4">
            <h4 className="mb-4" style={{ fontWeight: '600' }}>Let's Connect</h4>
            <div className="d-flex justify-content-center gap-4 mb-4">
              <a 
                href="https://www.instagram.com/sane_sileku/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white fs-3 hover-scale"
                style={{ 
                  transition: 'all 0.3s ease',
                  color: '#ffffff'
                }}
              >
                <FaInstagram />
              </a>
              <a 
                href="https://github.com/Sanerita" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white fs-3 hover-scale"
                style={{ 
                  transition: 'all 0.3s ease',
                  color: '#ffffff'
                }}
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/sanelisiwe-sileku-272b4b96/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white fs-3 hover-scale"
                style={{ 
                  transition: 'all 0.3s ease',
                  color: '#ffffff'
                }}
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com/Sanelisiwe71701" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white fs-3 hover-scale"
                style={{ 
                  transition: 'all 0.3s ease',
                  color: '#ffffff'
                }}
              >
                <FaTwitter />
              </a>
            </div>
          </Col>
          <Col xs={12} className="text-center">
            <p className="mb-0" style={{ fontSize: '1.1rem' }}>
              Made with <FaHeart className="beat" style={{ color: lightPearlAqua }} /> by Sanelisiwe Sileku
            </p>
            <p className="mt-2" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;