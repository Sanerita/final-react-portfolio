import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Badge } from 'react-bootstrap';
import { 
  FaGitAlt, FaJava, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaWordpressSimple 
} from "react-icons/fa";
import { SiFirebase, SiMongodb } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";

const Experience = () => {
  const [internetFacts] = useState([
    { year: "2019 - 2020", fact: "Air Traffic and Navigation Services" },
    { year: "2020 - 2021", fact: "Astrofica Technologies" },
    { year: "2021 - 2023", fact: "Self-employed" },
    { year: "2023/02 - 2023/07", fact: "UVU Africa (CapaCiTi)" },
    { year: "2023/07 - current", fact: "Younglings VA" },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const frontEndSkills = [
    { icon: <FaHtml5 className="skill-icon" />, name: "HTML", level: "Experienced" },
    { icon: <FaCss3Alt className="skill-icon" />, name: "CSS", level: "Experienced" },
    { icon: <FaReact className="skill-icon" />, name: "React", level: "Experienced" },
    { icon: <TbBrandJavascript className="skill-icon" />, name: "JavaScript", level: "Intermediate" },
    { icon: <FaWordpressSimple className="skill-icon" />, name: "Wordpress", level: "Intermediate" },
  ];

  const backEndSkills = [
    { icon: <FaJava className="skill-icon" />, name: "Java", level: "Intermediate" },
    { icon: <BsFiletypeSql className="skill-icon" />, name: "SQL", level: "Intermediate" },
    { icon: <FaNodeJs className="skill-icon" />, name: "Node JS", level: "Experienced" },
    { icon: <SiFirebase className="skill-icon" />, name: "Firebase", level: "Experienced" },
    { icon: <SiMongodb className="skill-icon" />, name: "MongoDB", level: "Experienced" },
  ];

  return (
    <section id='experience' className="py-5" style={{ backgroundColor: '#2a7f7f', color: '#ffffff' }}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <h2 className="display-4 fw-bold">My Experience</h2>
            <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Where I've worked and what I've learned</p>
            <div className="divider mx-auto" style={{ background: '#88D8D8', height: '4px', width: '80px' }}></div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col xs={12} className="text-center">
            <Card className="border-0 shadow-sm">
              <Card.Body className="py-4">
                <Badge bg="primary" className="mb-3" style={{ backgroundColor: '#88D8D8', color: '#2a7f7f' }}>Experience</Badge>
                <Card.Title className="fs-3">{internetFacts[activeIndex].year}</Card.Title>
                <Card.Text className="fs-5">{internetFacts[activeIndex].fact}</Card.Text>
              </Card.Body>
            </Card>
            
            <div className="mt-4">
              {internetFacts.map((_, index) => (
                <Button
                  key={index}
                  variant={index === activeIndex ? "primary" : "outline-primary"}
                  className="mx-2 rounded-pill"
                  onClick={() => setActiveIndex(index)}
                  style={{
                    backgroundColor: index === activeIndex ? '#88D8D8' : 'transparent',
                    color: index === activeIndex ? '#2a7f7f' : '#ffffff',
                    borderColor: '#88D8D8'
                  }}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Header className="bg-white border-0 py-3">
                <h3 className="text-center mb-0">
                  <FaReact className="me-2" style={{ color: '#88D8D8' }} />
                  Front-End Skills
                </h3>
              </Card.Header>
              <ListGroup variant="flush">
                {frontEndSkills.map((skill, index) => (
                  <ListGroup.Item key={index} className="py-3">
                    <div className="d-flex align-items-center">
                      <div className="me-3" style={{ color: '#88D8D8' }}>
                        {skill.icon}
                      </div>
                      <div>
                        <h5 className="mb-1">{skill.name}</h5>
                        <Badge bg="light" text="dark" className="fw-normal">
                          {skill.level}
                        </Badge>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Header className="bg-white border-0 py-3">
                <h3 className="text-center mb-0">
                  <FaNodeJs className="me-2" style={{ color: '#88D8D8' }} />
                  Back-End Skills
                </h3>
              </Card.Header>
              <ListGroup variant="flush">
                {backEndSkills.map((skill, index) => (
                  <ListGroup.Item key={index} className="py-3">
                    <div className="d-flex align-items-center">
                      <div className="me-3" style={{ color: '#88D8D8' }}>
                        {skill.icon}
                      </div>
                      <div>
                        <h5 className="mb-1">{skill.name}</h5>
                        <Badge bg="light" text="dark" className="fw-normal">
                          {skill.level}
                        </Badge>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;