import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { NavItem } from "./NavItem";
import './header.css'
import sky_img         from '../../images/header/sky_view.jpg';
import london_eye_img  from '../../images/header/london_eye_view.jpg';
import city_view       from '../../images/header/city_view.jpg';
import popeye          from '../../images/header/popeye.png';
import portfolio_movie from '../../video/portfolio_movie.mp4';

export const Header: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [openBtn, setOpenBtn]   = useState<boolean>(true);
  const [closeBtn, setCloseBtn] = useState<boolean>(false);
  const [menu, setMenu]         = useState<string>("close");
  const [start, setStart]       = useState<string>("100%");
  const [end, setEnd]           = useState<string>("100%");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.play();
    }
  }, [videoRef.current]);

  const openMenu = () => {
    setOpenBtn(false);
    setMenu("");
    setStart("100%");
    setEnd("0%");
    setCloseBtn(true);
  }

  const closeMenu = useCallback(() => {
    setCloseBtn(false);
    setStart("0%");
    setEnd("100%");
    setTimeout(() => {
      setMenu("close");
      setOpenBtn(true);
    }, 1800);
  }, []);

  const navDelay: number = 0.25;

  const navAnimationProps = {
    initial: {
      x: start,
    },
    animate: {
      x: end,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  return(
    <div>
      <header className="header_container">
        <div className="header_wrapper">
          <div className="header_title">
            <b>T.<span className="colored_s">S</span></b>
          </div>

          <div>
            {openBtn ? (
              <div onClick={openMenu} className="menu_open_btn">
                Explore
              </div>
            ) :
              null
            }
          </div>
        </div>
      </header>

      <div className={`menu_container ${menu}`}>

        {closeBtn ? (
          <div
            onClick={closeMenu}
            className="menu_close_btn"
          >
            <b>&#10005;</b>
          </div>
        ) :
        null}
 
        <div className="menu_wrapper">
          <motion.div {...navAnimationProps}>
            <NavItem
              link="/"
              title="TOP"
              onClickEvent={closeMenu}
            >
              <img src={sky_img} alt="Top" />
            </NavItem>
          </motion.div>

          <motion.div {...navAnimationProps} animate={{ ...navAnimationProps.animate, transition: { delay: navDelay * 1, ease: "easeInOut", duration: 1, } }}>
            <NavItem
              link="/about"
              title="ABOUT"
              onClickEvent={closeMenu}
            >
              <img src={city_view} alt="About" />
            </NavItem>  
          </motion.div>

          <motion.div {...navAnimationProps} animate={{ ...navAnimationProps.animate, transition: { delay: navDelay * 2, ease: "easeInOut", duration: 1, } }}>
            <NavItem
              link="/work"
              title="WORK"
              onClickEvent={closeMenu}
            >
              <video ref={videoRef} preload="auto" poster={popeye} autoPlay loop muted playsInline >
                <source src={portfolio_movie} type="video/mp4" />
                <p className="error_video">Your browser doesn't support HTML5 video.</p>
              </video>
            </NavItem>
          </motion.div>

          <motion.div {...navAnimationProps} animate={{ ...navAnimationProps.animate, transition: { delay: navDelay * 3, ease: "easeInOut", duration: 1, } }}>
            <NavItem
              link="/contact"
              title="CONTACT"
              onClickEvent={closeMenu}
            >
              <img src={london_eye_img} alt="Contact" />
            </NavItem>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
