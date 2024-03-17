import React from 'react';
import '../styles.css'
// import '../mediaQueries.css';

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
            I am experienced in developing web applications and am currently
            expanding my skills to include mobile application development. My goal is to
            consistently deliver code of the highest quality, meeting both
            functional and aesthetic requirements.
          </p>

          <a
            onClick={() => window.open("https://drive.google.com/file/d/1AcbRqagEk64yib8WW91UKjZr4yStgn6n/view?usp=sharing")}
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
