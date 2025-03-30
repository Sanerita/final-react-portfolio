import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGithub, FaPlayCircle } from 'react-icons/fa';
import malimba from '../assets/malimba.png';
import projectB from '../assets/projectB.png';
import Nezzies from '../assets/Nezzies.png';
import calculator from '../assets/calculator.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "HTML&CSS Website",
      description: "This is a transport service business website that is built with HTML5 and CSS.",
      image: malimba,
      githubLink: "https://github.com/Sanerita/Malimba-Website/tree/main/malimba",
      demoLink: "#"
    },
    {
      id: 2,
      title: "React Chat-App",
      description: "TOAST is a Full Stack Chatting App. It Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.",
      image: projectB,
      githubLink: "https://github.com/Sanerita/Chat-application",
      demoLink: "#"
    },
    {
      id: 3,
      title: "Finance Calculator",
      description: "Finance Calculator is a Python program that allows users to perform financial calculations such as investment and bond calculations.",
      image: calculator,
      githubLink: "https://github.com/Sanerita/Financial-calculator/tree/main/FinaceCalculator",
      demoLink: "#"
    },
    {
      id: 4,
      title: "React Business website",
      description: "This is a local business website built with react.js and css",
      image: Nezzies,
      githubLink: "https://github.com/Sanerita/Business-Website",
      demoLink: "#"
    }
  ];

  return (
    <section id="Projects" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <h2 className="display-4">PROJECTS</h2>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col xs={12} className="text-center">
            <h2>Welcome to My Portfolio of Diverse Projects</h2>
            <p className="lead">
              Explore a collection of my projects that showcase my journey in
              Software Development. From crafting engaging HTML, CSS & JavaScript 
              websites to building dynamic React applications, my portfolio reflects 
              my dedication to continuous learning and problem-solving.
            </p>
            <p>
              Click on the projects to learn more, explore the source code on
              GitHub, and experience live demos where available. If you have any
              questions, feedback, or potential collaborations in mind, please
              feel free to get in touch.
            </p>
          </Col>
        </Row>

        <Row>
          {projects.map((project) => (
            <Col key={project.id} md={6} lg={3} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <div className="d-flex justify-content-between">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm"
                    >
                      <FaGithub className="me-1" /> GitHub
                    </a>
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      <FaPlayCircle className="me-1" /> Demo
                    </a>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;