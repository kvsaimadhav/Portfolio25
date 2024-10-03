import React from 'react';
import linkedin from './images/linkedin.jpg';
import github from './images/github.jpg';
import resume from './docs/Resume.pdf';
import cv from './docs/CV.pdf';
import aws from './docs/AmazonWebServices.pdf';
import oracle from './docs/Oracle.pdf';
import './Menu.css';

const linkINURL = "https://www.linkedin.com/in/smadhavkv96/";
const gitHBURL = "https://github.com/kvsaimadhav/";
function Menu()
{
  return(
    <div className="Menu">
     <ul className="menu">
         <li><a href="#home" rel="no-opener no-referrer">Home</a></li>
         <li><a href="#work" rel="no-opener no-referrer">Work</a></li>
         <li><a href="#project" rel="no-opener no-referrer">Project</a></li>
         <li><a href="#academic" rel="no-opener no-referrer">Academic</a></li>
         <li><a href="#contact" rel="no-opener no-referrer">Contact</a></li>
         <li><a href="#" rel="no-opener no-referrer">Documents</a>
            <ul class="doc">
              <li><a href={resume} rel="no-opener no-referrer" target="_blank">Resume</a></li>
              <li><a href={cv} rel="no-opener no-referrer" target="_blank">Curriculum Vitae</a></li>
              <li><a href="#" rel="no-opener no-referrer">Certifications</a>
                <ul class="cert">
                  <li><a href={aws} rel="no-opener no-referrer" target="_blank">Amazon Web Services</a></li>
                  <li><a href={oracle} rel="no-opener no-referrer" target="_blank">Oracle</a></li>
                </ul>
              </li>
            </ul>
         </li>
         <li>
            <a href="#" rel="no-opener no-referrer">Connect</a>
            <ul class="profile">
              <li><a href={linkINURL} rel="no-opener no-referrer" target="_blank"><img class="linkedin" src={linkedin} referrerPolicy="no-referrer"/>&nbsp;Linkedin</a></li>
              <li><a href={gitHBURL} rel="no-opener no-referrer" target="_blank"><img class="github" src={github} referrerPolicy="no-referrer"/>&nbsp;Github</a></li>
            </ul>
         </li>
     </ul>
    </div>
  );
}

export default Menu;
