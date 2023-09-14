import React from 'react';
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




const experience = () => {
  return (
    <div className="my-experience">

      {/* <video autoPlay muted loop>
        <source src="../assets/INK-WATER.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
        <div className='exp-title'> 
            <h2>EXPERIENCE</h2>
        </div>
        {/* -------------------------------------------- */}
                <div className='exp-colums'>

              <div className=" exp-container">
                 <ul id='exp-ul'>
                 <li id='exp-ul'>2019 - 2020: Air Traffic and navigation Services</li>
                 <li id='exp-ul'>2020 - 2021: Astrofica technologies</li>
                 <li id='exp-ul'>2023/02 - 2023/07: UVU Africa (CapaCiTi) </li>
                 <li id='exp-ul'>2023/07 - current: Younglings VA</li>
                </ul>
            </div>


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