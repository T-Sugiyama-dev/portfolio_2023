import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Cursor } from "../cursor/Cursor";
import '../../css/transition/transition.css';

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