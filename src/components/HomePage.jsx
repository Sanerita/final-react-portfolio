import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import { theme } from '../theme';
import backgroundImage from '../assets/backgroundHome.jpg';

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
        background: `linear-gradient(rgba(0, 0, 0, 0.5), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: theme.colors.white,
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInDown">
              HI, I'M <span style={{ color: theme.colors.primary }}>SANELISIWE SILEKU</span>
            </h1>
            <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
              A passionate <span style={{ color: theme.colors.primaryLight }}>MERN Stack Developer</span>
            </p>
            <Button 
              href="#ContactPage" 
              variant="primary" 
              size="lg"
              className="mt-3 animate__animated animate__fadeInUp animate__delay-1s"
              style={{
                backgroundColor: theme.colors.primary,
                borderColor: theme.colors.primary,
                '&:hover': {
                  backgroundColor: theme.colors.primaryDark,
                  borderColor: theme.colors.primaryDark
                }
              }}
            >
              Contact Me <FaArrowRight className="ms-2" />
            </Button>
          </Col>
        </Row>
      </Container>

      {scrollPrompt && (
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5 animate__animated animate__fadeIn animate__delay-2s animate__infinite">
          <FaArrowDown size={24} color={theme.colors.primary} />
          <p className="small mt-2">Scroll Down</p>
        </div>
      )}
    </section>
  );
};

export default HomePage;