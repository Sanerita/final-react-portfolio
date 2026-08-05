import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { 
  FaGitAlt, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaWordpressSimple,
  FaDocker, FaLinux, FaJenkins, FaBriefcase, FaBuilding, FaCalendarAlt, FaCheckCircle, FaLaptopCode, FaServer, FaTools
} from "react-icons/fa";
import { 
  SiFirebase, SiMongodb, SiKubernetes, SiTerraform, SiAnsible,
  SiPrometheus, SiGrafana, SiPostgresql, SiRedis
} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";
import { theme } from '../theme';

const Experience = () => {
  const workHistory = [
    { 
      year: "Aug 2025 - Present", 
      company: "Advania UK", 
      role: "Managed Services Trainee",
      type: "Contract",
      desc: "Provide technical support across various platforms and systems. Deliver remote support via BeyondTrust, administering Microsoft 365 services (user access, permissions, configuration), handling calls, and managing ServiceNow tickets.",
      bullets: [
        "Troubleshoot technical issues for users across diverse platforms & business software.",
        "Deliver remote desktop support via BeyondTrust with step-by-step guidance.",
        "Administer Microsoft 365 services including user access, permissions, and configuration.",
        "Handle inbound and outbound service requests with structured ServiceNow workflows."
      ]
    },
    { 
      year: "Jan 2023 - Jul 2024", 
      company: "UVU Africa", 
      role: "Software Developer",
      type: "Contract",
      desc: "Developed full-stack web applications using the MERN stack, troubleshooting performance bottlenecks, debugging cross-browser issues, and integrating APIs & SQL/NoSQL databases.",
      bullets: [
        "Engineered full-stack web applications utilizing MongoDB, Express, React, and Node.js.",
        "Collaborated with cross-functional teams to integrate REST APIs and relational/non-relational databases.",
        "Optimized web applications for high scalability, reliability, and reduced server crashes."
      ]
    },
    { 
      year: "May 2021 - Jan 2023", 
      company: "Elpeap Group", 
      role: "IT Technician",
      type: "Full-time",
      desc: "Diagnosed and resolved hardware/software issues for 50+ clients (PCs, printers). Executed system upgrades, provided remote support via TeamViewer/AnyDesk, and set up security basics.",
      bullets: [
        "Hardware & Software Troubleshooting for 50+ corporate and individual clients.",
        "System Upgrades & Maintenance: OS installation, system optimization, and downtime reduction.",
        "Remote Technical Support via TeamViewer and AnyDesk for step-by-step problem resolution.",
        "Security Basics: Configured firewalls, antivirus software, and data backup solutions."
      ]
    },
    { 
      year: "Mar 2020 - Mar 2021", 
      company: "Astrofica Technologies", 
      role: "Technologist Intern",
      type: "Contract",
      desc: "Deployed and maintained web servers, debugged software issues, managed SQL databases, resolved HTTP/DNS errors, and programmed microcontrollers using C.",
      bullets: [
        "Deployed and maintained web servers ensuring high uptime during system updates.",
        "Debugged cross-platform software issues and used SQL for database management.",
        "Resolved website/application network errors including HTTP and DNS configuration issues.",
        "Programmed Microcontrollers utilizing C programming language for embedded hardware."
      ]
    },
    { 
      year: "Feb 2019 - Jan 2020", 
      company: "ATA-ATNS", 
      role: "Technician",
      type: "Contract",
      desc: "Air Traffic and Navigation Services. Installed and configured electronic systems, hardware, and software. Optimized computer networks and resolved system errors to ensure high reliability.",
      bullets: [
        "Installed and configured complex electronic systems, hardware, and specialized software.",
        "Optimized computer network performance, connectivity, and reliability.",
        "Diagnosed and resolved critical system errors to minimize operational downtime.",
        "Executed system updates following standardized aviation & traffic protocols."
      ]
    }
  ];

  const educationHistory = [
    {
      degree: "Bachelor of Commerce: Business Informatics",
      level: "NQF 7 (Full-time)",
      institution: "University of South Africa",
      period: "Jun 2025 - Current"
    },
    {
      degree: "National Diploma: Computer Systems Engineering",
      level: "NQF 6 (Full-time)",
      institution: "Cape Peninsula University of Technology",
      period: "Feb 2016 - Nov 2019"
    },
    {
      degree: "Matric",
      level: "High School",
      institution: "Ebenezer Majombozi High School",
      period: "Jan 2006 - Nov 2010"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');

  const frontEndSkills = [
    { icon: <FaReact className="skill-icon" size={24} />, name: "React.js (MERN)", level: "Experienced", percent: 92 },
    { icon: <TbBrandJavascript className="skill-icon" size={24} />, name: "JavaScript (ES6+)", level: "Experienced", percent: 90 },
    { icon: <FaHtml5 className="skill-icon" size={24} />, name: "HTML5", level: "Experienced", percent: 95 },
    { icon: <FaCss3Alt className="skill-icon" size={24} />, name: "CSS3 / Tailwind", level: "Experienced", percent: 92 },
    { icon: <FaWordpressSimple className="skill-icon" size={24} />, name: "Browser DevTools", level: "Experienced", percent: 90 },
  ];

  const backEndSkills = [
    { icon: <BsFiletypeSql className="skill-icon" size={24} />, name: "SQL (PostgreSQL / MySQL)", level: "Experienced", percent: 88 },
    { icon: <SiMongodb className="skill-icon" size={24} />, name: "MongoDB", level: "Experienced", percent: 85 },
    { icon: <FaNodeJs className="skill-icon" size={24} />, name: "Node.js & Express API", level: "Experienced", percent: 88 },
    { icon: <FaServer className="skill-icon" size={24} />, name: "C Programming Language", level: "Intermediate", percent: 78 },
    { icon: <SiFirebase className="skill-icon" size={24} />, name: "Microsoft 365 Services", level: "Experienced", percent: 90 },
  ];

  const specialistTools = [
    { icon: <FaTools className="skill-icon" size={22} />, name: "ServiceNow", level: "Proficient" },
    { icon: <FaLinux className="skill-icon" size={22} />, name: "Windows OS / Server", level: "Proficient" },
    { icon: <FaServer className="skill-icon" size={22} />, name: "Active Directory", level: "Proficient" },
    { icon: <FaLaptopCode className="skill-icon" size={22} />, name: "BeyondTrust", level: "Proficient" },
    { icon: <FaTools className="skill-icon" size={22} />, name: "TeamViewer / AnyDesk", level: "Proficient" },
    { icon: <FaServer className="skill-icon" size={22} />, name: "PowerShell / Bash", level: "Intermediate" },
    { icon: <FaTools className="skill-icon" size={22} />, name: "TCP/IP & DNS", level: "Proficient" },
    { icon: <FaTools className="skill-icon" size={22} />, name: "DHCP & Firewalls", level: "Proficient" },
    { icon: <FaGitAlt className="skill-icon" size={22} />, name: "Git & GitHub", level: "Experienced" },
    { icon: <FaLaptopCode className="skill-icon" size={22} />, name: "Microsoft Office Suite", level: "Proficient" },
  ];

  return (
    <section id="experience" className="py-5 text-white position-relative" style={{ backgroundColor: '#1e293b' }}>
      {/* Background glow overlay */}
      <div 
        className="position-absolute top-50 start-50 translate-middle rounded-circle pointer-events-none opacity-15"
        style={{
          width: '600px',
          height: '600px',
          background: theme.colors.primary,
          filter: 'blur(140px)'
        }}
      />

      <Container className="position-relative z-1 py-4">
        {/* Section Title */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <span 
              className="badge-aqua-light mb-2 d-inline-block font-mono text-uppercase"
              style={{ letterSpacing: '1.5px', backgroundColor: 'rgba(136, 216, 216, 0.2)', color: theme.colors.primary }}
            >
              CAREER & SKILLS
            </span>
            <h2 className="display-4 fw-extrabold text-white">
              My <span style={{ color: theme.colors.primary }}>Experience</span>
            </h2>
            <p className="lead text-slate-300 mx-auto" style={{ maxWidth: '650px' }}>
              Where I've worked, the projects I've led, and my technical stack.
            </p>
            <div className="section-divider"></div>
          </Col>
        </Row>

        {/* Career Timeline Section */}
        <Row className="mb-5 justify-content-center">
          <Col lg={11}>
            <div className="glass-card-dark p-4 p-md-5 rounded-4 shadow-2xl">
              
              {/* Timeline Header Pills */}
              <div className="d-flex flex-wrap justify-content-center gap-2 mb-4 pb-3 border-bottom border-slate-700/60">
                {workHistory.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline-light"
                    className={`rounded-pill px-3 py-1.5 font-mono text-xs transition-all ${index === activeIndex ? 'shadow-lg' : 'opacity-75'}`}
                    onClick={() => setActiveIndex(index)}
                    style={{
                      backgroundColor: index === activeIndex ? theme.colors.primary : 'rgba(255, 255, 255, 0.05)',
                      color: index === activeIndex ? '#0f172a' : '#ffffff',
                      borderColor: index === activeIndex ? theme.colors.primary : 'rgba(255, 255, 255, 0.2)',
                      fontWeight: index === activeIndex ? 700 : 500
                    }}
                  >
                    {item.company} ({item.year.split(' ')[0]})
                  </Button>
                ))}
              </div>

              {/* Active Experience Card Detail */}
              <div className="p-4 rounded-3 bg-slate-900/90 border border-slate-700/80">
                <div className="d-flex flex-col flex-md-row justify-content-between align-items-start gap-3 mb-3">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="badge font-mono text-xs px-3 py-1 rounded-pill" style={{ backgroundColor: 'rgba(136, 216, 216, 0.15)', color: theme.colors.primary }}>
                        <FaCalendarAlt className="me-1.5" /> {workHistory[activeIndex].year}
                      </span>
                      <span className="badge bg-slate-800 text-slate-300 font-mono text-xs px-2.5 py-1 rounded-pill border border-slate-700">
                        {workHistory[activeIndex].type}
                      </span>
                    </div>
                    <h3 className="h3 fw-bold text-white mb-1">
                      {workHistory[activeIndex].role}
                    </h3>
                    <div className="h5 fw-semibold font-mono flex items-center gap-2" style={{ color: theme.colors.primary }}>
                      <FaBuilding size={16} /> {workHistory[activeIndex].company}
                    </div>
                  </div>


                </div>

                <p className="text-slate-300 lead font-sans mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                  {workHistory[activeIndex].desc}
                </p>

                {workHistory[activeIndex].bullets && (
                  <ul className="text-slate-300 font-sans mb-3 ps-3 space-y-2" style={{ fontSize: '0.95rem' }}>
                    {workHistory[activeIndex].bullets.map((bullet, idx) => (
                      <li key={idx} className="mb-1">{bullet}</li>
                    ))}
                  </ul>
                )}

                <div className="d-flex align-items-center gap-2 text-xs font-mono text-emerald-400 mt-3 pt-2 border-t border-slate-800">
                  <FaCheckCircle /> Proven track record in IT support, troubleshooting, system performance & software development.
                </div>
              </div>

              {/* Education Sub-section */}
              <div className="mt-5 pt-4 border-top border-slate-700/60">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <FaBriefcase size={20} style={{ color: theme.colors.primary }} />
                  <h4 className="h5 fw-bold text-white mb-0">Education & Academic Background</h4>
                </div>
                <Row className="g-3">
                  {educationHistory.map((edu, idx) => (
                    <Col md={4} key={idx}>
                      <div className="p-3 rounded-3 bg-slate-900/70 border border-slate-800 h-100">
                        <span className="badge bg-slate-800 text-cyan-300 font-mono text-xs mb-2 d-inline-block">
                          {edu.period}
                        </span>
                        <h5 className="h6 fw-bold text-white mb-1">{edu.degree}</h5>
                        <div className="small text-slate-400 font-mono mb-1">{edu.institution}</div>
                        <span className="badge rounded-pill bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700">
                          {edu.level}
                        </span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

            </div>
          </Col>
        </Row>

        {/* Skills Category Tabs */}
        <div className="text-center mb-4">
          <h3 className="h3 fw-bold text-white mb-3">
            Technical <span style={{ color: theme.colors.primary }}>Skill Set</span>
          </h3>
          <div className="d-inline-flex p-1 rounded-pill bg-slate-800 border border-slate-700">
            <Button
              size="sm"
              className={`rounded-pill px-4 py-1.5 transition-all ${activeSkillCategory === 'all' ? 'fw-bold' : ''}`}
              style={{
                backgroundColor: activeSkillCategory === 'all' ? theme.colors.primary : 'transparent',
                color: activeSkillCategory === 'all' ? '#0f172a' : '#cbd5e1',
                border: 'none'
              }}
              onClick={() => setActiveSkillCategory('all')}
            >
              All Skills
            </Button>
            <Button
              size="sm"
              className={`rounded-pill px-4 py-1.5 transition-all ${activeSkillCategory === 'frontend' ? 'fw-bold' : ''}`}
              style={{
                backgroundColor: activeSkillCategory === 'frontend' ? theme.colors.primary : 'transparent',
                color: activeSkillCategory === 'frontend' ? '#0f172a' : '#cbd5e1',
                border: 'none'
              }}
              onClick={() => setActiveSkillCategory('frontend')}
            >
              Front-End
            </Button>
            <Button
              size="sm"
              className={`rounded-pill px-4 py-1.5 transition-all ${activeSkillCategory === 'backend' ? 'fw-bold' : ''}`}
              style={{
                backgroundColor: activeSkillCategory === 'backend' ? theme.colors.primary : 'transparent',
                color: activeSkillCategory === 'backend' ? '#0f172a' : '#cbd5e1',
                border: 'none'
              }}
              onClick={() => setActiveSkillCategory('backend')}
            >
              Back-End
            </Button>
            <Button
              size="sm"
              className={`rounded-pill px-4 py-1.5 transition-all ${activeSkillCategory === 'tools' ? 'fw-bold' : ''}`}
              style={{
                backgroundColor: activeSkillCategory === 'tools' ? theme.colors.primary : 'transparent',
                color: activeSkillCategory === 'tools' ? '#0f172a' : '#cbd5e1',
                border: 'none'
              }}
              onClick={() => setActiveSkillCategory('tools')}
            >
              DevOps & Tools
            </Button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <Row className="g-4">
          
          {/* Front End Skills */}
          {(activeSkillCategory === 'all' || activeSkillCategory === 'frontend') && (
            <Col md={activeSkillCategory === 'all' ? 6 : 12}>
              <div className="glass-card-dark p-4 rounded-4 h-100">
                <div className="d-flex align-items-center gap-2 mb-4 pb-2 border-bottom border-slate-700">
                  <FaLaptopCode size={22} style={{ color: theme.colors.primary }} />
                  <h4 className="h5 fw-bold text-white mb-0">Front-End Engineering</h4>
                </div>

                <div className="space-y-3">
                  {frontEndSkills.map((skill, index) => (
                    <div key={index} className="p-3 rounded-3 bg-slate-900/60 mb-3 border border-slate-800">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex align-items-center gap-2.5">
                          <span style={{ color: theme.colors.primary }}>{skill.icon}</span>
                          <span className="fw-semibold text-white">{skill.name}</span>
                        </div>
                        <span className="badge rounded-pill bg-slate-800 text-cyan-300 font-mono text-xs border border-slate-700">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-100 bg-slate-800 rounded-pill" style={{ height: '6px' }}>
                        <div 
                          className="h-100 rounded-pill transition-all"
                          style={{ 
                            width: `${skill.percent}%`, 
                            background: `linear-gradient(90deg, ${theme.colors.primaryDark} 0%, ${theme.colors.primary} 100%)` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          )}

          {/* Back End Skills */}
          {(activeSkillCategory === 'all' || activeSkillCategory === 'backend') && (
            <Col md={activeSkillCategory === 'all' ? 6 : 12}>
              <div className="glass-card-dark p-4 rounded-4 h-100">
                <div className="d-flex align-items-center gap-2 mb-4 pb-2 border-bottom border-slate-700">
                  <FaServer size={22} style={{ color: theme.colors.primary }} />
                  <h4 className="h5 fw-bold text-white mb-0">Back-End & Databases</h4>
                </div>

                <div className="space-y-3">
                  {backEndSkills.map((skill, index) => (
                    <div key={index} className="p-3 rounded-3 bg-slate-900/60 mb-3 border border-slate-800">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex align-items-center gap-2.5">
                          <span style={{ color: theme.colors.primary }}>{skill.icon}</span>
                          <span className="fw-semibold text-white">{skill.name}</span>
                        </div>
                        <span className="badge rounded-pill bg-slate-800 text-cyan-300 font-mono text-xs border border-slate-700">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-100 bg-slate-800 rounded-pill" style={{ height: '6px' }}>
                        <div 
                          className="h-100 rounded-pill transition-all"
                          style={{ 
                            width: `${skill.percent}%`, 
                            background: `linear-gradient(90deg, ${theme.colors.primaryDark} 0%, ${theme.colors.primary} 100%)` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          )}

          {/* Technical Specialist Tools */}
          {(activeSkillCategory === 'all' || activeSkillCategory === 'tools') && (
            <Col xs={12}>
              <div className="glass-card-dark p-4 rounded-4 mt-2">
                <div className="d-flex align-items-center gap-2 mb-4 pb-2 border-bottom border-slate-700">
                  <FaTools size={20} style={{ color: theme.colors.primary }} />
                  <h4 className="h5 fw-bold text-white mb-0">IT Support & Cloud Infrastructure Tools</h4>
                </div>

                <Row className="g-3">
                  {specialistTools.map((tool, index) => (
                    <Col key={index} xs={6} sm={4} md={3} lg={2}>
                      <div className="p-3 rounded-3 bg-slate-900/80 border border-slate-800 text-center hover-scale transition-all h-100 d-flex flex-column align-items-center justify-content-center">
                        <div className="mb-2" style={{ color: theme.colors.primary }}>
                          {tool.icon}
                        </div>
                        <div className="fw-semibold text-white small mb-1">{tool.name}</div>
                        <span className="badge rounded-pill bg-slate-800 text-slate-400 font-mono text-xs">
                          {tool.level}
                        </span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          )}

        </Row>

      </Container>
    </section>
  );
};

export default Experience;
