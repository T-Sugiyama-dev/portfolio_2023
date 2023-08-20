import { useState, useEffect, useRef } from "react";
import { handleElHover, handleElLeave } from "../cursor/Cursor";
import '../../css/about.css'


export const About = () => {
  return(
    <div className="about_container">
      <div >
        <h1
          onMouseEnter={handleElHover}
          onMouseLeave={handleElLeave}
          className="about_text"
        >
          Takumasa Sugiyama
        </h1>

        <p
          onMouseEnter={handleElHover}
          onMouseLeave={handleElLeave}
          className="about_text"
        >
          Software Engineer & UI/UX Designer<br />
          Photographer & Videographer
        </p>
      </div>

      <div>
        <h2
          onMouseEnter={handleElHover}
          onMouseLeave={handleElLeave}
          className="about_text"
        >
          Skill
        </h2>

        <ul
          onMouseEnter={handleElHover}
          onMouseLeave={handleElLeave}
          className="about_text about_skill"
        >
          <li>Engineering
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript
                <ul>
                  <li>React.js</li>
                  <li>Vue.js</li>
                </ul>
              </li>
              <li>PHP
                <ul>
                  <li>Laravel</li>
                </ul>
              </li>
              <li>Java
                <ul>
                  <li>Spring</li>
                </ul>
              </li>
              <li>Python</li>
              <li>ShellScript</li>
              <li>Flutter</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </li>
          <br />

          <li>Design
            <ul>
              <li>Figma</li>
              <li>Adoobe
                <ul>
                  <li>Photoshop</li>
                  <li>Premiere Pro</li>
                  <li>Lightroom</li>
                  <li>XD</li>
                </ul>
              </li>
            </ul>
          </li>

        </ul>
      </div>
     
    </div>
  );
}

