import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <section id='home-page' className="vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h1 className="display-3 fw-bold mb-3">HI, I'M SANELISIWE SILEKU</h1>
            <p className="lead">A passionate MERN Stack Developer</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;