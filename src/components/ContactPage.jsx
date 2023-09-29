import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { FaEnvelope } from "react-icons/fa";
import undrawPersonal from '../assets/undraw_personal_text_re_vqj3.svg';
import { useRef } from 'react';


const ContactPage = () => {

  const form = useRef();
    const openWhatsApp = () => {
      const phoneNumber = '+2765 968 2801'; // my whatsapp number
      const message = 'Hello, Lets get intouch!'; 
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };
  
  // ------------------------------email.js-------------------------
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  // Add state variables for validation errors
const [nameError, setNameError] = useState('');
const [emailError, setEmailError] = useState('');
const [messageError, setMessageError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    // Validate user input
  let isValid = true;

  if (name.trim() === '') {
    setNameError('Name is required');
    isValid = false;
  } else if (!isValidName(name)) {
    setNameError('Invalid name format');
    isValid = false;
  } else {
    setNameError('');
  }

  if (email.trim() === '') {
    setEmailError('Email is required');
    isValid = false;
  } else if (!isValidEmail(email)) {
    setEmailError('Invalid email format');
    isValid = false;
  } else {
    setEmailError('');
  }

  if (message.trim() === '') {
    setMessageError('Message is required');
    isValid = false;
  } else {
    setMessageError('');
  }

  if (!isValid) {
    return;
  }
// end of validating user inpu
    
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


   // Helper function to validate name format
  const isValidName = (name) => {
    const nameRegex = /^[A-Za-z\-\'\s]+$/;
    return nameRegex.test(name);
  };

  // Helper function to validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/;
  return emailRegex.test(email);
};

// ------------------------------------recaptcha function-----------------
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  // -----------------------------------end of recapture--------------------

 

  // ----------------------------email.js---------------------------------
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  }

  const sendEmail = (e) => {
    e.preventDefault();
  
    const emailData = {
      name: name,
      email: email,
      message: message,

    };

 
  
    emailjs
      .send(
        "service_w2nkzvx",
        "template_myomf27", 
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

 
  document.cookie = "myCookie=myValue; SameSite=None; Secure"; // for catching cookies



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

    <section id="ContactPage">
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
                <form className="contact-form" ref={form}  onSubmit={sendEmail}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value); {handleInputChange}
                    }}
                  />
                  { nameError && <p className="error">{nameError}</p> }

                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value); {handleInputChange}
                    }} 
                  />

                  { emailError && <p className="error">{emailError}</p> }

                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    placeholder="write your message"
                    id="message"
                    required
                    value={message}
                    onChange={(event) => {
                      setMessage(event.target.value);{handleInputChange}
                    }}
                  />

                   { messageError && <p className="error">{messageError}</p> }

                  <div className="recapture">
                    <ReCAPTCHA
                      sitekey="6LfmYkUoAAAAAJfPLa7V5nbVOs5zGoD6WXivA39J"
                      onChange={onChange}
                    />
                  </div>

                  <button type="submit" onSubmit={handleSubmit}>
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
    </section>
  );
};

export default ContactPage;
