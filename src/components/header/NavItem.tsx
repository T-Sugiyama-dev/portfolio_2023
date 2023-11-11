import React, { ReactNode, MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";
import { handleElHover, handleElLeave } from "../cursor/Cursor";
import './header.css'

interface NavProps {
  link         : string,
  title        : string,
  onClickEvent : MouseEventHandler<HTMLDivElement>,
  children     : ReactNode
}

export const NavItem: React.FC<NavProps> = React.memo(({
  link,
  title,
  onClickEvent,
  children
}) => {

  console.log(title);
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
      isActive ? "nav_active" : "nav_pending"
    }>
      <div className="menu">
        {children}
        <div
          onClick={onClickEvent}
          onMouseEnter={handleElHover}
          onMouseLeave={handleElLeave}
          className="overlay"
        >
          <b>{title}</b>
        </div>
      </div>
    </NavLink>
  );
});