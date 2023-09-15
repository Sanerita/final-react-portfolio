import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import emailjs from "emailjs-com";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { FaEnvelope } from "react-icons/fa";



const ContactPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, 'data'),{
      name: name,
      email: email,
      message: message,
    });

    setName('')
    setEmail('')
    setMessage('')
    alert('data sent!!');
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_w2nkzvx",
        "template_ozn1ifc",
        emailData,
        "rMsKsOElPPIg_aJHr"
      )

      .then(
        (response) => {
          console.log("Email sent successfully:", response);
        },
        (error) => {
          console.error("Email could not be sent:", error);
        }
      );
  };
  document.cookie = "myCookie=myValue; SameSite=None; Secure";


  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  // --------------------------------------------------------

  
    const [isOpen, setIsOpen] = useState(false);
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
  
    const closePopup = () => {
      setIsOpen(false);
    };
  
  


  //--------------------------------------------------------- 

  return (
    <div className="contact-me">
      <div className="contact-title">
        <h2>CONTACT ME</h2>
      </div>

      <div className="contact-colums">
        <div className="contact-left">
          <p>
            If you have any questions or inquiries, feel free to get in touch!
          </p>
          <br />
          {/*------------------------------------------------------------------------------ */}
          <div className={`contact-popup ${isOpen ? "open" : ""}`}>
            {!isOpen && (
              <FaEnvelope className="envelope-icon" onClick={togglePopup} />
            )}
            {isOpen && (
              <div className="popup-content">
                <div className="popup-header">
                  <button className="close-button" onClick={closePopup}>
                    {" "}
                    Close Form &times;
                  </button>
                </div>
                <form className="contact-form" onSubmit={sendEmail}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />

                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />

                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    placeholder="write your message"
                    id="message"
                    required
                    value={message}
                    onChange={(event) => {
                      setMessage(event.target.value);
                    }}
                  />

                  <div className="recapture">
                    <ReCAPTCHA
                      sitekey="6Lco3xcoAAAAAMHei-nZgzZPS7ZT4fHd2l0P6mjU"
                      onChange={onChange}
                    />
                  </div>

                  <button type="submit" onClick={handleSubmit}>
                    Send
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* ------------------------------------------------------------------------------- */}

          {/* <form className="contact-form" onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="write your message"
              id="message"
              required
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />

            <div className="recapture">
              <ReCAPTCHA
                sitekey="6Lco3xcoAAAAAMHei-nZgzZPS7ZT4fHd2l0P6mjU"
                onChange={onChange}
              />
              
            </div>

            <button type="submit" onClick={handleSubmit}>
              Send
            </button>
          </form> */}
        </div>

        <div className="flip-card" onClick={flipCard}>
          <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
            <div className="flip-card-front">
              {/* Front content */}
              <div className="contact-right">
                <article className="art-icons">
                  <div className="call-icon">
                    <FiPhoneCall />
                  </div>
                  <h3>+2778 140 7749</h3>
                </article>
                <article className="art-icons">
                  <div className="whatsapp-icon">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h3>+2765 968 2801</h3>
                  </div>
                </article>
              </div>
            </div>
            <div className="flip-card-back">
              {/* Back content */}
              <p>
                Please feel free to reach out to me at your convenience through
                WhatsApp or by giving me a call. I am readily available and look
                forward to connecting with you.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
