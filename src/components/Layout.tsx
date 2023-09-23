import { Header } from "./header/Header";
import { Outlet } from "react-router-dom";
import { Cursor } from "./cursor/Cursor";

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