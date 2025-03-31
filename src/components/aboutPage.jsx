import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import UntitledDesign from '../assets/UntitledDesign.png';
import cvPDF from '../assets/SILEKU-CV cpt.pdf'; // Import your CV file

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
              background: `url(${UntitledDesign}) center/cover no-repeat`,
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
              <h3 className="mb-4" style={{ color: darkPearlAqua }}>
                Technical Specialist & Full Stack Developer
                <br />
                <span style={{ fontSize: '1.2rem', color: secondaryText }}>Elpeap Group</span>
              </h3>
              
              <div style={{ color: textColor }}>
                <p className="lead mb-4">
                  Thank you for visiting my professional portfolio. I specialize in delivering comprehensive 
                  technical solutions that bridge innovation with practical business applications.
                </p>
                
                <p className="mb-3">
                  At <strong>Elpeap Group</strong>, I combine my full-stack expertise with technical leadership to:
                </p>
                
                <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                  <li className="mb-2">• Architect scalable web and technical solutions</li>
                  <li className="mb-2">• Implement cutting-edge technologies with robust code quality</li>
                  <li className="mb-2">• Translate complex requirements into intuitive user experiences</li>
                  
                </ul>
                
                <p>
                  My approach blends technical precision with creative problem-solving, ensuring solutions 
                  that not only meet specifications but elevate operational capabilities.
                </p>
              </div>
              
              <div className="d-flex flex-wrap gap-3 mt-4">
              <Button 
          as="a"
          href={cvPDF}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary" 
          size="lg"
          className="d-flex align-items-center shadow-sm"
          style={{
            backgroundColor: darkPearlAqua,
            borderColor: darkPearlAqua,
            color: '#ffffff',
            fontWeight: '600',
          }}
          download="SILEKU-CV cpt.pdf" // Optional: forces download with this filename
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
                  }}
                >
                  Discuss A Project
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