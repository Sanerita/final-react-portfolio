import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FaBars, FaTimes, FaEnvelope, FaCode } from 'react-icons/fa';
import { theme } from '../theme';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home-page');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
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
    { id: 'about-page', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'Projects', label: 'Projects' },
    { id: 'ContactPage', label: 'Contact' }
  ];

  return (
    <Navbar 
      expand="lg" 
      variant="dark" 
      expanded={expanded} 
      className={`py-2.5 fixed-top navbar-custom ${scrolled ? 'shadow-lg' : ''}`}
      style={{
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        backgroundColor: scrolled 
          ? 'rgba(15, 23, 42, 0.92)' 
          : 'rgba(42, 127, 125, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled 
          ? '1px solid rgba(136, 216, 216, 0.2)' 
          : '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Container>
        {/* Brand Name */}
        <Navbar.Brand 
          href="#home-page" 
          className="d-flex align-items-center gap-2 font-mono fw-bold text-white tracking-wide"
          style={{ fontSize: '1.25rem' }}
        >
          <span>
            SANELISIWE <span style={{ color: theme.colors.primary }}>SILEKU</span>
          </span>
        </Navbar.Brand>
        
        {/* Mobile Toggle */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className="border-0 shadow-none p-2"
          style={{ color: '#ffffff' }}
        >
          {expanded ? <FaTimes size={22} /> : <FaBars size={22} />}
        </Navbar.Toggle>
        
        {/* Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-1 py-3 py-lg-0">
            {navLinks.map((item) => (
              <Nav.Link 
                key={item.id}
                href={`#${item.id}`} 
                onClick={() => setExpanded(false)}
                className={`px-3 py-2 rounded-3 text-white transition-all nav-link-hover ${activeSection === item.id ? 'active fw-bold' : 'opacity-85'}`}
                style={{
                  fontSize: '0.95rem',
                  color: activeSection === item.id ? theme.colors.primary : '#ffffff'
                }}
              >
                {item.label}
              </Nav.Link>
            ))}

            <div className="ms-lg-3 mt-3 mt-lg-0">
              <Button
                href="#ContactPage"
                size="sm"
                className="rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 fw-semibold shadow-sm transition-all"
                style={{
                  backgroundColor: theme.colors.primary,
                  borderColor: theme.colors.primary,
                  color: '#0f172a',
                  boxShadow: '0 4px 14px rgba(136, 216, 216, 0.35)'
                }}
              >
                <FaEnvelope size={13} /> Let's Talk
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
