// import React from 'react';
import '../styles.css'
import { FaGitAlt } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import React, { useState, useEffect } from 'react';



const experience = () => {

 
  const [internetFacts, setInternetFacts] = useState([
    { year: "2019 - 2020", fact: "Air Traffic and Navigation Services" },
    { year: "2020 - 2021", fact: "Astrofica Technologies" },
    { year: "2023/02 - 2023/07", fact: "UVU Africa (CapaCiTi)" },
    { year: "2023/07 - current", fact: "Younglings VA" },
  ]);
  

  const [currentPage, setCurrentPage] = useState(0);
  const pagesToShow = 4; // Number of pages to show at once
  const lastPagesToShow = 1; // Number of last pages to show

  useEffect(() => {
    renderFact();
    updatePaginationDots();
  }, [currentPage]);

  function renderFact() {
    const fact = internetFacts[currentPage];
    const factDisplay = document.getElementById("fact-display");
    if (factDisplay) {
      factDisplay.innerHTML = `<h3>${fact.year}</h3><p>${fact.fact}</p>`;
    }
  }

  function updatePaginationDots() {
    const paginationDiv = document.getElementById("pagination-dots");
    if (paginationDiv) {
      paginationDiv.innerHTML = "";

      // Add previous arrow
      const prevArrow = document.createElement("span");
      prevArrow.id = "prev-arrow";
      prevArrow.innerText = "←";
      prevArrow.addEventListener("click", () => goToPage(currentPage - 1));
      paginationDiv.appendChild(prevArrow);

      // Calculate start and end indices for pagination
      const totalFacts = internetFacts.length;
      let startPage = Math.floor(currentPage / pagesToShow) * pagesToShow;
      let endPage = Math.min(startPage + pagesToShow, totalFacts - lastPagesToShow);

      // Add first pages and ellipsis if needed
      if (startPage > 0) {
        paginationDiv.appendChild(createDot(0));
        paginationDiv.appendChild(createDot(1));
        paginationDiv.appendChild(createDot(2));
        paginationDiv.appendChild(createEllipsis());
      }

      // Add middle pages
      for (let index = startPage; index < endPage; index++) {
        paginationDiv.appendChild(createDot(index));
      }

      // Add last pages and ellipsis if needed
      if (endPage < totalFacts) {
        paginationDiv.appendChild(createEllipsis());
        for (let index = totalFacts - lastPagesToShow; index < totalFacts; index++) {
          paginationDiv.appendChild(createDot(index));
        }
      }

      // Add next arrow
      const nextArrow = document.createElement("span");
      nextArrow.id = "next-arrow";
      nextArrow.innerText = "→";
      nextArrow.addEventListener("click", () => goToPage(currentPage + 1));
      paginationDiv.appendChild(nextArrow);
    }
  }

  function createDot(index) {
    const dot = document.createElement("span");
    dot.className = "pagination-dot";
    dot.innerText = index + 1; // Display page number
    dot.addEventListener("click", () => goToPage(index));
    if (index === currentPage) dot.classList.add("active");
    return dot;
  }

  function createEllipsis() {
    const ellipsis = document.createElement("span");
    return ellipsis;
  }

  function goToPage(pageNumber) {
    if (pageNumber >= 0 && pageNumber < internetFacts.length) {
      setCurrentPage(pageNumber);
    }
  }
 
   // Initial rendering
   renderFact();
   updatePaginationDots();
  


  return (

    
    <div className="my-experience">

        <div className='exp-title'> 
            <h2>EXPERIENCE</h2>
        </div>
        {/* -------------------------------------------- */}
                <div className='exp-colums'>



    <div id="facts-container">
      <div id="fact-display"></div>
      <div id="pagination-dots">
      	  <span id="prev-arrow">←</span>
  				<span id="next-arrow">→</span>
      </div>
    </div>
 

    
         <h3>EXPERIENCE</h3>
   

        {/* -------------------------------------------- */}
      <div className='article-items'>
        <div className='left-block'> 
            <h2>FRONT-END</h2>
            <br/>
            <div className="article-container">
              <article>
                <FaHtml5 />
                <div>
                  <h4>HTML</h4>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <FaCss3Alt />
                <div>
                  <h4>CSS</h4>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <div>
                <FaReact />
                </div>
                <div>
                  <h4>React</h4>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <div>
                <TbBrandJavascript/>
                </div>
                <div>
                  <h4>JavaScript</h4>
                  <p>Intermediate</p>
                </div>
              </article>
              
              <article>
                <div>
                <FaWordpressSimple />
                </div>
                <div>
                  <h4>Wordpress</h4>
                  <p>Intermediate</p>
                </div>
              </article>
              
            </div>

        </div>
   

        <div className='right-block'> 
            <h2>BACK-END</h2><br/>
            <div className="article-container">
              <article>
                <div>
                  <FaJava />
                  </div>
                <div>
                  <h4>Java</h4>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
               <div>
               <BsFiletypeSql />
               </div>
                <div>
                  <h4>SQL</h4>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <div>
                <FaNodeJs />
                </div>
                <div>
                  <h4>Node JS</h4>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
              <div>
                <SiFirebase />
              </div>
                <div>
                  <h4>Firebase</h4>
                  <p>Experienced</p>
                </div>
              </article>
              
              <article>
             <div>
                 <FaGitAlt />
                 </div>
                <div>
                  <h4>Git</h4>
                  <p>Experienced</p>
                </div>
              </article>
            </div>

            </div>
        </div>
        </div>

    </div>

    
  );
  
};

export default experience;