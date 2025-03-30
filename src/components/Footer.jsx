import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center mb-4">
            <h4 className="mb-4">Let's Connect</h4>
            <div className="d-flex justify-content-center gap-4 mb-4">
              <a href="https://www.instagram.com/sane_sileku/" target="_blank" rel="noopener noreferrer" className="text-white fs-3">
                <FaInstagram />
              </a>
              <a href="https://github.com/Sanerita" target="_blank" rel="noopener noreferrer" className="text-white fs-3">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sanelisiwe-sileku-272b4b96/" target="_blank" rel="noopener noreferrer" className="text-white fs-3">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/Sanelisiwe71701" target="_blank" rel="noopener noreferrer" className="text-white fs-3">
                <FaTwitter />
              </a>
            </div>
          </Col>
          <Col xs={12} className="text-center">
            <p className="mb-0">
              Made with <FaHeart className="text-danger" /> by Sanelisiwe Sileku
            </p>
            <p className="text-muted mt-2">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;