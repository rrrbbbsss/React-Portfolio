import React from "react";
import Navigation from "../Navigation";

function Header({ sections, currentSection, setCurrentSection }) {
  return (
    <header className="flex bg-sky-700 text-white h-10 justify-between items-center">
      <h1 className="px-2">John Doe</h1>
      <Navigation
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </header>
  );
}

export default Header;
