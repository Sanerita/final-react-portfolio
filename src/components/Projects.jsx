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
              Software Development. From crafting engaging
              HTML, CSS & JavaScript websites to building dynamic React applications 
               my portfolio reflects my dedication to continuous
              learning and problem-solving.
            </p>
           <br/>
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
                  with HTML5 and CSS.
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
                 TOAST is a Full Stack Chatting App. It Uses Socket.io for real time
                  communication and stores user details in encrypted format in Mongo 
                  DB Database.
                </p>
                <a
                  href="https://github.com/Sanerita/Chat-application"
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