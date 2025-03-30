import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <section id='about-page' className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <h2 className="display-4 fw-bold mb-4">About Me</h2>
            <div className="divider mx-auto bg-primary"></div>
          </Col>
        </Row>
        
        <Row className="align-items-center">
          <Col lg={5} className="mb-5 mb-lg-0">
            <div className="about-image"></div>
          </Col>
          
          <Col lg={7}>
            <div className="ps-lg-5">
              <h3 className="mb-4">Full Stack Developer</h3>
              <p className="lead">
                Thank you for visiting my portfolio! I'm delighted to have you here,
                and I'd like to take this chance to introduce myself as a software
                developer.
              </p>
              <p>
                My passion lies in crafting innovative and efficient software solutions. 
                I am experienced in developing web applications and am currently
                expanding my skills to include mobile application development. My goal is to
                consistently deliver code of the highest quality, meeting both
                functional and aesthetic requirements.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => window.open("https://drive.google.com/file/d/1AcbRqagEk64yib8WW91UKjZr4yStgn6n/view?usp=sharing")}
                  className="d-flex align-items-center"
                >
                  <FaDownload className="me-2" /> Download CV
                </Button>
                <Button 
                  href="#ContactPage" 
                  variant="outline-primary" 
                  size="lg"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;