import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { 
  FaGitAlt, FaJava, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaWordpressSimple 
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";

const Experience = () => {
  const [internetFacts] = useState([
    { year: "2019 - 2020", fact: "Air Traffic and Navigation Services" },
    { year: "2020 - 2021", fact: "Astrofica Technologies" },
    { year: "2023/02 - 2023/07", fact: "UVU Africa (CapaCiTi)" },
    { year: "2023/07 - current", fact: "Younglings VA" },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const frontEndSkills = [
    { icon: <FaHtml5 size={24} />, name: "HTML", level: "Experienced" },
    { icon: <FaCss3Alt size={24} />, name: "CSS", level: "Experienced" },
    { icon: <FaReact size={24} />, name: "React", level: "Experienced" },
    { icon: <TbBrandJavascript size={24} />, name: "JavaScript", level: "Intermediate" },
    { icon: <FaWordpressSimple size={24} />, name: "Wordpress", level: "Intermediate" },
  ];

  const backEndSkills = [
    { icon: <FaJava size={24} />, name: "Java", level: "Intermediate" },
    { icon: <BsFiletypeSql size={24} />, name: "SQL", level: "Intermediate" },
    { icon: <FaNodeJs size={24} />, name: "Node JS", level: "Experienced" },
    { icon: <SiFirebase size={24} />, name: "Firebase", level: "Experienced" },
    { icon: <FaGitAlt size={24} />, name: "Git", level: "Experienced" },
  ];

  return (
    <section id='experience' className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} className="text-center">
            <h2 className="display-4">EXPERIENCE</h2>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col xs={12} className="text-center">
            <Card>
              <Card.Body>
                <Card.Title>{internetFacts[activeIndex].year}</Card.Title>
                <Card.Text>{internetFacts[activeIndex].fact}</Card.Text>
              </Card.Body>
            </Card>
            
            <div className="mt-3">
              {internetFacts.map((_, index) => (
                <Button
                  key={index}
                  variant={index === activeIndex ? "primary" : "outline-primary"}
                  className="mx-1"
                  onClick={() => setActiveIndex(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <Card>
              <Card.Header className="text-center">
                <h3>FRONT-END</h3>
              </Card.Header>
              <ListGroup variant="flush">
                {frontEndSkills.map((skill, index) => (
                  <ListGroup.Item key={index}>
                    <div className="d-flex align-items-center">
                      <div className="me-3">{skill.icon}</div>
                      <div>
                        <h5 className="mb-0">{skill.name}</h5>
                        <small className="text-muted">{skill.level}</small>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>

          <Col md={6}>
            <Card>
              <Card.Header className="text-center">
                <h3>BACK-END</h3>
              </Card.Header>
              <ListGroup variant="flush">
                {backEndSkills.map((skill, index) => (
                  <ListGroup.Item key={index}>
                    <div className="d-flex align-items-center">
                      <div className="me-3">{skill.icon}</div>
                      <div>
                        <h5 className="mb-0">{skill.name}</h5>
                        <small className="text-muted">{skill.level}</small>
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