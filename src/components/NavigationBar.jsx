import React, { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { theme } from '../theme';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      variant="dark" 
      expanded={expanded} 
      className={`py-3 fixed-top ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
      style={{
        transition: 'all 0.3s ease',
        ...(scrolled ? {
          '--bs-navbar-color': theme.colors.text,
          '--bs-navbar-hover-color': theme.colors.primary,
          '--bs-navbar-active-color': theme.colors.primaryDark
        } : {
          '--bs-navbar-color': theme.colors.white,
          '--bs-navbar-hover-color': theme.colors.primaryLight,
          '--bs-navbar-active-color': theme.colors.white
        })
      }}
    >
      <Container>
        <Navbar.Brand href="#home-page" className="fw-bold" style={{ color: scrolled ? theme.colors.primary : theme.colors.white }}>
          S | SILEKU
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
          style={{ borderColor: scrolled ? theme.colors.primary : theme.colors.white }}
        >
          <FaBars color={scrolled ? theme.colors.primary : theme.colors.white} />
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