import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FaUserCheck, FaCodeBranch, FaCogs, FaRocket, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import UntitledDesign from '../assets/UntitledDesign.png';
import { theme } from '../theme';

const AboutPage = () => {
  const lightPearlAqua = '#e0f2f2';
  const darkPearlAqua = '#2a7f7d';
  const textColor = '#1e293b';

  const capabilities = [
    {
      icon: <FaCodeBranch className="text-cyan-600" size={20} />,
      title: "Full Stack Architecture",
      desc: "Building clean, maintainable web systems from database queries to polished frontends."
    },
    {
      icon: <FaCogs className="text-cyan-600" size={20} />,
      title: "IT Support & Systems",
      desc: "Providing expert software development and IT support solutions with focus on reliability and quality."
    },
    {
      icon: <FaRocket className="text-cyan-600" size={20} />,
      title: "Modern UI/UX Design",
      desc: "Creating responsive, accessible user interfaces with seamless visual animations."
    }
  ];

  return (
    <section 
      id="about-page" 
      className="py-5 position-relative overflow-hidden"
      style={{
        backgroundColor: lightPearlAqua,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background Decorative Element */}
      <div 
        className="position-absolute rounded-circle pointer-events-none opacity-20"
        style={{
          width: '450px',
          height: '450px',
          background: darkPearlAqua,
          filter: 'blur(100px)',
          top: '10%',
          left: '-10%'
        }}
      />

      <Container className="position-relative z-1 py-4">
        {/* Section Title */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <span 
              className="badge-aqua mb-2 d-inline-block font-mono text-uppercase"
              style={{ letterSpacing: '1.5px' }}
            >
              WHO I AM
            </span>
            <h2 className="display-4 fw-extrabold" style={{ color: darkPearlAqua }}>
              About <span style={{ color: '#0f172a' }}>Me</span>
            </h2>
            <div className="section-divider"></div>
          </Col>
        </Row>
        
        <Row className="align-items-center g-5">
          {/* Left Column: Avatar & Image Frame */}
          <Col lg={5} className="text-center">
            <div className="position-relative d-inline-block">
              {/* Outer Decorative Gradient Ring */}
              <div 
                className="rounded-circle shadow-lg mx-auto position-relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${darkPearlAqua} 0%, ${theme.colors.primary} 100%)`,
                  padding: '6px',
                  width: '320px',
                  height: '320px',
                  maxWidth: '100%',
                  aspectRatio: '1 / 1',
                  boxShadow: '0 15px 35px rgba(42, 127, 125, 0.25)'
                }}
              >
                <img 
                  src={UntitledDesign} 
                  alt="Sanelisiwe Sileku" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = '/UntitledDesign.png';
                  }}
                  className="rounded-circle w-100 h-100"
                  style={{
                    objectFit: 'cover',
                    border: '4px solid #ffffff',
                    display: 'block'
                  }}
                />
              </div>

              {/* Floating Highlight Badge */}
              <div 
                className="position-absolute bottom-0 end-0 bg-white shadow-lg rounded-4 p-3 d-flex align-items-center gap-3"
                style={{
                  border: `1px solid rgba(136, 216, 216, 0.4)`,
                  transform: 'translate(10px, -20px)',
                  maxWidth: '220px'
                }}
              >
                <div 
                  className="rounded-circle p-2 text-white d-flex align-items-center justify-content-center shrink-0"
                  style={{ backgroundColor: darkPearlAqua }}
                >
                  <FaBriefcase size={18} />
                </div>
                <div className="text-start">
                  <div className="fw-bold text-dark font-sans" style={{ fontSize: '0.88rem' }}>Software & IT Support</div>
                  <div className="small text-muted font-sans" style={{ fontSize: '0.75rem' }}>IT Support Engineer & Software Developer</div>
                </div>
              </div>

            </div>
          </Col>
          
          {/* Right Column: Bio & Experience Summary */}
          <Col lg={7}>
            <div className="ps-lg-3">
              <h3 className="h2 fw-bold mb-3" style={{ color: darkPearlAqua }}>
                IT Support Engineer & Software Developer
              </h3>
              
              <div style={{ color: textColor, fontSize: '1.05rem', lineHeight: '1.7' }}>
                <p className="lead fw-semibold mb-3 text-slate-800">
                  I'm an IT Support Engineer and Software Developer with over 5 years of experience providing technical support and building modern web solutions. I specialize in troubleshooting hardware and software issues, Microsoft 365, Windows environments, remote support, and full-stack web development using the MERN stack.
                </p>
                
                <p className="mb-4 text-slate-700">
                  I enjoy solving complex technical problems and creating reliable, user-friendly websites and applications. My goal is to deliver efficient IT solutions and high-quality digital experiences that help businesses operate more effectively.
                </p>
              </div>

              {/* Core Capabilities Cards */}
              <Row className="g-3 mb-4">
                {capabilities.map((cap, idx) => (
                  <Col md={12} key={idx}>
                    <div 
                      className="p-3 rounded-3 bg-white shadow-sm d-flex align-items-start gap-3 border"
                      style={{ borderColor: 'rgba(136, 216, 216, 0.4)' }}
                    >
                      <div 
                        className="rounded-3 p-2 shrink-0 mt-1"
                        style={{ backgroundColor: 'rgba(136, 216, 216, 0.2)', color: darkPearlAqua }}
                      >
                        {cap.icon}
                      </div>
                      <div>
                        <h4 className="h6 fw-bold mb-1" style={{ color: darkPearlAqua }}>{cap.title}</h4>
                        <p className="small mb-0 text-muted" style={{ fontSize: '0.88rem' }}>{cap.desc}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>


              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Button 
                  href="#ContactPage" 
                  variant="primary" 
                  size="lg"
                  className="rounded-pill px-4 py-2.5 fw-semibold shadow transition-all"
                  style={{
                    backgroundColor: darkPearlAqua,
                    borderColor: darkPearlAqua,
                    color: '#ffffff',
                    boxShadow: '0 6px 18px rgba(42, 127, 125, 0.3)'
                  }}
                >
                  Discuss A Project
                </Button>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
