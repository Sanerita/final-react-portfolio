import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowUp, FaCode } from 'react-icons/fa';
import { theme } from '../theme';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      className="py-5 position-relative overflow-hidden"
      style={{ 
        backgroundColor: '#0f172a',
        color: '#ffffff',
        borderTop: '1px solid rgba(136, 216, 216, 0.2)'
      }}
    >
      {/* Background glow ambient */}
      <div 
        className="position-absolute bottom-0 start-50 translate-middle-x rounded-circle pointer-events-none opacity-10"
        style={{
          width: '500px',
          height: '250px',
          background: theme.colors.primary,
          filter: 'blur(100px)'
        }}
      />

      <Container className="position-relative z-1">
        <Row className="align-items-center justify-content-between g-4">
          
          {/* Left Column: Brand & Tagline */}
          <Col md={5} className="text-center text-md-start">
            <div className="d-inline-flex align-items-center gap-2 mb-2">
              <span className="fw-bold font-mono text-white tracking-wide" style={{ fontSize: '1.2rem' }}>
                SANELISIWE <span style={{ color: theme.colors.primary }}>SILEKU</span>
              </span>
            </div>
            <p className="small text-slate-400 mb-0 font-sans" style={{ maxWidth: '380px', lineHeight: '1.6' }}>
              IT Support Engineer & Software Developer. 
              Engineering scalable web solutions with modern front-end & back-end technologies.
            </p>
          </Col>

          {/* Center Column: Social Links */}
          <Col md={4} className="text-center">
            <div className="small font-mono text-slate-400 mb-2.5 text-uppercase" style={{ letterSpacing: '1px' }}>
              Connect Online
            </div>
            <div className="d-flex justify-content-center gap-3">
              <a 
                href="https://github.com/Sanerita" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-circle bg-slate-800 text-white hover-scale border border-slate-700 transition-all"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sanelisiwe-sileku-272b4b96/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-circle bg-slate-800 text-white hover-scale border border-slate-700 transition-all"
                style={{ color: theme.colors.primary }}
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/sane_sileku/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-circle bg-slate-800 text-white hover-scale border border-slate-700 transition-all"
                title="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="https://twitter.com/Sanelisiwe71701" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-circle bg-slate-800 text-white hover-scale border border-slate-700 transition-all"
                title="Twitter"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </Col>

          {/* Right Column: Back to Top */}
          <Col md={3} className="text-center text-md-end">
            <Button
              onClick={scrollToTop}
              variant="outline-light"
              size="sm"
              className="rounded-pill px-3.5 py-2 font-mono text-xs d-inline-flex align-items-center gap-2 border-slate-700 hover-scale shadow-sm"
              style={{ color: theme.colors.primary, borderColor: 'rgba(136, 216, 216, 0.3)' }}
            >
              Back To Top <FaArrowUp size={12} />
            </Button>
          </Col>

        </Row>

        <hr className="my-4 border-slate-800" />

        <Row className="align-items-center">
          <Col className="text-center">
            <p className="mb-0 text-slate-400 small font-sans">
              Crafted with <FaHeart className="beat text-rose-400 mx-1" style={{ color: '#f43f5e' }} /> by Sanelisiwe Sileku &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
