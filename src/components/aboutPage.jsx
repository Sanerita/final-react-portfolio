import React from 'react';



const AboutPage = () => {

const downloadCv = () =>{
    
}

    return (
      <div id='aboutPage'>
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
            onClick={() => window.open("assets/SILEKU-CV cpt.pdf")}
            className="btn"
          >
            <button id="CV-button">DownloadCV</button>
          </a>
        </div>
      </div>
      </div>
    );
};

export default AboutPage;
