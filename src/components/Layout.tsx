import { Header } from "./header/Header";
import { Outlet } from "react-router-dom";
import { Cursor } from "./cursor/Cursor";
import '../css/transition/transition.css';

export const Layout= () => {

  return (
    <Cursor>
      <Header />
      <main>
        <Outlet />
      </main>
    </Cursor>
  );
}