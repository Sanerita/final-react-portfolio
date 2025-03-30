import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <section id='about-page' className="py-5">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} className="text-center">
            <h2 className="display-4">ABOUT ME</h2>
          </Col>
        </Row>
        
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="about-image bg-light" style={{ height: '300px', borderRadius: '10px' }}></div>
          </Col>
          
          <Col md={6}>
            <p className="lead">
              Thank you for visiting my portfolio! I'm delighted to have you here,
              and I'd like to take this chance to introduce myself as a software
              developer. My passion lies in crafting innovative and efficient
              software solutions.
            </p>
            <p>
              I am experienced in developing web applications and am currently
              expanding my skills to include mobile application development. My goal is to
              consistently deliver code of the highest quality, meeting both
              functional and aesthetic requirements.
            </p>
            
            <Button 
              variant="primary" 
              onClick={() => window.open("https://drive.google.com/file/d/1AcbRqagEk64yib8WW91UKjZr4yStgn6n/view?usp=sharing")}
              className="mt-3"
            >
              Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;