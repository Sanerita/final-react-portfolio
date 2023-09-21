import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { FaEnvelope } from "react-icons/fa";
import undrawPersonal from '../assets/undraw_personal_text_re_vqj3.svg';



const ContactPage = () => {

  
    const openWhatsApp = () => {
      const phoneNumber = '+2765 968 2801'; // my whatsapp number
      const message = 'Hello, Lets get intouch!'; // Optional: You can pre-fill a message
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };
  
  // ------------------------------email.js-------------------------
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

  // -------------------------end of email.js-------------------------------

  document.cookie = "myCookie=myValue; SameSite=None; Secure";



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

    <div id="ContactPage">
    <div className="contact-me">
      <div className="contact-title">
        <h2>CONTACT ME</h2>
      </div>

      <div className="contact-colums">
        <div className="contact-left">
          <p>
            If you have any questions or inquiries, feel free to CLICK on the envelope to get in touch!
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

         
        </div>

        <div className="whatsapp-button">
      <button onClick={openWhatsApp}>
        <FaWhatsapp />
        Chat on WhatsApp
      </button>
    </div>

    <img className ="undrawPersonal" src={undrawPersonal} alt="Personal SVG" />

      </div>
    </div>
    </div>
  );
};

export default ContactPage;
