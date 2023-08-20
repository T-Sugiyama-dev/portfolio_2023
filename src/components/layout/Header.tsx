import React from "react";
import '../../css/header.css'
import { NavLink } from "react-router-dom";
import { handleElHover, handleElLeave } from "../cursor/Cursor";

export const Header = () => {
  return(
    <header className="header_container">
      <div className="header_wrapper">
        <div className="header_title">
          T.<span className="colored_s">S</span>
        </div>

        <ul className="nav_wrapper">
          <li>
            <NavLink
              onMouseEnter={handleElHover}
              onMouseLeave={handleElLeave}
              to="/"
              className={({ isActive }) =>
              isActive ? "nav_active" : "nav_pending"
            }>
              Top
            </NavLink>
          </li>
          <li>
            <NavLink
              onMouseEnter={handleElHover}
              onMouseLeave={handleElLeave}
              to="/about"
              className={({ isActive }) =>
              isActive ? "nav_active" : "nav_pending"
            }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onMouseEnter={handleElHover}
              onMouseLeave={handleElLeave}
              to="/work"
              className={({ isActive }) =>
              isActive ? "nav_active" : "nav_pending"
            }>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              onMouseEnter={handleElHover}
              onMouseLeave={handleElLeave}
              to="/contact"
              className={({ isActive }) =>
              isActive ? "nav_active" : "nav_pending"
            }>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
