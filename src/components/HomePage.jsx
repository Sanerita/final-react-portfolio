import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import { theme } from '../theme';

const HomePage = () => {
  const stack = ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Microsoft 365', 'ServiceNow'];

  const metrics = [
    { value: '5+', label: 'Years experience' },
    { value: '50+', label: 'Clients supported' },
    { value: '4', label: 'Production apps' },
  ];

  return (
    <section
      id="home-page"
      className="d-flex align-items-center position-relative overflow-hidden"
      style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', background: theme.colors.bg }}
    >
      {/* ambient glow */}
      <div
        className="position-absolute rounded-circle pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: theme.colors.primary,
          filter: 'blur(160px)',
          opacity: 0.08,
          top: '-15%',
          right: '-15%',
        }}
      />

      <Container className="position-relative z-1">
        <Row>
          <Col lg={10} xl={9}>
            {/* status pill */}
            <div className="mb-6 d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill"
                 style={{ border: `1px solid ${theme.colors.border}`, background: theme.colors.surface }}>
              <span className="status-dot" />
              <span className="font-mono" style={{ fontSize: '0.72rem', color: theme.colors.textMuted, letterSpacing: '0.05em' }}>
                Available for work
              </span>
            </div>

            {/* eyebrow */}
            <p className="font-mono mb-3" style={{ color: theme.colors.primary, fontSize: '0.85rem' }}>
              &gt; IT Support Engineer &amp; Software Developer
            </p>

            {/* headline */}
            <h1
              className="tracking-tight mb-4"
              style={{
                fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
                fontWeight: 500,
                lineHeight: 1.08,
                color: '#fff',
                letterSpacing: '-0.025em',
              }}
            >
              Building reliable web apps &amp; IT systems with a focus on clean architecture.
            </h1>

            {/* subtext */}
            <p
              className="mb-5"
              style={{ color: theme.colors.textMuted, fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '640px' }}
            >
              I'm Sanelisiwe Sileku — I engineer modern interfaces, scalable backends, and deliver production-grade IT support across Microsoft 365, ServiceNow, and MERN stack applications.
            </p>

            {/* CTAs */}
            <div className="d-flex flex-wrap gap-3 mb-5">
              <a href="#Projects" className="btn-accent d-inline-flex align-items-center gap-2 text-decoration-none">
                View projects <FaArrowRight size={12} />
              </a>
              <a href="#ContactPage" className="btn-ghost text-decoration-none">
                Get in touch
              </a>
            </div>

            {/* stack line */}
            <div className="d-flex flex-wrap gap-3 mb-5 font-mono" style={{ fontSize: '0.75rem', color: theme.colors.textDim }}>
              {stack.map((s, i) => (
                <span key={i}>
                  {s}
                  {i < stack.length - 1 && <span style={{ marginLeft: '0.75rem', opacity: 0.4 }}>/</span>}
                </span>
              ))}
            </div>

            {/* metrics */}
            <Row className="g-4 pt-4" style={{ borderTop: `1px solid ${theme.colors.border}` }}>
              {metrics.map((m, i) => (
                <Col xs={6} md={3} key={i}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 500, color: '#fff', letterSpacing: '-0.02em' }}>
                    {m.value}
                  </div>
                  <div className="font-mono" style={{ fontSize: '0.72rem', color: theme.colors.textMuted, letterSpacing: '0.05em' }}>
                    {m.label}
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* scroll indicator */}
      <a
        href="#about-page"
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-decoration-none d-flex flex-column align-items-center gap-1"
        style={{ opacity: 0.7 }}
      >
        <span className="font-mono" style={{ fontSize: '0.65rem', color: theme.colors.textDim, letterSpacing: '0.15em' }}>
          SCROLL
        </span>
        <FaArrowDown size={12} color={theme.colors.primary} className="beat" />
      </a>
    </section>
  );
};

export default HomePage;