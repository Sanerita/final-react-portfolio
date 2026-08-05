import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLayerGroup, FaEye } from 'react-icons/fa';
import mbk from '../assets/mbk.png';
import projectB from '../assets/projectB.png';
import Nezzies from '../assets/Nezzies.png';
import albatross from '../assets/albatross.png';
import { theme } from '../theme';

const Projects = () => {
  const lightPearlAqua = '#e0f2f2';
  const darkPearlAqua = '#2a7f7d';
  const textColor = '#1e293b';

  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "MBK BUILDERS",
      category: "Business",
      description: "A responsive construction business website engineered with clean JavaScript & React architecture for showcasing construction portfolios, service inquiries, and project quotes.",
      image: mbk,
      fallbackUrl: "/mbk.png",
      tags: ["React", "CSS3", "JavaScript", "Node.js", "Responsive UI"],
      githubLink: "https://github.com/Sanerita/MBK-BUILDERS",
      demoLink: "https://github.com/Sanerita/MBK-BUILDERS"
    },
    {
      id: 2,
      title: "TOAST Chat App",
      category: "Full Stack",
      description: "Full-stack real-time chatting web application utilizing Socket.io bi-directional messaging protocols paired with a persistent MongoDB database backplane.",
      image: projectB,
      fallbackUrl: "/projectB.png",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      githubLink: "https://github.com/Sanerita/Chat-application",
      demoLink: "https://github.com/Sanerita/Chat-application"
    },
    {
      id: 3,
      title: "AlbatrossAI CRM",
      category: "Full Stack",
      description: "An intelligent CRM web platform featuring AI-powered sales pipeline insights, interactive drag-and-drop deal management, real-time analytics, and lead prioritization dashboards.",
      image: albatross,
      fallbackUrl: "/albatross.png",
      tags: ["React", "JavaScript", "AI CRM", "Sales Pipeline", "Node.js"],
      githubLink: "https://github.com/Sanerita/ALBATROSSAI",
      demoLink: "https://github.com/Sanerita/ALBATROSSAI"
    },
    {
      id: 4,
      title: "Nezzies Restaurant",
      category: "Web Apps",
      description: "An elegant, mobile-optimized culinary web app featuring digital menus, interactive food item displays, and responsive booking interfaces.",
      image: Nezzies,
      fallbackUrl: "/Nezzies.png",
      tags: ["React", "CSS3", "Responsive Design", "UI/UX"],
      githubLink: "https://github.com/Sanerita/Business-Website",
      demoLink: "https://github.com/Sanerita/Business-Website"
    }
  ];

  const categories = ['All', 'Full Stack', 'Business', 'Web Apps'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section 
      id="Projects" 
      className="py-5 position-relative overflow-hidden"
      style={{ 
        backgroundColor: lightPearlAqua,
        minHeight: '100vh'
      }}
    >
      <Container className="py-4 position-relative z-1">
        {/* Section Title */}
        <Row className="justify-content-center mb-4">
          <Col xs={12} className="text-center">
            <span 
              className="badge-aqua mb-2 d-inline-block font-mono text-uppercase"
              style={{ letterSpacing: '1.5px' }}
            >
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="display-4 fw-extrabold" style={{ color: darkPearlAqua }}>
              Featured <span style={{ color: '#0f172a' }}>Projects</span>
            </h2>
            <p className="lead text-slate-600 mx-auto" style={{ maxWidth: '600px' }}>
              A curated collection of web applications, commercial platforms, and technical systems I've architected.
            </p>
            <div className="section-divider"></div>
          </Col>
        </Row>

        {/* Category Filter Pills */}
        <Row className="justify-content-center mb-5">
          <Col xs="auto">
            <div className="d-flex flex-wrap gap-2 p-1.5 rounded-pill bg-white shadow-sm border border-slate-200">
              {categories.map((cat, idx) => (
                <Button
                  key={idx}
                  size="sm"
                  className={`rounded-pill px-4 py-1.5 font-semibold text-xs transition-all border-0`}
                  style={{
                    backgroundColor: filter === cat ? darkPearlAqua : 'transparent',
                    color: filter === cat ? '#ffffff' : darkPearlAqua
                  }}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Project Grid */}
        <Row className="g-4">
          {filteredProjects.map((project) => (
            <Col key={project.id} md={6}>
              <Card className="glass-card border-0 h-100 project-card overflow-hidden">
                <div className="card-img-wrapper position-relative" style={{ height: '230px' }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = project.fallbackUrl || '/mbk.png';
                    }}
                    className="w-100 h-100 object-fit-cover"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-slate-950/40 d-flex align-items-center justify-content-center opacity-0 hover:opacity-100 transition-opacity p-3">
                    <Button
                      variant="light"
                      size="sm"
                      className="rounded-pill px-3 py-2 fw-semibold d-inline-flex align-items-center gap-1.5 shadow"
                      onClick={() => setSelectedProject(project)}
                    >
                      <FaEye size={14} /> Quick View Details
                    </Button>
                  </div>
                  <Badge 
                    className="position-absolute top-3 end-3 px-3 py-1.5 rounded-pill font-mono shadow-sm"
                    style={{ backgroundColor: darkPearlAqua, color: '#ffffff', fontSize: '0.75rem' }}
                  >
                    {project.category}
                  </Badge>
                </div>

                <Card.Body className="d-flex flex-column p-4">
                  <h3 className="h5 fw-bold mb-2" style={{ color: darkPearlAqua }}>
                    {project.title}
                  </h3>
                  <p className="small text-slate-600 mb-3 flex-grow-1" style={{ lineHeight: '1.6' }}>
                    {project.description}
                  </p>

                  <div className="d-flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="badge-aqua font-mono"
                        style={{ fontSize: '0.74rem' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex align-items-center gap-2.5 pt-2 border-top border-slate-200/80">
                    <Button 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      variant="outline-dark" 
                      size="sm"
                      className="rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-1.5 fw-semibold font-mono text-xs flex-grow-1 justify-content-center"
                      style={{
                        color: darkPearlAqua,
                        borderColor: darkPearlAqua
                      }}
                    >
                      <FaGithub size={14} /> Source Code
                    </Button>

                    <Button 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      variant="primary" 
                      size="sm"
                      className="rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-1.5 fw-semibold font-mono text-xs flex-grow-1 justify-content-center"
                      style={{
                        backgroundColor: darkPearlAqua,
                        borderColor: darkPearlAqua,
                        color: '#ffffff'
                      }}
                    >
                      <FaExternalLinkAlt size={12} /> Live Preview
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Project Detail Quick View Modal */}
      {selectedProject && (
        <Modal 
          show={!!selectedProject} 
          onHide={() => setSelectedProject(null)} 
          centered 
          size="lg"
          contentClassName="border-0 rounded-4 shadow-2xl overflow-hidden"
        >
          <div className="position-relative">
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = selectedProject.fallbackUrl || '/mbk.png';
              }}
              className="w-100" 
              style={{ maxHeight: '320px', objectFit: 'cover' }} 
            />
            <div className="position-absolute top-0 end-0 p-3">
              <Button 
                variant="dark" 
                size="sm" 
                className="rounded-circle px-2 py-1 opacity-90"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </Button>
            </div>
          </div>

          <Modal.Body className="p-4 p-md-5 bg-white">
            <span className="badge-aqua mb-2 font-mono text-uppercase">{selectedProject.category}</span>
            <h3 className="h3 fw-bold mb-3" style={{ color: darkPearlAqua }}>{selectedProject.title}</h3>
            <p className="text-slate-700 lead mb-4 font-sans" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
              {selectedProject.description}
            </p>

            <h4 className="h6 fw-bold text-dark font-mono mb-2">Technologies Used:</h4>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag, idx) => (
                <Badge key={idx} className="bg-slate-100 text-slate-800 p-2 rounded-2 font-mono" style={{ border: '1px solid #cbd5e1' }}>
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="d-flex gap-3">
              <Button 
                href={selectedProject.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                variant="outline-primary"
                className="rounded-pill px-4 py-2 font-semibold text-sm d-inline-flex align-items-center gap-2"
                style={{ color: darkPearlAqua, borderColor: darkPearlAqua }}
              >
                <FaGithub /> View Repository
              </Button>
              <Button 
                href={selectedProject.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                variant="primary"
                className="rounded-pill px-4 py-2 font-semibold text-sm d-inline-flex align-items-center gap-2 text-white"
                style={{ backgroundColor: darkPearlAqua, borderColor: darkPearlAqua }}
              >
                <FaExternalLinkAlt /> Open Project
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      )}

    </section>
  );
};

export default Projects;
