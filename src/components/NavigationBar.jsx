import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';
import { theme } from '../theme';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home-page');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ['home-page', 'about-page', 'experience', 'Projects', 'ContactPage'];
      const scrollPosition = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home-page', label: 'Home' },
    { id: 'about-page', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'Projects', label: 'Projects' },
    { id: 'ContactPage', label: 'Contact' },
  ];

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className={`py-3 fixed-top navbar-custom ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand
          href="#home-page"
          className="d-flex align-items-center gap-2 text-white font-mono"
          style={{ fontSize: '0.92rem', letterSpacing: '0.02em' }}
        >
          <span
            className="rounded-circle"
            style={{ width: '7px', height: '7px', background: theme.colors.primary, display: 'inline-block' }}
          />
          <span>
            sanelisiwe<span style={{ color: theme.colors.textMuted }}>.sileku</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
          className="border-0 shadow-none p-2"
        >
          {expanded ? <FaTimes size={20} color="#fff" /> : <FaBars size={20} color="#fff" />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-1 py-3 py-lg-0">
            {navLinks.map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setExpanded(false)}
                className={`px-3 py-2 nav-link-hover ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </Nav.Link>
            ))}

            <div className="ms-lg-3 mt-3 mt-lg-0">
              <Button
                href="#ContactPage"
                className="btn-accent d-inline-flex align-items-center gap-2"
              >
                <FaEnvelope size={12} /> Get in touch
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;