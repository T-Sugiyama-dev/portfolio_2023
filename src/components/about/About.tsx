import { useState, useEffect, useRef } from "react";
import { handleElHover, handleElLeave } from "../cursor/Cursor";
import { Resume } from "./Resume";
import { Skill } from "./Skill";
import sky_img from '../../images/sky_view.jpg';
import car_body from '../../images/car/car_body.png';
import tire from '../../images/car/tire.png';
import '../../css/about/about.css'


export const About = () => {
  return(
    <div className="about_container">

      <div className="transition">
        <h2 className="transition_about">It's about me</h2>
      </div>

      <div className="about_wrapper">
        <div className="about_title_wrapper">
          <div>
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
            #Software engineer #Designer #Photographer #Videographer
          </p>

          <div className="scroll_wrapper">
            <p
              onMouseEnter={handleElHover}
              onMouseLeave={handleElLeave}
              className="scroll_text"
            >
              Scroll
            </p>
            <span className="scrollDown"></span>
          </div>

          <div className="circle_container">
            <div
              onMouseEnter={handleElHover}
              onMouseLeave={handleElLeave}
              className="circle c1">
            </div>
            <div
              onMouseEnter={handleElHover}
              onMouseLeave={handleElLeave}
              className="circle c2">
            </div>
          </div>

        </div>
      </div>

      <div className="about_desc_wrapper">
        <div className="about_creative_container">
          <div className="about_creative_wrapper">

            <div className="about_content_title_wrapper">
              <h2
                onMouseEnter={handleElHover}
                onMouseLeave={handleElLeave}
                className="about_text"
              >
                Creative Development
              </h2>

              <p
                onMouseEnter={handleElHover}
                onMouseLeave={handleElLeave}
                className="about_text"
              >
                I make apps, websites, epic photos and videos.
                I do everything from design creation to development.
              </p>
            </div>

            <div className="car_container">

              <div className="car_body">
                <img
                  onMouseEnter={handleElHover}
                  onMouseLeave={handleElLeave}
                  src={car_body} />
              </div>

              <div className="tire_front">
                <img 
                  onMouseEnter={handleElHover}
                  onMouseLeave={handleElLeave}
                  src={tire} />
              </div>

              <div className="tire_rear">
                <img
                  onMouseEnter={handleElHover}
                  onMouseLeave={handleElLeave}
                  src={tire} />
              </div>
            </div>
            </div>
        </div>

        <div className="about_content_container">
          <h2 className="about_text">Resume</h2>
          <Resume />
        </div>

        <div className="about_content_container">
          <h2 className="about_text">Skill</h2>
          <Skill />
        </div>
     
      </div>

      <footer>
        <div className="copyright">
          <small>&copy; 2023 Takumasa Sugiyama</small>
        </div>
      </footer>

      </div>



    </div>
  );
}

