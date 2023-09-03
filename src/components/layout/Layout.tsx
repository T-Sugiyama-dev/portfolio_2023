import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Cursor } from "../cursor/Cursor";
import '../../css/cursor.css';
import '../../css/transition/transition.css';

export const TopLayout= () => {

  return (
    <Cursor>
      <div id="transition"></div>
      <Header />
      <main>
        <Outlet />
      </main>
    </Cursor>
  );
}