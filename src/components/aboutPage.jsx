import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import { theme } from '../theme';
// import './AboutPage.css'; // Create this file for animations

const AboutPage = () => {
  return (
    <section id='about-page' className="py-5 bg-white position-relative overflow-hidden">
      {/* Decorative elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
        <div className="circle-blur" style={{ 
          width: '300px', 
          height: '300px', 
          background: theme.colors.primary, 
          filter: 'blur(80px)',
          position: 'absolute',
          top: '-100px',
          left: '-100px'
        }}></div>
        <div className="circle-blur" style={{ 
          width: '400px', 
          height: '400px', 
          background: theme.colors.primaryLight, 
          filter: 'blur(100px)',
          position: 'absolute',
          bottom: '-150px',
          right: '-150px'
        }}></div>
      </div>

      <Container className="position-relative">
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <h2 className="display-4 fw-bold mb-4 animate__animated animate__fadeIn">About Me</h2>
            <div 
              className="divider mx-auto" 
              style={{ 
                height: '4px', 
                width: '80px', 
                background: theme.gradients.aquaGradient,
                borderRadius: '2px'
              }}
            ></div>
          </Col>
        </Row>
        
        <Row className="align-items-center">
          <Col lg={5} className="mb-5 mb-lg-0">
            <div 
              className="about-image rounded-circle overflow-hidden shadow-lg animate__animated animate__fadeInLeft"
              style={{
                width: '350px',
                height: '350px',
                margin: '0 auto',
                border: `8px solid ${theme.colors.primaryLight}`,
                background: 'url(https://via.placeholder.com/350) center/cover'
              }}
            ></div>
          </Col>
          
          <Col lg={7} className="animate__animated animate__fadeInRight">
            <div className="ps-lg-5">
              <h3 className="mb-4" style={{ color: theme.colors.primaryDark }}>Full Stack Developer</h3>
              <p className="lead" style={{ color: theme.colors.text }}>
                Thank you for visiting my portfolio! I'm delighted to have you here,
                and I'd like to take this chance to introduce myself as a software
                developer.
              </p>
              <p style={{ color: theme.colors.textLight }}>
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
                  className="d-flex align-items-center shadow-sm"
                  style={{
                    backgroundColor: theme.colors.primary,
                    borderColor: theme.colors.primary,
                    '&:hover': {
                      backgroundColor: theme.colors.primaryDark,
                      borderColor: theme.colors.primaryDark
                    }
                  }}
                >
                  <FaDownload className="me-2" /> Download CV
                </Button>
                <Button 
                  href="#ContactPage" 
                  variant="outline-primary" 
                  size="lg"
                  className="shadow-sm"
                  style={{
                    color: theme.colors.primary,
                    borderColor: theme.colors.primary,
                    '&:hover': {
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.white
                    }
                  }}
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