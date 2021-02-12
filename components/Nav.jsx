import React from "react";
// import { ReactComponent as Logo } from "/logo.svg";

function Nav(props) {
  return (
    <nav className="px-6 h-20 flex justify-between items-center">
      <img src="/logo.svg" alt="Logo Generasi Ilmiah" className="h-12" />

      <div className="flex flex-col gap-1">
        <div className="nav-icon"></div>
        <div className="nav-icon"></div>
        <div className="nav-icon"></div>
      </div>
    </nav>
  );
}

Nav.propTypes = {};

export default Nav;
