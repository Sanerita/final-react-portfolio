import React, { useState, useRef } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import mbk from '../assets/mbk.png';
import projectB from '../assets/projectB.png';
import Nezzies from '../assets/Nezzies.png';
import albatross from '../assets/albatross.png';
import { theme } from '../theme';

/* Spotlight card — tracks mouse and paints a subtle radial glow */
const SpotlightCard = ({ children, featured = false, onOpen }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight-card project-card h-100 d-flex flex-column ${featured ? 'featured' : ''}`}
    >
      {children}
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AlbatrossAI CRM',
      category: 'Full Stack',
      featured: true,
      description:
        'An intelligent CRM web platform featuring AI-powered sales pipeline insights, interactive drag-and-drop deal management, real-time analytics, and lead prioritization dashboards.',
      image: albatross,
      fallbackUrl: '/albatross.png',
      tags: ['React', 'JavaScript', 'AI CRM', 'Sales Pipeline', 'Node.js'],
      githubLink: 'https://github.com/Sanerita/ALBATROSSAI',
      demoLink: 'https://github.com/Sanerita/ALBATROSSAI',
    },
    {
      id: 2,
      title: 'MBK Builders',
      category: 'Business',
      description:
        'A responsive construction business website engineered with clean JavaScript & React architecture for showcasing construction portfolios, service inquiries, and project quotes.',
      image: mbk,
      fallbackUrl: '/mbk.png',
      tags: ['React', 'CSS3', 'JavaScript', 'Node.js', 'Responsive UI'],
      githubLink: 'https://github.com/Sanerita/MBK-BUILDERS',
      demoLink: 'https://github.com/Sanerita/MBK-BUILDERS',
    },
    {
      id: 3,
      title: 'TOAST Chat App',
      category: 'Full Stack',
      description:
        'Full-stack real-time chatting web application utilizing Socket.io bi-directional messaging protocols paired with a persistent MongoDB database backplane.',
      image: projectB,
      fallbackUrl: '/projectB.png',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      githubLink: 'https://github.com/Sanerita/Chat-application',
      demoLink: 'https://github.com/Sanerita/Chat-application',
    },
    {
      id: 4,
      title: 'Nezzies Restaurant',
      category: 'Web Apps',
      description:
        'An elegant, mobile-optimized culinary web app featuring digital menus, interactive food item displays, and responsive booking interfaces.',
      image: Nezzies,
      fallbackUrl: '/Nezzies.png',
      tags: ['React', 'CSS3', 'Responsive Design', 'UI/UX'],
      githubLink: 'https://github.com/Sanerita/Business-Website',
      demoLink: 'https://github.com/Sanerita/Business-Website',
    },
  ];

  const categories = ['All', 'Full Stack', 'Business', 'Web Apps'];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="Projects"
      className="position-relative overflow-hidden"
      style={{ background: theme.colors.bg, padding: '96px 0', borderTop: `1px solid ${theme.colors.border}` }}
    >
      <Container>
        <Row className="mb-4">
          <Col>
            <span className="section-label">// work</span>
            <h2 className="section-title mt-2">Featured projects</h2>
            <p style={{ color: theme.colors.textMuted, fontSize: '0.92rem', marginTop: '0.5rem', maxWidth: '560px' }}>
              A curated collection of web applications, commercial platforms, and technical systems I've architected.
            </p>
          </Col>
        </Row>

        {/* Filter pills */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="font-mono"
                  style={{
                    background: filter === cat ? theme.colors.primary : 'transparent',
                    color: filter === cat ? '#fff' : theme.colors.textMuted,
                    border: `1px solid ${filter === cat ? theme.colors.primary : theme.colors.border}`,
                    borderRadius: theme.radii.btn,
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.72rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Bento grid */}
        <Row className="g-3">
          {filtered.map((project) => (
            <Col key={project.id} md={project.featured ? 12 : 6}>
              <SpotlightCard featured={project.featured}>
                {/* Image header */}
                <div
                  className="card-img-wrapper position-relative w-100"
                  style={{ height: project.featured ? '280px' : '200px', overflow: 'hidden', borderRadius: '12px 12px 0 0' }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = project.fallbackUrl;
                    }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ background: 'rgba(8,9,10,0.6)', opacity: 0, transition: 'opacity 0.25s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                  >
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-ghost d-inline-flex align-items-center gap-2"
                    >
                      <FaEye size={12} /> Quick view
                    </button>
                  </div>

                  {project.featured && (
                    <span
                      className="badge-featured position-absolute top-0 end-0 m-3"
                      style={{ background: 'rgba(8,9,10,0.8)', backdropFilter: 'blur(8px)' }}
                    >
                      Featured
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h3 style={{ fontSize: project.featured ? '1.35rem' : '1.05rem', fontWeight: 500, color: '#fff', letterSpacing: '-0.01em', margin: 0 }}>
                      {project.title}
                    </h3>
                    <span className="font-mono" style={{ fontSize: '0.68rem', color: theme.colors.textDim }}>
                      {project.category}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.86rem', color: theme.colors.textMuted, lineHeight: 1.65, marginBottom: '1rem', flexGrow: 1 }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="badge-aqua font-mono" style={{ fontSize: '0.65rem', padding: '0.2rem 0.45rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="d-flex gap-2 pt-3" style={{ borderTop: `1px solid ${theme.colors.border}` }}>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost d-inline-flex align-items-center justify-content-center gap-2 flex-grow-1 text-decoration-none"
                      style={{ fontSize: '0.78rem', padding: '0.45rem 0.75rem' }}
                    >
                      <FaGithub size={12} /> Source
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent d-inline-flex align-items-center justify-content-center gap-2 flex-grow-1 text-decoration-none"
                      style={{ fontSize: '0.78rem', padding: '0.45rem 0.75rem' }}
                    >
                      <FaExternalLinkAlt size={10} /> Live
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Quick view modal */}
      {selectedProject && (
        <Modal
          show={!!selectedProject}
          onHide={() => setSelectedProject(null)}
          centered
          size="lg"
          contentClassName="border-0 overflow-hidden"
          style={{ color: theme.colors.text }}
        >
          <div style={{ background: theme.colors.surface, border: `1px solid ${theme.colors.border}`, borderRadius: '12px' }}>
            <div className="position-relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = selectedProject.fallbackUrl;
                }}
                style={{ width: '100%', maxHeight: '320px', objectFit: 'cover' }}
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="position-absolute top-0 end-0 m-3 btn-ghost"
                style={{ width: '32px', height: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                ✕
              </button>
            </div>

            <div className="p-4 p-md-5">
              <span className="badge-aqua font-mono mb-2">{selectedProject.category}</span>
              <h3 className="mt-2 mb-3" style={{ fontSize: '1.5rem', fontWeight: 500, color: '#fff' }}>
                {selectedProject.title}
              </h3>
              <p style={{ color: theme.colors.textMuted, lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                {selectedProject.description}
              </p>

              <div className="font-mono mb-2" style={{ fontSize: '0.72rem', color: theme.colors.textDim, letterSpacing: '0.06em' }}>
                TECHNOLOGIES
              </div>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="badge-aqua font-mono">{tag}</span>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-2">
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn-ghost text-decoration-none d-inline-flex align-items-center gap-2">
                  <FaGithub size={12} /> View repository
                </a>
                <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="btn-accent text-decoration-none d-inline-flex align-items-center gap-2">
                  <FaExternalLinkAlt size={10} /> Open project
                </a>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Projects;