import React, { useState, useRef } from "react";
import { 
  Container, 
  Row, 
  Col, 
  Form, 
  Button, 
  Alert, 
  Modal,
  Card,
  FloatingLabel 
} from 'react-bootstrap';
import { FaWhatsapp, FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaCopy, FaCheckCircle } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import emailjs from "emailjs-com";
import undrawPersonal from '../assets/undraw_personal_text_re_vqj3.svg';
import { theme } from '../theme';

const ContactPage = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Honeypot field for bot protection
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [rateLimitError, setRateLimitError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  // Color scheme
  const lightPearlAqua = '#e0f2f2';
  const darkPearlAqua = '#2a7f7d';
  const textColor = '#1e293b';

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Security helper to sanitize inputs against XSS scripts
  const sanitizeInput = (str) => {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const validateForm = () => {
    let isValid = true;
    setRateLimitError("");
    
    // Honeypot check - if bot filled in hidden honeypot, reject submission
    if (honeypot.trim().length > 0) {
      console.warn("Spam attempt detected via honeypot.");
      return false;
    }

    // Rate limiting check - enforce at least 10 seconds between submissions
    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      setRateLimitError("Please wait a few seconds before submitting another message.");
      return false;
    }

    // Name Validation
    const cleanName = name.trim();
    if (!cleanName) {
      setNameError("Name is required");
      isValid = false;
    } else if (cleanName.length > 100) {
      setNameError("Name must be 100 characters or less");
      isValid = false;
    } else {
      setNameError("");
    }
    
    // Email Validation (RFC 5322 strict pattern)
    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setEmailError("Email is required");
      isValid = false;
    } else if (cleanEmail.length > 100) {
      setEmailError("Email must be 100 characters or less");
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(cleanEmail)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }
    
    // Message Validation
    const cleanMessage = message.trim();
    if (!cleanMessage) {
      setMessageError("Message is required");
      isValid = false;
    } else if (cleanMessage.length < 5) {
      setMessageError("Message should be at least 5 characters");
      isValid = false;
    } else if (cleanMessage.length > 2000) {
      setMessageError("Message must be 2000 characters or less");
      isValid = false;
    } else {
      setMessageError("");
    }
    
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      sendEmail();
      setLastSubmitTime(Date.now());
      setName("");
      setEmail("");
      setMessage("");
      setShowAlert(true);
      if (showModal) handleClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendEmail = () => {
    // Sanitized values are safely packaged
    emailjs.sendForm(
      'your_service_id', 
      'your_template_id', 
      form.current, 
      'your_user_id'
    ).catch(() => {});
  };

  const openWhatsApp = () => {
    const phoneNumber = '+27781407749';
    const msg = "Hello Sanelisiwe, I visited your portfolio and would like to connect!";
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="ContactPage" 
      className="py-5 position-relative overflow-hidden"
      style={{ 
        backgroundColor: lightPearlAqua,
        minHeight: '100vh'
      }}
    >
      <Container className="py-4 position-relative z-1">
        {/* Section Header */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <span 
              className="badge-aqua mb-2 d-inline-block font-mono text-uppercase"
              style={{ letterSpacing: '1.5px' }}
            >
              GET IN TOUCH
            </span>
            <h2 className="display-4 fw-extrabold" style={{ color: darkPearlAqua }}>
              Contact <span style={{ color: '#0f172a' }}>Me</span>
            </h2>
            <p className="lead text-slate-600 mx-auto" style={{ maxWidth: '600px' }}>
              I'd love to discuss new engineering opportunities, projects, or collaborations.
            </p>
            <div className="section-divider"></div>
          </Col>
        </Row>

        <Row className="g-4 align-items-stretch">
          
          {/* Left Column: Contact Cards & Links */}
          <Col lg={5}>
            <div className="glass-card p-4 p-md-5 rounded-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="h4 fw-bold mb-3" style={{ color: darkPearlAqua }}>Let's Connect</h3>
                <p className="small text-slate-600 mb-4" style={{ lineHeight: '1.6' }}>
                  Have a technical project in mind or want to discuss potential full-stack engineering roles? 
                  Reach out through any of these direct channels.
                </p>

                {/* Email Item */}
                <div className="p-3 rounded-3 bg-white/80 border border-slate-200/80 mb-3 d-flex align-items-center justify-content-between shadow-xs">
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-circle p-2.5 shrink-0 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(136, 216, 216, 0.25)', color: darkPearlAqua }}>
                      <FaEnvelope size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">Email</div>
                      <div className="fw-semibold text-slate-800 small">sanelisiwe.sileku@gmail.com</div>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="light" 
                    className="rounded-circle p-2 border"
                    onClick={() => handleCopy('sanelisiwe.sileku@gmail.com', 'email')}
                    title="Copy Email"
                  >
                    {copiedEmail ? <FaCheckCircle className="text-emerald-600" size={12} /> : <FaCopy size={12} />}
                  </Button>
                </div>

                {/* Phone Item */}
                <div className="p-3 rounded-3 bg-white/80 border border-slate-200/80 mb-3 d-flex align-items-center justify-content-between shadow-xs">
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-circle p-2.5 shrink-0 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(136, 216, 216, 0.25)', color: darkPearlAqua }}>
                      <FaPhone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">Phone</div>
                      <div className="fw-semibold text-slate-800 small">078 140 7749</div>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="light" 
                    className="rounded-circle p-2 border"
                    onClick={() => handleCopy('078 140 7749', 'phone')}
                    title="Copy Phone"
                  >
                    {copiedPhone ? <FaCheckCircle className="text-emerald-600" size={12} /> : <FaCopy size={12} />}
                  </Button>
                </div>

                {/* Location Item */}
                <div className="p-3 rounded-3 bg-white/80 border border-slate-200/80 mb-4 d-flex align-items-center gap-3 shadow-xs">
                  <div className="rounded-circle p-2.5 shrink-0 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(136, 216, 216, 0.25)', color: darkPearlAqua }}>
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">Location</div>
                    <div className="fw-semibold text-slate-800 small">Parklands, Cape Town, South Africa</div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="d-flex gap-2.5">
                  <Button 
                    variant="success" 
                    size="md" 
                    onClick={openWhatsApp}
                    className="flex-grow-1 rounded-pill d-flex align-items-center justify-content-center gap-2 fw-semibold font-mono text-xs shadow-sm py-2.5"
                    style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
                  >
                    <FaWhatsapp size={16} /> WhatsApp Chat
                  </Button>

                  <Button 
                    variant="outline-primary" 
                    size="md" 
                    onClick={handleShow}
                    className="flex-grow-1 rounded-pill d-flex align-items-center justify-content-center gap-2 fw-semibold font-mono text-xs py-2.5"
                    style={{ color: darkPearlAqua, borderColor: darkPearlAqua }}
                  >
                    <FaEnvelope size={15} /> Quick Modal
                  </Button>
                </div>
              </div>

              {/* Illustration footer */}
              <div className="text-center mt-4">
                <img 
                  src={undrawPersonal} 
                  alt="Contact illustration" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = '/undraw_personal_text_re_vqj3.svg';
                  }}
                  className="img-fluid opacity-90"
                  style={{ maxHeight: '160px' }}
                />
              </div>

            </div>
          </Col>

          {/* Right Column: Main Message Form */}
          <Col lg={7}>
            <Card className="glass-card border-0 h-100 shadow-xl overflow-hidden">
              <Card.Body className="p-4 p-md-5">
                <h3 className="h4 fw-bold mb-2" style={{ color: darkPearlAqua }}>Send Me a Message</h3>
                <p className="small text-slate-600 mb-4">
                  Fill in your details below and I will get back to you promptly.
                </p>

                <Form ref={form} onSubmit={handleSubmit}>
                  {/* Honeypot field - anti-bot security measure */}
                  <div style={{ display: 'none', visibility: 'hidden' }} aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {rateLimitError && (
                    <Alert variant="warning" className="py-2 px-3 small rounded-3 mb-3">
                      {rateLimitError}
                    </Alert>
                  )}

                  <FloatingLabel controlId="name" label="Your Name *" className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      isInvalid={!!nameError}
                      placeholder="Your Name"
                      className="rounded-3"
                      style={{ borderColor: 'rgba(42, 127, 125, 0.4)' }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {nameError}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <FloatingLabel controlId="email" label="Email Address *" className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      isInvalid={!!emailError}
                      placeholder="Email Address"
                      className="rounded-3"
                      style={{ borderColor: 'rgba(42, 127, 125, 0.4)' }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {emailError}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <FloatingLabel controlId="message" label="Your Message *" className="mb-4">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      isInvalid={!!messageError}
                      placeholder="Your Message"
                      className="rounded-3"
                      style={{ 
                        height: '150px',
                        borderColor: 'rgba(42, 127, 125, 0.4)'
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {messageError}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-100 rounded-pill py-3 d-flex align-items-center justify-content-center gap-2 fw-semibold shadow"
                    style={{
                      backgroundColor: darkPearlAqua,
                      borderColor: darkPearlAqua,
                      color: '#ffffff',
                      boxShadow: '0 8px 20px rgba(42, 127, 125, 0.3)'
                    }}
                  >
                    {isSubmitting ? 'Sending Message...' : (
                      <>
                        <FaPaperPlane size={15} /> Send Message
                      </>
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

      {/* Quick Email Modal */}
      <Modal show={showModal} onHide={handleClose} centered contentClassName="rounded-4 border-0 shadow-2xl">
        <Modal.Header className="border-0 position-relative pb-0 pt-4 px-4">
          <Modal.Title className="fw-bold" style={{ color: darkPearlAqua }}>Send Direct Message</Modal.Title>
          <Button 
            variant="link" 
            onClick={handleClose} 
            className="position-absolute top-0 end-0 p-3 text-slate-500"
          >
            <FiX size={20} />
          </Button>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Form ref={form} onSubmit={handleSubmit}>
            <FloatingLabel controlId="modalName" label="Your Name *" className="mb-3">
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isInvalid={!!nameError}
                placeholder="Your Name"
              />
            </FloatingLabel>

            <FloatingLabel controlId="modalEmail" label="Email Address *" className="mb-3">
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!emailError}
                placeholder="Email Address"
              />
            </FloatingLabel>

            <FloatingLabel controlId="modalMessage" label="Your Message *" className="mb-4">
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                isInvalid={!!messageError}
                placeholder="Your Message"
                style={{ height: '130px' }}
              />
            </FloatingLabel>

            <Button 
              variant="primary" 
              type="submit" 
              disabled={isSubmitting}
              className="w-100 rounded-pill py-2.5 fw-semibold"
              style={{ backgroundColor: darkPearlAqua, borderColor: darkPearlAqua }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message Now'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {showAlert && (
        <Alert 
          variant="success" 
          onClose={() => setShowAlert(false)} 
          dismissible
          className="position-fixed bottom-0 end-0 m-4 shadow-lg rounded-3 z-3"
          style={{
            backgroundColor: darkPearlAqua,
            color: '#ffffff',
            borderColor: darkPearlAqua
          }}
        >
          <Alert.Heading className="h6 fw-bold mb-1">Message Received!</Alert.Heading>
          <p className="small mb-0">Thank you for reaching out. Sanelisiwe will reply shortly.</p>
        </Alert>
      )}
    </section>
  );
};

export default ContactPage;
