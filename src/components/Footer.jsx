import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { theme } from '../theme';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socials = [
    { href: 'https://github.com/Sanerita', icon: <FaGithub size={15} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/sanelisiwe-sileku-272b4b96/', icon: <FaLinkedin size={15} />, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/sane_sileku/', icon: <FaInstagram size={15} />, label: 'Instagram' },
    { href: 'https://twitter.com/Sanelisiwe71701', icon: <FaTwitter size={15} />, label: 'Twitter' },
  ];

  return (
    <footer
      className="position-relative overflow-hidden"
      style={{ background: theme.colors.bg, borderTop: `1px solid ${theme.colors.border}`, padding: '48px 0 32px' }}
    >
      <Container>
        <Row className="align-items-center g-4">
          <Col md={5}>
            <div className="font-mono d-flex align-items-center gap-2 mb-2" style={{ fontSize: '0.88rem', color: '#fff' }}>
              <span className="rounded-circle" style={{ width: '6px', height: '6px', background: theme.colors.primary, display: 'inline-block' }} />
              sanelisiwe<span style={{ color: theme.colors.textMuted }}>.sileku</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: theme.colors.textMuted, lineHeight: 1.6, maxWidth: '340px', margin: 0 }}>
              IT Support Engineer &amp; Software Developer. Engineering scalable web solutions with modern front-end &amp; back-end technologies.
            </p>
          </Col>

          <Col md={4} className="text-md-center">
            <div className="font-mono mb-2" style={{ fontSize: '0.65rem', color: theme.colors.textDim, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Connect
            </div>
            <div className="d-flex justify-content-md-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="d-flex align-items-center justify-content-center rounded-2"
                  style={{
                    width: '34px',
                    height: '34px',
                    background: theme.colors.surface,
                    border: `1px solid ${theme.colors.border}`,
                    color: theme.colors.textMuted,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.primary;
                    e.currentTarget.style.color = theme.colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border;
                    e.currentTarget.style.color = theme.colors.textMuted;
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </Col>

          <Col md={3} className="text-md-end">
            <button
              onClick={scrollToTop}
              className="btn-ghost font-mono d-inline-flex align-items-center gap-2"
              style={{ fontSize: '0.7rem' }}
            >
              Back to top <FaArrowUp size={10} />
            </button>
          </Col>
        </Row>

        <div className="mt-4 pt-3 font-mono" style={{ borderTop: `1px solid ${theme.colors.border}`, fontSize: '0.68rem', color: theme.colors.textDim }}>
          © {new Date().getFullYear()} Sanelisiwe Sileku — built with React &amp; Vite
        </div>
      </Container>
    </footer>
  );
};

export default Footer;