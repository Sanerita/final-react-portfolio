import React, { useState, useRef } from "react";
import {
  Container, Row, Col, Form, Button, Alert, Modal, FloatingLabel,
} from 'react-bootstrap';
import {
  FaWhatsapp, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaCopy, FaCheckCircle,
} from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import emailjs from "emailjs-com";
import { theme } from '../theme';

const ContactPage = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
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

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

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
    if (honeypot.trim().length > 0) {
      console.warn("Spam attempt detected via honeypot.");
      return false;
    }
    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      setRateLimitError("Please wait a few seconds before submitting another message.");
      return false;
    }
    const cleanName = name.trim();
    if (!cleanName) { setNameError("Name is required"); isValid = false; }
    else if (cleanName.length > 100) { setNameError("Name must be 100 characters or less"); isValid = false; }
    else setNameError("");

    const cleanEmail = email.trim();
    if (!cleanEmail) { setEmailError("Email is required"); isValid = false; }
    else if (cleanEmail.length > 100) { setEmailError("Email must be 100 characters or less"); isValid = false; }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(cleanEmail)) { setEmailError("Please enter a valid email address"); isValid = false; }
    else setEmailError("");

    const cleanMessage = message.trim();
    if (!cleanMessage) { setMessageError("Message is required"); isValid = false; }
    else if (cleanMessage.length < 5) { setMessageError("Message should be at least 5 characters"); isValid = false; }
    else if (cleanMessage.length > 2000) { setMessageError("Message must be 2000 characters or less"); isValid = false; }
    else setMessageError("");

    return isValid;
  };

  const sendEmail = async () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      return emailjs.sendForm(serviceId, templateId, form.current, publicKey);
    } else {
      const response = await fetch("https://formsubmit.co/ajax/sanelisiwe.sileku@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name, email, message,
          _subject: `New Portfolio Message from ${name}`,
          _replyto: email,
          _template: "table",
        }),
      });
      if (!response.ok) throw new Error("Failed to send message via email endpoint");
      return response.json();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!validateForm()) { setIsSubmitting(false); return; }

    try {
      await sendEmail();
      setLastSubmitTime(Date.now());
      setName(""); setEmail(""); setMessage("");
      setShowAlert(true);
      if (showModal) handleClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      const mailtoUrl = `mailto:sanelisiwe.sileku@gmail.com?subject=${encodeURIComponent(`Portfolio Inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoUrl;
      setShowAlert(true);
      if (showModal) handleClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '+27781407749';
    const msg = "Hello Sanelisiwe, I visited your portfolio and would like to connect!";
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const ContactRow = ({ icon, label, value, copyType, copied }) => (
    <div
      className="p-3 rounded-3 mb-2 d-flex align-items-center justify-content-between"
      style={{ background: theme.colors.surface2, border: `1px solid ${theme.colors.border}` }}
    >
      <div className="d-flex align-items-center gap-3">
        <div
          className="d-flex align-items-center justify-content-center rounded-2 shrink-0"
          style={{ width: '34px', height: '34px', background: theme.colors.primary + '18', color: theme.colors.primary }}
        >
          {icon}
        </div>
        <div>
          <div className="font-mono" style={{ fontSize: '0.65rem', color: theme.colors.textDim, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {label}
          </div>
          <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 500 }}>{value}</div>
        </div>
      </div>
      <button
        onClick={() => handleCopy(value, copyType)}
        className="btn-ghost d-flex align-items-center justify-content-center"
        style={{ width: '30px', height: '30px', padding: 0 }}
        title={`Copy ${label}`}
      >
        {copied ? <FaCheckCircle size={11} color="#34d399" /> : <FaCopy size={11} />}
      </button>
    </div>
  );

  return (
    <section
      id="ContactPage"
      className="position-relative overflow-hidden"
      style={{ background: theme.colors.bg, padding: '96px 0', borderTop: `1px solid ${theme.colors.border}` }}
    >
      <Container>
        <Row className="mb-5">
          <Col>
            <span className="section-label">// contact</span>
            <h2 className="section-title mt-2">Let's build something.</h2>
            <p style={{ color: theme.colors.textMuted, fontSize: '0.92rem', marginTop: '0.5rem', maxWidth: '560px' }}>
              Open to freelance, contract, and full-time roles. Reach out through any channel below.
            </p>
          </Col>
        </Row>

        <Row className="g-4 align-items-stretch">
          {/* Left: channels */}
          <Col lg={5}>
            <div className="p-4 rounded-3 h-100 d-flex flex-column" style={{ background: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}>
              <h3 className="mb-3" style={{ fontSize: '1.05rem', fontWeight: 500, color: '#fff' }}>
                Direct channels
              </h3>

              <ContactRow
                icon={<FaEnvelope size={14} />}
                label="Email"
                value="sanelisiwe.sileku@gmail.com"
                copyType="email"
                copied={copiedEmail}
              />
              <ContactRow
                icon={<FaPhone size={14} />}
                label="Phone"
                value="078 140 7749"
                copyType="phone"
                copied={copiedPhone}
              />
              <ContactRow
                icon={<FaMapMarkerAlt size={14} />}
                label="Location"
                value="Parklands, Cape Town, South Africa"
              />

              <div className="d-flex gap-2 mt-3">
                <button
                  onClick={openWhatsApp}
                  className="btn-ghost flex-grow-1 d-inline-flex align-items-center justify-content-center gap-2"
                  style={{ fontSize: '0.8rem', borderColor: 'rgba(37,211,102,0.4)', color: '#25D366' }}
                >
                  <FaWhatsapp size={14} /> WhatsApp
                </button>
                <button
                  onClick={handleShow}
                  className="btn-ghost flex-grow-1 d-inline-flex align-items-center justify-content-center gap-2"
                  style={{ fontSize: '0.8rem' }}
                >
                  <FaEnvelope size={12} /> Quick message
                </button>
              </div>

              <div className="mt-auto pt-4 font-mono" style={{ fontSize: '0.7rem', color: theme.colors.textDim }}>
                &gt; typical response time: within 24h
              </div>
            </div>
          </Col>

          {/* Right: form */}
          <Col lg={7}>
            <div className="p-4 p-md-5 rounded-3 h-100" style={{ background: theme.colors.surface, border: `1px solid ${theme.colors.border}` }}>
              <h3 className="mb-2" style={{ fontSize: '1.05rem', fontWeight: 500, color: '#fff' }}>
                Send a message
              </h3>
              <p style={{ fontSize: '0.85rem', color: theme.colors.textMuted, marginBottom: '1.5rem' }}>
                Fill in your details and I'll get back to you promptly.
              </p>

              <Form ref={form} onSubmit={handleSubmit}>
                {/* Honeypot */}
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
                  <Alert variant="warning" className="py-2 px-3 small rounded-2 mb-3">{rateLimitError}</Alert>
                )}

                <FloatingLabel controlId="name" label="Your name *" className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isInvalid={!!nameError}
                    placeholder="Your name"
                  />
                  <Form.Control.Feedback type="invalid">{nameError}</Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel controlId="email" label="Email address *" className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={!!emailError}
                    placeholder="Email address"
                  />
                  <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel controlId="message" label="Your message *" className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    isInvalid={!!messageError}
                    placeholder="Your message"
                    style={{ height: '140px' }}
                  />
                  <Form.Control.Feedback type="invalid">{messageError}</Form.Control.Feedback>
                </FloatingLabel>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-accent w-100 d-inline-flex align-items-center justify-content-center gap-2"
                  style={{ padding: '0.7rem 1rem' }}
                >
                  {isSubmitting ? 'Sending…' : (<><FaPaperPlane size={12} /> Send message</>)}
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Quick modal */}
      <Modal show={showModal} onHide={handleClose} centered contentClassName="border-0" style={{ color: theme.colors.text }}>
        <div style={{ background: theme.colors.surface, border: `1px solid ${theme.colors.border}`, borderRadius: '12px' }}>
          <div className="p-4 pb-0 d-flex align-items-center justify-content-between">
            <h5 className="mb-0" style={{ fontSize: '1.05rem', fontWeight: 500, color: '#fff' }}>Quick message</h5>
            <button onClick={handleClose} className="btn-ghost" style={{ width: '30px', height: '30px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FiX size={16} />
            </button>
          </div>
          <div className="p-4">
            <Form ref={form} onSubmit={handleSubmit}>
              <FloatingLabel controlId="modalName" label="Your name *" className="mb-3">
                <Form.Control type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} isInvalid={!!nameError} />
              </FloatingLabel>
              <FloatingLabel controlId="modalEmail" label="Email address *" className="mb-3">
                <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} isInvalid={!!emailError} />
              </FloatingLabel>
              <FloatingLabel controlId="modalMessage" label="Your message *" className="mb-4">
                <Form.Control as="textarea" rows={4} name="message" value={message} onChange={(e) => setMessage(e.target.value)} isInvalid={!!messageError} style={{ height: '120px' }} />
              </FloatingLabel>
              <button type="submit" disabled={isSubmitting} className="btn-accent w-100">
                {isSubmitting ? 'Sending…' : 'Send message'}
              </button>
            </Form>
          </div>
        </div>
      </Modal>

      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
          className="position-fixed bottom-0 end-0 m-4 z-3"
          style={{ background: theme.colors.surface, color: '#fff', border: `1px solid ${theme.colors.border}` }}
        >
          <Alert.Heading className="h6 mb-1">Message received</Alert.Heading>
          <p className="small mb-0" style={{ color: theme.colors.textMuted }}>
            Thank you for reaching out. Sanelisiwe will reply shortly.
          </p>
        </Alert>
      )}
    </section>
  );
};

export default ContactPage;