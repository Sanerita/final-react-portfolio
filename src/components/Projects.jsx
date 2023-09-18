import React from 'react';
import '../styles.css'
import projectA from '../assets/projectA.png';
import projectB from '../assets/projectB.png';
import projectC from '../assets/projectC.png';
import calculator from '../assets/calculator.png';

const Projects = () => {
  return (
    <div className="projects-page">
      <div className='project-title'>

           <h2>PROJECTS</h2>
      </div>

      <div className="container">
  <div className="box">
    <div className="img-Box">
      <img src={projectA} />
    </div>
    <div className="content">
      <div>
        <h2>HTML&CSS Website</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.</p>
        <a href="https://github.com/yourusername/projectA" target="_blank" rel="noopener noreferrer">
          <button className='github-button'>GitHub</button>
        </a>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="img-Box">
      <img src={projectB} />
    </div>
    <div className="content">
      <div>
        <h2>React Chat-App</h2> 
        <p>The Chat app is an interactive application that allows users to engage in conversations with each other. It utilizes React for the front-end user interface, Node.js for the server-side logic, and Chat Engine for real-time messaging functionality.</p>
        <a href="https://github.com/yourusername/projectB" target="_blank" rel="noopener noreferrer">
          <button className='github-button'>GitHub</button>
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
        <p>Finance Calculator is a Python program that allows users to perform financial calculations such as investment and bond calculations.</p>
        <a href="https://github.com/yourusername/calculator" target="_blank" rel="noopener noreferrer">
          <button className='github-button'>GitHub</button>
        </a>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="img-Box">
      <img src={projectC} />
    </div>
    <div className="content">
      <div>
        <h2>Python Bank-App</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.</p>
        <a href="https://github.com/yourusername/projectC" target="_blank" rel="noopener noreferrer">
          <button className='github-button'>GitHub</button>
        </a>
      </div>
    </div>
  </div>
</div>

   
    </div>
  );
};

export default Projects;