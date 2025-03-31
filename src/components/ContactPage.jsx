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
import { FaWhatsapp, FaEnvelope, FaPaperPlane, FaTimes } from 'react-icons/fa';
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import undrawPersonal from '../assets/undraw_personal_text_re_vqj3.svg';
import { theme } from '../theme';
// import './ContactPage.css'; // For animations

const ContactPage = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const validateForm = () => {
    let isValid = true;
    
    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }
    
    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }
    
    if (!message.trim()) {
      setMessageError("Message is required");
      isValid = false;
    } else if (message.length < 10) {
      setMessageError("Message should be at least 10 characters");
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
      await addDoc(collection(db, 'data'), {
        name,
        email,
        message,
        timestamp: new Date()
      });

      sendEmail();
      setName("");
      setEmail("");
      setMessage("");
      setShowAlert(true);
      handleClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendEmail = () => {
    emailjs.sendForm(
      'your_service_id', 
      'your_template_id', 
      form.current, 
      'your_user_id'
    ).then(
      (result) => {
        console.log(result.text);
      }, 
      (error) => {
        console.log(error.text);
      }
    );
  };

  const openWhatsApp = () => {
    const phoneNumber = '+2765 968 2801';
    const message = 'Hello, Let\'s get in touch!';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="ContactPage" className="py-5" style={{ backgroundColor: theme.colors.light }}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <h2 className="display-4 fw-bold">Get In Touch</h2>
            <p className="lead" style={{ color: theme.colors.textLight }}>I'd love to hear from you</p>
            <div 
              className="divider mx-auto" 
              style={{ 
                height: '4px', 
                width: '80px', 
                background: theme.gradients.aquaGradient,
                borderRadius: '2px'
              }}
            ></div>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="pe-lg-5">
              <h3 className="mb-4" style={{ color: theme.colors.primaryDark }}>Let's Connect</h3>
              <p className="lead mb-4" style={{ color: theme.colors.text }}>
                Have a project in mind or want to discuss potential opportunities? 
                Feel free to reach out through any of these channels.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mb-5">
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={handleShow}
                  className="d-flex align-items-center shadow-sm"
                  style={{
                    backgroundColor: theme.colors.primary,
                    borderColor: theme.colors.primary,
                    '&:hover': {
                      backgroundColor: theme.colors.primaryDark,
                      borderColor: theme.colors.primaryDark
                    }
                  }}
                >
                  <FaEnvelope className="me-2" /> Email Me
                </Button>
                
                <Button 
                  variant="success" 
                  size="lg" 
                  onClick={openWhatsApp}
                  className="d-flex align-items-center shadow-sm"
                  style={{
                    backgroundColor: '#25D366',
                    borderColor: '#25D366',
                    '&:hover': {
                      backgroundColor: '#128C7E',
                      borderColor: '#128C7E'
                    }
                  }}
                >
                  <FaWhatsapp className="me-2" /> WhatsApp
                </Button>
              </div>
              
              <div 
                className="contact-image-container position-relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img 
                  src={undrawPersonal} 
                  alt="Contact illustration" 
                  className="img-fluid" 
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: isHovered 
                      ? `linear-gradient(135deg, ${theme.colors.primary}20 0%, ${theme.colors.primaryLight}20 100%)` 
                      : 'transparent',
                    transition: 'background 0.3s ease'
                  }}
                ></div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <Card className="border-0 shadow-sm animate__animated animate__fadeIn">
              <Card.Body className="p-4 p-md-5">
                <h3 className="mb-4" style={{ color: theme.colors.primaryDark }}>Send Me a Message</h3>
                <Form ref={form} onSubmit={handleSubmit}>
                  <FloatingLabel controlId="name" label="Your Name" className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      isInvalid={!!nameError}
                      placeholder="Your Name"
                      style={{ borderColor: theme.colors.primaryLight }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {nameError}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <FloatingLabel controlId="email" label="Email Address" className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      isInvalid={!!emailError}
                      placeholder="Email Address"
                      style={{ borderColor: theme.colors.primaryLight }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {emailError}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <FloatingLabel controlId="message" label="Your Message" className="mb-4">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      isInvalid={!!messageError}
                      placeholder="Your Message"
                      style={{ 
                        height: '150px',
                        borderColor: theme.colors.primaryLight
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {messageError}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <div className="mb-4">
                    <ReCAPTCHA
                      sitekey="6LfmYkUoAAAAAJfPLa7V5nbVOs5zGoD6WXivA39J"
                      onChange={() => {}}
                    />
                  </div>

                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-100 d-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      backgroundColor: theme.colors.primary,
                      borderColor: theme.colors.primary,
                      '&:hover': {
                        backgroundColor: theme.colors.primaryDark,
                        borderColor: theme.colors.primaryDark
                      }
                    }}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <FaPaperPlane className="me-2" /> Send Message
                      </>
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header className="border-0 position-relative">
          <Modal.Title style={{ color: theme.colors.primaryDark }}>Send Me an Email</Modal.Title>
          <Button 
            variant="link" 
            onClick={handleClose} 
            className="position-absolute top-0 end-0 p-3"
            style={{ color: theme.colors.textLight }}
          >
            <FaTimes />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form ref={form} onSubmit={handleSubmit}>
            <FloatingLabel controlId="modalName" label="Your Name" className="mb-3">
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isInvalid={!!nameError}
                placeholder="Your Name"
                style={{ borderColor: theme.colors.primaryLight }}
              />
              <Form.Control.Feedback type="invalid">
                {nameError}
              </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel controlId="modalEmail" label="Email Address" className="mb-3">
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!emailError}
                placeholder="Email Address"
                style={{ borderColor: theme.colors.primaryLight }}
              />
              <Form.Control.Feedback type="invalid">
                {emailError}
              </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel controlId="modalMessage" label="Your Message" className="mb-4">
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                isInvalid={!!messageError}
                placeholder="Your Message"
                style={{ 
                  height: '150px',
                  borderColor: theme.colors.primaryLight
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
              className="w-100 d-flex align-items-center justify-content-center shadow-sm"
              style={{
                backgroundColor: theme.colors.primary,
                borderColor: theme.colors.primary,
                '&:hover': {
                  backgroundColor: theme.colors.primaryDark,
                  borderColor: theme.colors.primaryDark
                }
              }}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <FaPaperPlane className="me-2" /> Send Message
                </>
              )}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {showAlert && (
        <Alert 
          variant="success" 
          onClose={() => setShowAlert(false)} 
          dismissible
          className="position-fixed bottom-0 end-0 m-3 shadow animate__animated animate__fadeInUp"
          style={{
            backgroundColor: theme.colors.primaryLight,
            color: theme.colors.white,
            borderColor: theme.colors.primary
          }}
        >
          <Alert.Heading>Message Sent!</Alert.Heading>
          <p>Thank you for reaching out. I'll get back to you soon.</p>
        </Alert>
      )}
    </section>
  );
};

export default ContactPage;