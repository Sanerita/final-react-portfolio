import React, { useState, useRef } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Container, Row, Col, Form, Button, Alert, Modal } from 'react-bootstrap';
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

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else if (!isValidName(name)) {
      setNameError("Invalid name format");
      isValid = false;
    } else {
      setNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (message.trim() === "") {
      setMessageError("Message is required");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (!isValid) return;

    await addDoc(collection(db, 'data'), {
      name: name,
      email: email,
      message: message,
    });

    sendEmail();
    setName("");
    setEmail("");
    setMessage("");
    setShowAlert(true);
    handleClose();
  };

  // ... keep the rest of your helper functions (isValidName, isValidEmail, etc.)

  const openWhatsApp = () => {
    const phoneNumber = '+2765 968 2801';
    const message = 'Hello, Let\'s get in touch!';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="ContactPage" className="py-5">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} className="text-center">
            <h2 className="display-4">CONTACT ME</h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <p className="lead">
              If you have any questions or inquiries, feel free to click on the envelope to get in touch!
            </p>
            
            <div className="d-flex gap-3 mt-4">
              <Button variant="outline-primary" onClick={handleShow}>
                <FaEnvelope className="me-2" />
                Email Me
              </Button>
              
              <Button variant="success" onClick={openWhatsApp}>
                <FaWhatsapp className="me-2" />
                WhatsApp
              </Button>
            </div>
          </Col>

          <Col md={6}>
            <img src={undrawPersonal} alt="Personal SVG" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={form} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isInvalid={!!nameError}
              />
              <Form.Control.Feedback type="invalid">
                {nameError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!emailError}
              />
              <Form.Control.Feedback type="invalid">
                {emailError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                isInvalid={!!messageError}
              />
              <Form.Control.Feedback type="invalid">
                {messageError}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="mb-3">
              <ReCAPTCHA
                sitekey="6LfmYkUoAAAAAJfPLa7V5nbVOs5zGoD6WXivA39J"
                onChange={() => {}}
              />
            </div>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible className="position-fixed bottom-0 end-0 m-3">
          Message sent successfully!
        </Alert>
      )}
    </section>
  );
};

export default ContactPage;