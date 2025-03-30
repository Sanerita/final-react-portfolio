import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center mb-3">
            <div className="d-flex justify-content-center gap-3">
              <a href="https://www.instagram.com/sane_sileku/" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://github.com/Sanerita" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sanelisiwe-sileku-272b4b96/" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/Sanelisiwe71701" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaTwitter size={24} />
              </a>
            </div>
          </Col>
          <Col xs={12} className="text-center">
            <p className="mb-0">Copyright © {new Date().getFullYear()} Sanelisiwe Sileku. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;