import React, { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" bg="dark" variant="dark" expanded={expanded} className="py-3">
      <Container>
        <Navbar.Brand href="#home-page" className="fw-bold">
          S | SILEKU
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <FaBars />
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home-page" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="#about-page" onClick={() => setExpanded(false)}>About me</Nav.Link>
            <Nav.Link href="#experience" onClick={() => setExpanded(false)}>Experience</Nav.Link>
            <Nav.Link href="#Projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
            <Nav.Link href="#ContactPage" onClick={() => setExpanded(false)}>Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;