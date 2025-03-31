import React, { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

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

  // Dark pearl aqua color scheme
  const darkPearlAqua = '#2a7f7f';  // Darker pearl aqua color
  const lightPearlAqua = '#88D8D8'; // Lighter pearl aqua for highlights

  return (
    <Navbar 
      expand="lg" 
      variant="dark" 
      expanded={expanded} 
      className={`py-3 fixed-top ${scrolled ? 'shadow-sm' : ''}`}
      style={{
        transition: 'all 0.3s ease',
        backgroundColor: darkPearlAqua,
        '--bs-navbar-color': '#ffffff',
        '--bs-navbar-hover-color': lightPearlAqua,
        '--bs-navbar-active-color': '#ffffff'
      }}
    >
      <Container>
        <Navbar.Brand 
          href="#home-page" 
          className="fw-bold"
          style={{ 
            color: '#ffffff',
            fontSize: '1.5rem',
            letterSpacing: '1px'
          }}
        >
          S | SILEKU
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
          style={{ borderColor: '#ffffff' }}
        >
          <FaBars color="#ffffff" />
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#home-page" 
              onClick={() => setExpanded(false)}
              style={{
                padding: '0.5rem 1rem',
                margin: '0 0.25rem',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
              className="nav-link-hover"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#about-page" 
              onClick={() => setExpanded(false)}
              style={{
                padding: '0.5rem 1rem',
                margin: '0 0.25rem',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
              className="nav-link-hover"
            >
              About me
            </Nav.Link>
            <Nav.Link 
              href="#experience" 
              onClick={() => setExpanded(false)}
              style={{
                padding: '0.5rem 1rem',
                margin: '0 0.25rem',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
              className="nav-link-hover"
            >
              Experience
            </Nav.Link>
            <Nav.Link 
              href="#Projects" 
              onClick={() => setExpanded(false)}
              style={{
                padding: '0.5rem 1rem',
                margin: '0 0.25rem',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
              className="nav-link-hover"
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              href="#ContactPage" 
              onClick={() => setExpanded(false)}
              style={{
                padding: '0.5rem 1rem',
                margin: '0 0.25rem',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
              className="nav-link-hover"
            >
              Contact me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;