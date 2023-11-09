import React from 'react';
import '../styles.css'
import malimba from '../assets/malimba.png';
import projectB from '../assets/projectB.png';
import Nezzies from '../assets/Nezzies.png';
import calculator from '../assets/calculator.png';
import { FaGithub } from 'react-icons/fa';
import { FaPlayCircle } from 'react-icons/fa';



const Projects = () => {

  return (
    <section id="Projects">
      <div className="projects-page">
        <div className="project-title">
          <h2>PROJECTS</h2>
        </div>

        <div className="pro">
          <div className="projects-intro">
            <h2>Welcome to My Portfolio of Diverse Projects</h2>
            <p>
              Explore a collection of my projects that showcase my journey in
              web development and desktop applications. From crafting engaging
              HTML & CSS websites to building dynamic React applications and
              sharing a Java application which I've done during my university
              studies, my portfolio reflects my dedication to continuous
              learning and problem-solving.
            </p>
            <p>
              Whether you're interested in front-end web development or modern
              JavaScript applications, you'll find a variety of projects that
              highlight my skills and experiences.
            </p>
            <p>
              Click on the projects to learn more, explore the source code on
              GitHub, and experience live demos where available. If you have any
              questions, feedback, or potential collaborations in mind, please
              feel free to get in touch. I'm excited to share my journey and
              discuss how we can work together to create something remarkable.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="box">
            <div className="img-Box">
              <img src={malimba} />
            </div>
            <div className="content">
              <div>
                <h2>HTML&CSS Website</h2>
                <p>
                  This is a transport service business website that is built
                  with HTML5 and CSS and it is still under development
                </p>
            
                {/* ---------------------------------------- */}
                <div className="side">
                  <div className="articles">
                    <a
                      href="https://github.com/Sanerita/Malimba-Website/tree/main/malimba"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="github-button">
                        <FaGithub /> GitHub
                      </button>
                    </a>
                  </div>
                  <div className="articles">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <button className="github-button">
                        <FaPlayCircle /> Demo
                      </button>
                    </a>
                  </div>
                </div>

                {/* ----------------------------------------- */}
              </div>
            </div>
          </div>
          <div className="box">
            <div className="img-Box">
              <img src={projectB} />
            </div>
            <div className="content">
              <div>
                <h2> React Chat-App</h2>
                <p>
                  Allows users to engage in conversations with each other. It
                  utilizes React for the front-end, Node.js for the server-side,
                  and Chat Engine for real-time messaging functionality.
                </p>
                <a
                  href="https://github.com/Sanerita/CHAT-APP/tree/master/ChatBotWithReact-main"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="github-button">
                    <FaGithub /> GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="img-Box">
              <img src={calculator} />
            </div>
            <div className="content">
              <div>
                <h2>Finance Calculator</h2>
                <p>
                  Finance Calculator is a Python program that allows users to
                  perform financial calculations such as investment and bond
                  calculations.
                </p>
                <a
                  href="https://github.com/Sanerita/Financial-calculator/tree/main/FinaceCalculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="github-button">
                    <FaGithub /> GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="img-Box">
              <img src={Nezzies} />
            </div>
            <div className="content">
              <div>
                <h2>React Business website</h2>
                <p>
                  This is a local business website built with react.js and css
                </p>

                <div className="side">
                  <div className="articles">
                    <a
                      href="https://github.com/Sanerita/Business-Website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="github-button">
                        <FaGithub /> GitHub
                      </button>
                    </a>
                  </div>
                  <div className="articles">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <button className="github-button">
                        <FaPlayCircle /> Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;