import React from 'react';
import '../styles.css'

const AboutPage = () => {



    return (
      <section id='about-page'>
      <div className="about-page">
        <div className="title">
          <h2>ABOUT ME</h2>
        </div>

        <div className="image-container">
          <div className="about-image"></div>
        </div>

        <div className="description">
          <p>
            Thank you for visiting my portfolio! I'm delighted to have you here,
            and I'd like to take this chance to introduce myself as a software
            developer. My passion lies in crafting innovative and efficient
            software solutions. <br />
            Over the course of my career, I've been fortunate enough to work on
            a diverse range of projects, each contributing to my personal and
            professional growth as a developer. I specialize in areas such as
            web applications and desktop applications. My goal is to
            consistently deliver code of the highest quality, meeting both
            functional and aesthetic requirements.
          </p>

          <a
            onClick={() => window.open("https://drive.google.com/file/d/1MLs8OZYoTN9s5Ntb58a0wO32tHsUkJq9/view?usp=sharing")}
            className="btn"
          >
            <button id="CV-button">DownloadCV</button>
          </a>
        </div>
        </div>
      </section>
    );
};

export default AboutPage;
