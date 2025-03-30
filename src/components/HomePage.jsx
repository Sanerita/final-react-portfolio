import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  return (
    <section id='home-page' className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
            <h1 className="display-3 fw-bold mb-4">Hi, I'm Sanelisiwe Sileku</h1>
            <p className="lead mb-4">A passionate MERN Stack Developer creating beautiful, functional web applications</p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <Button href="#Projects" variant="primary" size="lg">
                View My Work
              </Button>
              <Button href="#ContactPage" variant="outline-light" size="lg">
                Contact Me <FaArrowRight className="ms-2" />
              </Button>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <div className="hero-image"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;