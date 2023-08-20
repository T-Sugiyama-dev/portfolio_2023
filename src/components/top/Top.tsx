import { useState, useEffect, useRef } from "react";
import '../../css/top.css'
import sky_img from '../../images/sky_view.jpg';
import portfolio_movie from '../../video/portfolio_movie.mp4';
import london_eye_img from '../../images/london_eye_view.jpg';
import { motion } from 'framer-motion';
import { Chat } from "./Chat";
import { handleElHover, handleElLeave } from "../cursor/Cursor";

export const Top = () => {
  return(
    <div className="top_container">
      <div className="top_wrapper">

        <div className="top_content_row">

          <div className="main_description top_content">
            <div>
              <h3
                onMouseEnter={handleElHover}
                onMouseLeave={handleElLeave}
                className="animated-text"
              >
                Takumasa Sugiyama
              </h3>
              <p
                onMouseEnter={handleElHover}
                onMouseLeave={handleElLeave}
              >
                Engineering & Design
                <br />
                Photography & Videography
              </p>
            </div>
          </div>

          <div className="top_content">
            <img src={london_eye_img} />
            <div
              onMouseEnter={handleElHover}
              onMouseLeave={handleElLeave}
              className="overlay"
            >
              <p>About</p>
            </div>
          </div>

        </div>

        <div className="top_content_row">

          <div className="top_content">
            <video autoPlay loop muted >
              <source src={portfolio_movie} type="video/mp4" />
              <p>Your browser doesn't support HTML5 video.</p>
            </video>
            <div
              onMouseEnter={handleElHover}
              onMouseLeave={handleElLeave}
              className="overlay"
            >
              <p>Work</p>
            </div>
          </div>

          <div className="top_content">
            <img src={sky_img} />
            <div
              onMouseEnter={handleElHover}
              onMouseLeave={handleElLeave}
              className="overlay"
            >
              <p>Contact</p>
            </div>
          </div>

        </div>

      </div>

      <div className="top_chat_container">
        <Chat />
      </div>
    </div>
  );
}

