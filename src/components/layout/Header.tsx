import React from "react";
import '../../css/layout/header.css'
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { handleElHover, handleElLeave } from "../cursor/Cursor";
import sky_img from '../../images/header/sky_view.jpg';
import portfolio_movie from '../../video/portfolio_movie.mp4';
import london_eye_img from '../../images/header/london_eye_view.jpg';
import city_view from '../../images/header/city_view.jpg';

export const Header = () => {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  const [menuClass, setMenuClass] = useState(["close","close","close","close"]);

  const openMenu = () => {
    const menu = document.getElementById("menu");
    const menu_btn = document.getElementById("menu_btn");
    const menu_close_btn = document.getElementById("menu_close_btn");
    const menuList = document.getElementsByClassName("menu");
  
    if (menu && menu_btn && menuList && menu_close_btn) {
      menu_btn.classList.add("close");
      menu.classList.remove("close");
      menu_close_btn.classList.remove("close");

      for (let i = 0; i < menuClass.length; i++) {
        setTimeout(() => {
          setMenuClass((prevMenuClass) => {
            const menuClassList = [...prevMenuClass];
            menuClassList[i] = "open_menu";
            return menuClassList;
          });
        }, 100 * i);
      }
    }
  }

  const closeMenu = () => {
    const menu = document.getElementById("menu");
    const menu_btn = document.getElementById("menu_btn");
    const menu_close_btn = document.getElementById("menu_close_btn");
    const menuList = document.getElementsByClassName("menu");

    if (menu && menu_btn && menuList && menu_close_btn) {
      menu_close_btn.classList.add("close");
      for (let i = menuClass.length-1; i >= 0; i--) {
        setTimeout(() => {
          setMenuClass((prevMenuClass) => {
            const menuClassList = [...prevMenuClass];
            menuClassList[i] = "close_menu";
            return menuClassList;
          });
        }, 100 * i);
      }
      setTimeout(() => {
        for (let i = 0; i < menuClass.length; i++) {
          setMenuClass((prevMenuClass) => {
            const menuClassList = [...prevMenuClass];
            menuClassList[i] = "close";
            return menuClassList;
          });
        }
        menu.classList.add("close");
        menu_btn.classList.remove("close");
      }, 1400);
    }
  }

  return(
    <div>
      <header className="header_container">
        <div className="header_wrapper">
          <div className="header_title">
            <b>T.<span className="colored_s">S</span></b>
          </div>

          <div>
            <div onClick={openMenu} id="menu_btn" className="menu_open_btn"></div>
          </div>
        </div>
      </header>

      <div id="menu" className="menu_container close">
        <div
          onClick={closeMenu}
          id="menu_close_btn"
          className="menu_close_btn close"
        >
          <b>&#10005;</b>
        </div>
 
        <div className="menu_wrapper">

          <NavLink
            to="/"
            className={({ isActive }) =>
            isActive ? "nav_active" : "nav_pending"
          }>
            <div className={`${menuClass[0]} menu`}>
              <img src={sky_img} alt="Top" />
              <div
                onClick={closeMenu}
                onMouseEnter={handleElHover}
                onMouseLeave={handleElLeave}
                className="overlay"
              >
                <b>Top</b>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
            isActive ? "nav_active" : "nav_pending"
          }>
            <div className={`${menuClass[1]} menu`}>
              <img src={city_view} alt="About" />
              <div
                onClick={closeMenu}
                onMouseEnter={handleElHover}
                onMouseLeave={handleElLeave}
                className="overlay"
              >
                <b>About</b>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/work"
            className={({ isActive }) =>
            isActive ? "nav_active" : "nav_pending"
          }>
            <div className={`${menuClass[2]} menu`}>
              <video ref={videoRef} autoPlay loop muted playsInline >
                <source src={portfolio_movie} type="video/mp4" />
                <p>Your browser doesn't support HTML5 video.</p>
              </video>
              <div
                onClick={closeMenu}
                onMouseEnter={handleElHover}
                onMouseLeave={handleElLeave}
                className="overlay"
              >
                <b>Work</b>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
            isActive ? "nav_active" : "nav_pending"
          }>
            <div className={`${menuClass[3]} menu`}>
              <img src={london_eye_img} alt="Contact" />
              <div
                onClick={closeMenu}
                onMouseEnter={handleElHover}
                onMouseLeave={handleElLeave}
                className="overlay"
              >
                <b>Contact</b>
              </div>
            </div>
          </NavLink>

        </div>
      </div>
    </div>
  );
}
