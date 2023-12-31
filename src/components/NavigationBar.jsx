// import "../styles/navbar.css" 
import React from 'react';
import '../styles.css'
import { useState } from "react";
// import '../mediaQueries.css';

 function NavigationBar() {
  

const [isNavExpanded, setIsNavExpanded] = useState(false)


    return (
      <nav className="navigation">
        <a href="#home-page" className="brand-name">
          S | SILEKU
        </a>
        <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          
        </button>
        <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >

          <ul>
            <li>
              <a href="#home-page">Home</a>
            </li>
            <li>
              <a href="#about-page">About me</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#ContactPage">Contact me</a>
              
            </li>
          </ul>
        </div>
         </nav>
    );
        }
   

export default NavigationBar;