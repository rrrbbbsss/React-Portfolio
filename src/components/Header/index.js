import React from "react";
import Navigation from "../Navigation";

function Header() {
  return (
    <header className="flex bg-sky-700 text-white h-10 justify-between items-center">
      <h1 className="px-2">John Doe</h1>
      <Navigation />
    </header>
  );
}

export default Header;
