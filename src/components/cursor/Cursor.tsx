import React from "react";
import { useState, useEffect } from "react";
import '../../css/cursor/cursor.css';

interface CursorProps {
  children: React.ReactNode;
}

export const Cursor = ({ children }: CursorProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    setCursorPosition({ x, y });
  };

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const stalker = document.getElementById("cursor_chaser");

    if (cursor && stalker) {
      cursor.style.opacity = "0.9";
      cursor.style.top = `${cursorPosition.y}px`;
      cursor.style.left = `${cursorPosition.x}px`;

      setTimeout(function() {
        stalker.style.opacity = "0.4";
        stalker.style.top = `${cursorPosition.y}px`;
        stalker.style.left = `${cursorPosition.x}px`;
      }, 140); 
    }
  }, [cursorPosition]);

  return (
    <div>
      <div id="cursor"></div>
      <div id="cursor_chaser"></div>
      <div onMouseMove={handleMouseMove}>
        {children}
      </div>
    </div>
  );
}

export const handleElHover = () => {
  const cursor = document.getElementById("cursor");
  const stalker = document.getElementById("cursor_chaser");

  if (cursor && stalker) {
    cursor.classList.add("active");
    stalker.classList.add("active");
  }
};

export const handleElLeave = () => {
  const cursor = document.getElementById("cursor");
  const stalker = document.getElementById("cursor_chaser");

  if (cursor && stalker) {
    cursor.classList.remove("active");
    stalker.classList.remove("active");
  }
};