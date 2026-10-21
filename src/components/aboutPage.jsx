import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCodeBranch, FaCogs, FaRocket, FaBriefcase } from 'react-icons/fa';
import UntitledDesign from '../assets/UntitledDesign.png';
import { theme } from '../theme';

const AboutPage = () => {
  const capabilities = [
    {
      icon: <FaCodeBranch size={16} />,
      title: 'Full Stack Architecture',
      desc: 'Clean, maintainable web systems from database queries to polished frontends.',
    },
    {
      icon: <FaCogs size={16} />,
      title: 'IT Support & Systems',
      desc: 'Expert software development and IT support with a focus on reliability.',
    },
    {
      icon: <FaRocket size={16} />,
      title: 'Modern UI/UX Design',
      desc: 'Responsive, accessible interfaces with considered motion and layout.',
    },
  ];

  return (
    <section
      id="about-page"
      className="position-relative overflow-hidden"
      style={{ background: theme.colors.bg, padding: '96px 0', borderTop: `1px solid ${theme.colors.border}` }}
    >
      <Container>
        <Row className="mb-5">
          <Col>
            <span className="section-label">// about</span>
            <h2 className="section-title mt-2">Who I am</h2>
          </Col>
        </Row>

        <Row className="g-5 align-items-start">
          {/* Left: portrait + role chip */}
          <Col lg={4}>
            <div className="position-relative d-inline-block w-100">
              <div
                className="profile-img-glow rounded-circle mx-auto overflow-hidden"
                style={{
                  width: '260px',
                  height: '260px',
                  maxWidth: '100%',
                  aspectRatio: '1 / 1',
                  border: `1px solid ${theme.colors.border}`,
                  padding: '4px',
                  background: theme.colors.surface,
                }}
              >
                <img
                  src={UntitledDesign}
                  alt="Sanelisiwe Sileku"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/UntitledDesign.png';
                  }}
                  className="rounded-circle w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div
                className="mt-4 p-3 rounded-3 d-flex align-items-center gap-3"
                style={{ background: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-2 shrink-0"
                  style={{ width: '34px', height: '34px', background: theme.colors.primary + '22', color: theme.colors.primary }}
                >
                  <FaBriefcase size={14} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', color: '#fff', fontWeight: 500 }}>
                    IT Support Engineer
                  </div>
                  <div className="font-mono" style={{ fontSize: '0.7rem', color: theme.colors.textMuted }}>
                    &amp; Software Developer
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right: bio */}
          <Col lg={8}>
            <h3 className="mb-3" style={{ fontSize: '1.4rem', fontWeight: 500, color: '#fff', letterSpacing: '-0.01em' }}>
              IT Support Engineer &amp; Software Developer
            </h3>

            <p style={{ color: theme.colors.text, lineHeight: 1.75, fontSize: '0.98rem', marginBottom: '1rem' }}>
              I'm an IT Support Engineer and Software Developer with over 5 years of experience providing technical support and building modern web solutions. I specialize in troubleshooting hardware and software issues, Microsoft 365, Windows environments, remote support, and full-stack web development using the MERN stack.
            </p>

            <p style={{ color: theme.colors.textMuted, lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '2rem' }}>
              I enjoy solving complex technical problems and creating reliable, user-friendly websites and applications. My goal is to deliver efficient IT solutions and high-quality digital experiences that help businesses operate more effectively.
            </p>

            {/* Capabilities list */}
            <div className="d-flex flex-column gap-2">
              {capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="d-flex align-items-start gap-3 p-3 rounded-3"
                  style={{ background: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-2 shrink-0 mt-1"
                    style={{ width: '30px', height: '30px', background: theme.colors.primary + '18', color: theme.colors.primary }}
                  >
                    {cap.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#fff' }}>{cap.title}</div>
                    <div style={{ fontSize: '0.82rem', color: theme.colors.textMuted, marginTop: '2px' }}>{cap.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <a href="#ContactPage" className="btn-accent text-decoration-none">
                Discuss a project
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;