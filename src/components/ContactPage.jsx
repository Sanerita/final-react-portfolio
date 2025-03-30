import React, { useState, useRef } from "react";
import { 
  Container, 
  Row, 
  Col, 
  Form, 
  Button, 
  Alert, 
  Modal,
  Card,  // Add this import
  FloatingLabel 
} from 'react-bootstrap';  // Make sure this line includes Card
import { FaWhatsapp, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import undrawPersonal from '../assets/undraw_personal_text_re_vqj3.svg';

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

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validation logic here...

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

  const openWhatsApp = () => {
    const phoneNumber = '+2765 968 2801';
    const message = 'Hello, Let\'s get in touch!';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="ContactPage" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <h2 className="display-4 fw-bold">Get In Touch</h2>
            <p className="lead text-muted">I'd love to hear from you</p>
            <div className="divider mx-auto bg-primary"></div>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="pe-lg-5">
              <h3 className="mb-4">Let's Connect</h3>
              <p className="lead mb-4">
                Have a project in mind or want to discuss potential opportunities? 
                Feel free to reach out through any of these channels.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mb-5">
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={handleShow}
                  className="d-flex align-items-center"
                >
                  <FaEnvelope className="me-2" /> Email Me
                </Button>
                
                <Button 
                  variant="success" 
                  size="lg" 
                  onClick={openWhatsApp}
                  className="d-flex align-items-center"
                >
                  <FaWhatsapp className="me-2" /> WhatsApp
                </Button>
              </div>
              
              <div className="contact-image-container">
                <img 
                  src={undrawPersonal} 
                  alt="Contact illustration" 
                  className="img-fluid" 
                />
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 p-md-5">
                <h3 className="mb-4">Send Me a Message</h3>
                <Form ref={form} onSubmit={handleSubmit}>
                  <FloatingLabel controlId="name" label="Your Name" className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      isInvalid={!!nameError}
                      placeholder="Your Name"
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
                      style={{ height: '150px' }}
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
                    className="w-100 d-flex align-items-center justify-content-center"
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

      {showAlert && (
        <Alert 
          variant="success" 
          onClose={() => setShowAlert(false)} 
          dismissible
          className="position-fixed bottom-0 end-0 m-3 shadow"
        >
          <Alert.Heading>Message Sent!</Alert.Heading>
          <p>Thank you for reaching out. I'll get back to you soon.</p>
        </Alert>
      )}
    </section>
  );
};

export default ContactPage;