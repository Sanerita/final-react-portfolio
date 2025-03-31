import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGithub, FaPlayCircle } from 'react-icons/fa';
import malimba from '../assets/malimba.png';
import projectB from '../assets/projectB.png';
import Nezzies from '../assets/Nezzies.png';
import calculator from '../assets/calculator.png';

const Projects = () => {
  // Color scheme
  const lightPearlAqua = '#e0f2f2';
  const darkPearlAqua = '#2a7f7d';
  const textColor = '#333333';

  const projects = [
    {
      id: 1,
      title: "Malimba Transport Website",
      description: "A responsive transport service business website built with HTML5 and CSS.",
      image: malimba,
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Sanerita/Malimba-Website/tree/main/malimba",
      demoLink: "#"
    },
    {
      id: 2,
      title: "TOAST Chat App",
      description: "Full Stack Chatting App using Socket.io for real-time communication with MongoDB database.",
      image: projectB,
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      githubLink: "https://github.com/Sanerita/Chat-application",
      demoLink: "#"
    },
    {
      id: 3,
      title: "Finance Calculator",
      description: "Python program for financial calculations including investment and bond calculations.",
      image: calculator,
      tags: ["Python", "Finance"],
      githubLink: "https://github.com/Sanerita/Financial-calculator/tree/main/FinaceCalculator",
      demoLink: "#"
    },
    {
      id: 4,
      title: "Nezzies Restaurant",
      description: "A modern restaurant website built with React.js and CSS with responsive design.",
      image: Nezzies,
      tags: ["React", "CSS", "Responsive Design"],
      githubLink: "https://github.com/Sanerita/Business-Website",
      demoLink: "#"
    }
  ];

  return (
    <section 
      id="Projects" 
      className="py-5"
      style={{ 
        backgroundColor: lightPearlAqua,
        minHeight: '100vh'
      }}
    >
      <Container>
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <h2 className="display-4 fw-bold" style={{ color: darkPearlAqua }}>My Projects</h2>
            <p className="lead" style={{ color: textColor }}>A collection of my recent work</p>
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

        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} lg={6}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <Row className="g-0">
                  <Col md={5} className="overflow-hidden">
                    <Card.Img 
                      src={project.image} 
                      alt={project.title}
                      className="img-fluid h-100 object-fit-cover"
                    />
                  </Col>
                  <Col md={7}>
                    <Card.Body className="d-flex flex-column h-100">
                      <div>
                        <Card.Title className="fw-bold" style={{ color: darkPearlAqua }}>{project.title}</Card.Title>
                        <Card.Text style={{ color: textColor }}>{project.description}</Card.Text>
                        <div className="mb-3">
                          {project.tags.map((tag, index) => (
                            <Badge 
                              key={index} 
                              bg="light" 
                              text="dark" 
                              className="me-2"
                              style={{ backgroundColor: '#f8f9fa' }}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-auto d-flex gap-2">
                        <Button 
                          href={project.githubLink} 
                          target="_blank" 
                          variant="outline-dark" 
                          size="sm"
                          className="d-flex align-items-center"
                          style={{
                            color: darkPearlAqua,
                            borderColor: darkPearlAqua,
                            '&:hover': {
                              backgroundColor: darkPearlAqua,
                              color: '#ffffff'
                            }
                          }}
                        >
                          <FaGithub className="me-1" /> Code
                        </Button>
                        <Button 
                          href={project.demoLink} 
                          target="_blank" 
                          variant="primary" 
                          size="sm"
                          className="d-flex align-items-center"
                          style={{
                            backgroundColor: darkPearlAqua,
                            borderColor: darkPearlAqua,
                            '&:hover': {
                              backgroundColor: '#1f5e5d',
                              borderColor: '#1f5e5d'
                            }
                          }}
                        >
                          <FaPlayCircle className="me-1" /> Demo
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;