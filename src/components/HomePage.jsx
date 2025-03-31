import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import { theme } from '../theme';
import backgroundHome from '../assets/backgroundHome.jpg'; // Verify this path is correct

const HomePage = () => {
  const [scrollPrompt, setScrollPrompt] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollPrompt(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id='home-page' 
      className="hero-section d-flex align-items-center justify-content-center position-relative"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundHome})`,
        backgroundSize: 'cover',
        backgroundPosition: 'auto',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: theme.colors.white, // Specify which color from theme
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h1 className="display-3 fw-bold mb-4">
              HI, I'M <span style={{ color: theme.colors.primary }}>SANELISIWE SILEKU</span>
            </h1>
            <p className="lead mb-4">
              A passionate <span style={{ color: theme.colors.primaryLight }}>Technical Specialist & Full Stack Developer</span>
            </p>
            <Button 
              href="#ContactPage" 
              variant="primary" 
              size="lg"
              className="mt-3"
              style={{
                backgroundColor: theme.colors.primary,
                borderColor: theme.colors.primary,
              }}
            >
              Contact Me <FaArrowRight className="ms-2" />
            </Button>
          </Col>
        </Row>
      </Container>

      {scrollPrompt && (
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5">
          <FaArrowDown size={24} color={theme.colors.primary} />
          <p className="small mt-2">Scroll Down</p>
        </div>
      )}
    </section>
  );
};

export default HomePage;