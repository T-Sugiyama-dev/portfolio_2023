import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Cursor } from "../cursor/Cursor";
import '../../css/cursor.css'

export const TopLayout= () => {

  return (
    <Cursor>
      <Header />
      <main>
        <Outlet />
      </main>
    </Cursor>
  );
}