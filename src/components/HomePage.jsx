import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FaArrowRight, FaArrowDown, FaRocket, FaCode, FaLaptopCode, FaCheckCircle, FaEnvelope } from 'react-icons/fa';
import { theme } from '../theme';
import backgroundHome from '../assets/backgroundHome.jpg';

const HomePage = () => {
  const [scrollPrompt, setScrollPrompt] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrollPrompt(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroMetrics = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Systems & Clients Supported' },
    { number: '100%', label: 'Dedicated Support' },
    { number: 'MERN & IT', label: 'Systems & Web Support' }
  ];

  return (
    <section 
      id="home-page" 
      className="hero-section d-flex align-items-center justify-content-center position-relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.88) 0%, rgba(30, 85, 84, 0.82) 100%), url("${backgroundHome}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: '#ffffff',
        paddingTop: '100px',
        paddingBottom: '60px'
      }}
    >
      {/* Dynamic Background Ambient Light Orbs */}
      <div 
        className="position-absolute rounded-circle opacity-20 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: theme.colors.primary,
          filter: 'blur(120px)',
          top: '-10%',
          right: '-10%'
        }}
      />
      <div 
        className="position-absolute rounded-circle opacity-15 pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          background: theme.colors.primaryDark,
          filter: 'blur(100px)',
          bottom: '-10%',
          left: '-5%'
        }}
      />

      <Container className="position-relative z-1">
        <Row className="justify-content-center text-center">
          <Col lg={10} xl={9}>

            {/* Tagline / Subtitle Pill */}
            <div className="d-block mb-3">
              <div className="d-inline-flex align-items-center gap-2 px-3.5 py-1.5 rounded-pill shadow-sm glass-card-dark text-white border-0"
                   style={{ border: '1px solid rgba(136, 216, 216, 0.3)' }}>
                <span className="d-inline-block rounded-circle bg-emerald-400 beat" style={{ width: '8px', height: '8px', backgroundColor: '#34d399' }} />
                <span className="small font-mono tracking-wider text-uppercase" style={{ fontSize: '0.82rem', letterSpacing: '1px' }}>
                  IT Support Engineer & Software Developer
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="display-3 fw-extrabold mb-4 tracking-tight leading-tight text-white">
              HI, I'M <span style={{ color: theme.colors.primary, textShadow: '0 0 20px rgba(136, 216, 216, 0.3)' }}>SANELISIWE SILEKU</span>
            </h1>

            {/* Subtext Paragraph */}
            <p className="lead mb-4 mx-auto opacity-90 text-white" style={{ maxWidth: '780px', fontSize: '1.2rem', lineHeight: '1.7' }}>
              Building reliable web applications and delivering IT solutions that help businesses grow.
            </p>

            {/* CTA Buttons - Reduced Size */}
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
              <Button 
                href="#ContactPage" 
                variant="primary" 
                className="px-3.5 py-2 rounded-pill fw-semibold shadow-md d-inline-flex align-items-center gap-2 transition-all"
                style={{
                  backgroundColor: theme.colors.primary,
                  borderColor: theme.colors.primary,
                  color: '#0f172a',
                  fontSize: '0.92rem',
                  boxShadow: '0 4px 15px rgba(136, 216, 216, 0.35)'
                }}
              >
                <FaEnvelope size={14} /> Contact Me <FaArrowRight size={12} />
              </Button>

              <Button 
                href="#Projects" 
                variant="outline-light" 
                className="px-3.5 py-2 rounded-pill fw-semibold shadow-sm d-inline-flex align-items-center gap-2 transition-all"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                  color: '#ffffff',
                  fontSize: '0.92rem',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <FaLaptopCode size={14} /> View Featured Work
              </Button>
            </div>

            {/* Hero Quick Metrics Grid */}
            <Row className="g-3 justify-content-center mt-2">
              {heroMetrics.map((metric, idx) => (
                <Col xs={6} md={3} key={idx}>
                  <div 
                    className="p-3 rounded-4 glass-card-dark text-center h-100"
                    style={{ border: '1px solid rgba(136, 216, 216, 0.2)' }}
                  >
                    <div className="fw-bold display-6 mb-1" style={{ color: theme.colors.primary }}>
                      {metric.number}
                    </div>
                    <div className="small text-white-50 font-sans" style={{ fontSize: '0.85rem' }}>
                      {metric.label}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

          </Col>
        </Row>
      </Container>

      {/* Floating Scroll Indicator */}
      {scrollPrompt && (
        <a 
          href="#about-page"
          className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-decoration-none text-white text-center opacity-80 hover-scale"
          style={{ transition: 'all 0.3s ease' }}
        >
          <div className="d-flex flex-column align-items-center gap-1">
            <span className="small font-mono" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>EXPLORE MORE</span>
            <FaArrowDown size={18} color={theme.colors.primary} className="beat" />
          </div>
        </a>
      )}
    </section>
  );
};

export default HomePage;
