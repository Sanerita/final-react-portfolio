import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGithub, FaPlayCircle } from 'react-icons/fa';
import { theme } from '../theme';
import malimba from '../assets/malimba.png';
import projectB from '../assets/projectB.png';
import Nezzies from '../assets/Nezzies.png';
import calculator from '../assets/calculator.png';
// import './Projects.css'; // Create this for animations

const Projects = () => {
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
    <section id="Projects" className="py-5 bg-white">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <h2 className="display-4 fw-bold">My Projects</h2>
            <p className="lead" style={{ color: theme.colors.textLight }}>A collection of my recent work</p>
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

        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} lg={6}>
              <Card className="h-100 border-0 shadow-sm project-card">
                <Row className="g-0">
                  <Col md={5} className="overflow-hidden position-relative">
                    <div className="project-image-overlay"></div>
                    <Card.Img 
                      src={project.image} 
                      alt={project.title}
                      className="img-fluid h-100 object-fit-cover"
                    />
                  </Col>
                  <Col md={7}>
                    <Card.Body className="d-flex flex-column h-100 p-4">
                      <div>
                        <Card.Title className="fw-bold" style={{ color: theme.colors.primaryDark }}>
                          {project.title}
                        </Card.Title>
                        <Card.Text style={{ color: theme.colors.textLight }}>
                          {project.description}
                        </Card.Text>
                        <div className="mb-3">
                          {project.tags.map((tag, index) => (
                            <Badge 
                              key={index} 
                              className="me-2" 
                              style={{ 
                                backgroundColor: theme.colors.primaryLight,
                                color: theme.colors.white,
                                fontWeight: 'normal',
                                padding: '0.35rem 0.75rem'
                              }}
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
                          variant="outline-primary" 
                          size="sm"
                          className="d-flex align-items-center"
                          style={{
                            color: theme.colors.primary,
                            borderColor: theme.colors.primary,
                            '&:hover': {
                              backgroundColor: theme.colors.primary,
                              color: theme.colors.white
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
                            backgroundColor: theme.colors.primary,
                            borderColor: theme.colors.primary,
                            '&:hover': {
                              backgroundColor: theme.colors.primaryDark,
                              borderColor: theme.colors.primaryDark
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