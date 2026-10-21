import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  FaGitAlt, FaNodeJs, FaReact, FaHtml5, FaCss3Alt,
  FaLinux, FaBriefcase, FaBuilding, FaCalendarAlt, FaCheckCircle,
  FaLaptopCode, FaServer, FaTools,
} from 'react-icons/fa';
import {
  SiFirebase, SiMongodb, SiPostgresql,
} from 'react-icons/si';
import { BsFiletypeSql } from 'react-icons/bs';
import { TbBrandJavascript } from 'react-icons/tb';
import { theme } from '../theme';

const Experience = () => {
  const workHistory = [
    {
      year: 'Aug 2025 - Present',
      company: 'Advania UK',
      role: 'Managed Services Trainee',
      type: 'Contract',
      desc: 'Provide technical support across various platforms and systems. Deliver remote support via BeyondTrust, administering Microsoft 365 services (user access, permissions, configuration), handling calls, and managing ServiceNow tickets.',
      bullets: [
        'Troubleshoot technical issues for users across diverse platforms & business software.',
        'Deliver remote desktop support via BeyondTrust with step-by-step guidance.',
        'Administer Microsoft 365 services including user access, permissions, and configuration.',
        'Handle inbound and outbound service requests with structured ServiceNow workflows.',
      ],
    },
    {
      year: 'Jan 2023 - Jul 2024',
      company: 'UVU Africa',
      role: 'Software Developer',
      type: 'Contract',
      desc: 'Developed full-stack web applications using the MERN stack, troubleshooting performance bottlenecks, debugging cross-browser issues, and integrating APIs & SQL/NoSQL databases.',
      bullets: [
        'Engineered full-stack web applications utilizing MongoDB, Express, React, and Node.js.',
        'Collaborated with cross-functional teams to integrate REST APIs and relational/non-relational databases.',
        'Optimized web applications for high scalability, reliability, and reduced server crashes.',
      ],
    },
    {
      year: 'May 2021 - Jan 2023',
      company: 'Elpeap Group',
      role: 'IT Technician',
      type: 'Full-time',
      desc: 'Diagnosed and resolved hardware/software issues for 50+ clients (PCs, printers). Executed system upgrades, provided remote support via TeamViewer/AnyDesk, and set up security basics.',
      bullets: [
        'Hardware & Software Troubleshooting for 50+ corporate and individual clients.',
        'System Upgrades & Maintenance: OS installation, system optimization, and downtime reduction.',
        'Remote Technical Support via TeamViewer and AnyDesk for step-by-step problem resolution.',
        'Security Basics: Configured firewalls, antivirus software, and data backup solutions.',
      ],
    },
    {
      year: 'Mar 2020 - Mar 2021',
      company: 'Astrofica Technologies',
      role: 'Technologist Intern',
      type: 'Contract',
      desc: 'Deployed and maintained web servers, debugged software issues, managed SQL databases, resolved HTTP/DNS errors, and programmed microcontrollers using C.',
      bullets: [
        'Deployed and maintained web servers ensuring high uptime during system updates.',
        'Debugged cross-platform software issues and used SQL for database management.',
        'Resolved website/application network errors including HTTP and DNS configuration issues.',
        'Programmed Microcontrollers utilizing C programming language for embedded hardware.',
      ],
    },
    {
      year: 'Feb 2019 - Jan 2020',
      company: 'ATA-ATNS',
      role: 'Technician',
      type: 'Contract',
      desc: 'Air Traffic and Navigation Services. Installed and configured electronic systems, hardware, and software. Optimized computer networks and resolved system errors to ensure high reliability.',
      bullets: [
        'Installed and configured complex electronic systems, hardware, and specialized software.',
        'Optimized computer network performance, connectivity, and reliability.',
        'Diagnosed and resolved critical system errors to minimize operational downtime.',
        'Executed system updates following standardized aviation & traffic protocols.',
      ],
    },
  ];

  const educationHistory = [
    { degree: 'Bachelor of Commerce: Business Informatics', level: 'NQF 7', institution: 'University of South Africa', period: 'Jun 2025 - Current' },
    { degree: 'National Diploma: Computer Systems Engineering', level: 'NQF 6', institution: 'Cape Peninsula University of Technology', period: 'Feb 2016 - Nov 2019' },
    { degree: 'Matric', level: 'High School', institution: 'Ebenezer Majombozi High School', period: 'Jan 2006 - Nov 2010' },
  ];

  const frontEndSkills = [
    { icon: <FaReact size={14} />, name: 'React.js (MERN)', level: 'Experienced', percent: 92 },
    { icon: <TbBrandJavascript size={14} />, name: 'JavaScript (ES6+)', level: 'Experienced', percent: 90 },
    { icon: <FaHtml5 size={14} />, name: 'HTML5', level: 'Experienced', percent: 95 },
    { icon: <FaCss3Alt size={14} />, name: 'CSS3 / Tailwind', level: 'Experienced', percent: 92 },
    { icon: <FaTools size={14} />, name: 'Browser DevTools', level: 'Experienced', percent: 90 },
  ];

  const backEndSkills = [
    { icon: <BsFiletypeSql size={14} />, name: 'SQL (PostgreSQL / MySQL)', level: 'Experienced', percent: 88 },
    { icon: <SiMongodb size={14} />, name: 'MongoDB', level: 'Experienced', percent: 85 },
    { icon: <FaNodeJs size={14} />, name: 'Node.js & Express API', level: 'Experienced', percent: 88 },
    { icon: <FaServer size={14} />, name: 'C Programming', level: 'Intermediate', percent: 78 },
    { icon: <SiFirebase size={14} />, name: 'Microsoft 365 Services', level: 'Experienced', percent: 90 },
  ];

  const specialistTools = [
    { icon: <FaTools size={14} />, name: 'ServiceNow', level: 'Proficient' },
    { icon: <FaLinux size={14} />, name: 'Windows OS / Server', level: 'Proficient' },
    { icon: <FaServer size={14} />, name: 'Active Directory', level: 'Proficient' },
    { icon: <FaLaptopCode size={14} />, name: 'BeyondTrust', level: 'Proficient' },
    { icon: <FaTools size={14} />, name: 'TeamViewer / AnyDesk', level: 'Proficient' },
    { icon: <FaServer size={14} />, name: 'PowerShell / Bash', level: 'Intermediate' },
    { icon: <FaTools size={14} />, name: 'TCP/IP & DNS', level: 'Proficient' },
    { icon: <FaTools size={14} />, name: 'DHCP & Firewalls', level: 'Proficient' },
    { icon: <FaGitAlt size={14} />, name: 'Git & GitHub', level: 'Experienced' },
    { icon: <FaLaptopCode size={14} />, name: 'Microsoft Office Suite', level: 'Proficient' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');

  const SkillRow = ({ skill }) => (
    <div className="mb-3">
      <div className="d-flex align-items-center justify-content-between mb-1">
        <div className="d-flex align-items-center gap-2">
          <span style={{ color: theme.colors.primary }}>{skill.icon}</span>
          <span style={{ fontSize: '0.85rem', color: '#fff' }}>{skill.name}</span>
        </div>
        <span className="font-mono" style={{ fontSize: '0.68rem', color: theme.colors.textMuted }}>
          {skill.level}
        </span>
      </div>
      <div style={{ height: '4px', background: theme.colors.surface2, borderRadius: '2px', overflow: 'hidden' }}>
        <div
          style={{
            width: `${skill.percent}%`,
            height: '100%',
            background: theme.colors.primary,
            borderRadius: '2px',
            transition: 'width 0.5s ease',
          }}
        />
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      className="position-relative overflow-hidden"
      style={{ background: theme.colors.bg, padding: '96px 0', borderTop: `1px solid ${theme.colors.border}` }}
    >
      <Container>
        <Row className="mb-5">
          <Col>
            <span className="section-label">// experience</span>
            <h2 className="section-title mt-2">Career &amp; skills</h2>
          </Col>
        </Row>

        {/* Timeline tabs */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex flex-wrap gap-2">
              {workHistory.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="font-mono"
                  style={{
                    background: i === activeIndex ? theme.colors.primary : theme.colors.surface,
                    color: i === activeIndex ? '#fff' : theme.colors.textMuted,
                    border: `1px solid ${i === activeIndex ? theme.colors.primary : theme.colors.border}`,
                    borderRadius: theme.radii.btn,
                    padding: '0.4rem 0.75rem',
                    fontSize: '0.72rem',
                    letterSpacing: '0.02em',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item.company}
                </button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Active role */}
        <Row className="mb-5">
          <Col>
            <div className="p-4 rounded-3" style={{ background: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}>
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <span className="badge-aqua font-mono d-inline-flex align-items-center gap-1">
                  <FaCalendarAlt size={10} /> {workHistory[activeIndex].year}
                </span>
                <span className="badge-aqua font-mono">{workHistory[activeIndex].type}</span>
              </div>

              <h3 className="mb-1" style={{ fontSize: '1.25rem', fontWeight: 500, color: '#fff' }}>
                {workHistory[activeIndex].role}
              </h3>
              <div className="font-mono d-flex align-items-center gap-2 mb-3" style={{ fontSize: '0.82rem', color: theme.colors.primary }}>
                <FaBuilding size={12} /> {workHistory[activeIndex].company}
              </div>

              <p style={{ color: theme.colors.textMuted, fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                {workHistory[activeIndex].desc}
              </p>

              <ul style={{ color: theme.colors.textMuted, fontSize: '0.88rem', lineHeight: 1.8, paddingLeft: '1.1rem', marginBottom: '1rem' }}>
                {workHistory[activeIndex].bullets.map((b, i) => (
                  <li key={i} style={{ marginBottom: '0.25rem' }}>{b}</li>
                ))}
              </ul>

              <div className="font-mono d-flex align-items-center gap-2 pt-3" style={{ fontSize: '0.7rem', color: '#34d399', borderTop: `1px solid ${theme.colors.border}` }}>
                <FaCheckCircle size={10} /> Proven track record in IT support, troubleshooting, and software development.
              </div>
            </div>
          </Col>
        </Row>

        {/* Education */}
        <div className="mb-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <FaBriefcase size={14} style={{ color: theme.colors.primary }} />
            <h4 className="mb-0" style={{ fontSize: '0.95rem', fontWeight: 500, color: '#fff' }}>
              Education &amp; academic background
            </h4>
          </div>
          <Row className="g-3">
            {educationHistory.map((edu, i) => (
              <Col md={4} key={i}>
                <div className="p-3 rounded-3 h-100" style={{ background: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}>
                  <span className="font-mono" style={{ fontSize: '0.68rem', color: theme.colors.textMuted }}>
                    {edu.period}
                  </span>
                  <h5 className="mt-2 mb-1" style={{ fontSize: '0.85rem', fontWeight: 500, color: '#fff' }}>{edu.degree}</h5>
                  <div className="font-mono" style={{ fontSize: '0.72rem', color: theme.colors.textMuted, marginBottom: '0.4rem' }}>{edu.institution}</div>
                  <span className="badge-aqua font-mono" style={{ fontSize: '0.65rem' }}>{edu.level}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Skills tabs */}
        <div className="mb-4">
          <div className="d-flex flex-wrap gap-2">
            {[
              { key: 'all', label: 'All skills' },
              { key: 'frontend', label: 'Front-end' },
              { key: 'backend', label: 'Back-end' },
              { key: 'tools', label: 'DevOps & Tools' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveSkillCategory(tab.key)}
                className="font-mono"
                style={{
                  background: activeSkillCategory === tab.key ? theme.colors.primary : 'transparent',
                  color: activeSkillCategory === tab.key ? '#fff' : theme.colors.textMuted,
                  border: `1px solid ${activeSkillCategory === tab.key ? theme.colors.primary : theme.colors.border}`,
                  borderRadius: theme.radii.btn,
                  padding: '0.4rem 0.8rem',
                  fontSize: '0.72rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <Row className="g-4">
          {(activeSkillCategory === 'all' || activeSkillCategory === 'frontend') && (
            <Col md={activeSkillCategory === 'all' ? 6 : 12}>
              <div className="p-4 rounded-3 h-100" style={{ background: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}>
                <div className="d-flex align-items-center gap-2 mb-3 pb-2" style={{ borderBottom: `1px solid ${theme.colors.border}` }}>
                  <FaLaptopCode size={14} style={{ color: theme.colors.primary }} />
                  <h4 className="mb-0" style={{ fontSize: '0.9rem', fontWeight: 500, color: '#fff' }}>Front-end</h4>
                </div>
                {frontEndSkills.map((s, i) => <SkillRow key={i} skill={s} />)}
              </div>
            </Col>
          )}

          {(activeSkillCategory === 'all' || activeSkillCategory === 'backend') && (
            <Col md={activeSkillCategory === 'all' ? 6 : 12}>
              <div className="p-4 rounded-3 h-100" style={{ background: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}>
                <div className="d-flex align-items-center gap-2 mb-3 pb-2" style={{ borderBottom: `1px solid ${theme.colors.border}` }}>
                  <FaServer size={14} style={{ color: theme.colors.primary }} />
                  <h4 className="mb-0" style={{ fontSize: '0.9rem', fontWeight: 500, color: '#fff' }}>Back-end &amp; databases</h4>
                </div>
                {backEndSkills.map((s, i) => <SkillRow key={i} skill={s} />)}
              </div>
            </Col>
          )}

          {(activeSkillCategory === 'all' || activeSkillCategory === 'tools') && (
            <Col xs={12}>
              <div className="p-4 rounded-3" style={{ background: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}>
                <div className="d-flex align-items-center gap-2 mb-3 pb-2" style={{ borderBottom: `1px solid ${theme.colors.border}` }}>
                  <FaTools size={14} style={{ color: theme.colors.primary }} />
                  <h4 className="mb-0" style={{ fontSize: '0.9rem', fontWeight: 500, color: '#fff' }}>IT Support &amp; cloud tools</h4>
                </div>
                <Row className="g-2">
                  {specialistTools.map((tool, i) => (
                    <Col key={i} xs={6} sm={4} md={3} lg={2}>
                      <div
                        className="p-2 rounded-2 text-center h-100 d-flex flex-column align-items-center justify-content-center"
                        style={{ background: theme.colors.surface2, border: `1px solid ${theme.colors.border}` }}
                      >
                        <div className="mb-1" style={{ color: theme.colors.primary }}>{tool.icon}</div>
                        <div style={{ fontSize: '0.72rem', color: '#fff', fontWeight: 500, marginBottom: '2px' }}>{tool.name}</div>
                        <div className="font-mono" style={{ fontSize: '0.6rem', color: theme.colors.textMuted }}>{tool.level}</div>
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