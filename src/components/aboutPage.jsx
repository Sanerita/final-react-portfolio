import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const AboutPage = () => {
  // Color scheme
  const lightPearlAqua = '#e0f2f2';
  const darkPearlAqua = '#2a7f7d';
  const textColor = '#333333';
  const secondaryText = '#555555';

  return (
    <section 
      id='about-page' 
      className="py-5 position-relative overflow-hidden"
      style={{
        backgroundColor: lightPearlAqua,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container className="position-relative">
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <h2 className="display-4 fw-bold" style={{ color: darkPearlAqua }}>About Me</h2>
            <div 
              className="divider mx-auto" 
              style={{ 
                height: '4px', 
                width: '80px', 
                background: darkPearlAqua,
                borderRadius: '2px'
              }}
            ></div>
          </Col>
        </Row>
        
        <Row className="align-items-center">
          <Col lg={5} className="mb-5 mb-lg-0">
            <div 
              className="about-image rounded-circle overflow-hidden shadow-lg mx-auto"
              style={{
                width: '350px',
                height: '350px',
                border: `8px solid ${darkPearlAqua}`,
                background: 'url(https://via.placeholder.com/350) center/cover',
                position: 'relative'
              }}
            >
              <div 
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: `linear-gradient(135deg, ${darkPearlAqua}20 0%, ${darkPearlAqua}20 100%)`
                }}
              ></div>
            </div>
          </Col>
          
          <Col lg={7}>
            <div className="ps-lg-5">
              <h3 className="mb-4" style={{ color: darkPearlAqua }}>Full Stack Developer</h3>
              <p className="lead" style={{ color: textColor }}>
                Thank you for visiting my portfolio! I'm delighted to have you here,
                and I'd like to take this chance to introduce myself as a software
                developer.
              </p>
              <p style={{ color: secondaryText }}>
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
                    backgroundColor: darkPearlAqua,
                    borderColor: darkPearlAqua,
                    color: '#ffffff',
                    fontWeight: '600',
                    '&:hover': {
                      backgroundColor: '#1f5e5d',
                      borderColor: '#1f5e5d'
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
                    color: darkPearlAqua,
                    borderColor: darkPearlAqua,
                    fontWeight: '600',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      backgroundColor: darkPearlAqua,
                      color: '#ffffff'
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