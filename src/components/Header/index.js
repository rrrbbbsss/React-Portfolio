import React from "react";
import Navigation from "../Navigation";

function Header({ sections, currentSection, setCurrentSection }) {
  return (
    <header className="bg-sky-700 text-white">
      <div className="flex h-10 justify-between items-center m-auto max-w-2xl">
        <h1 className="px-2">John Doe</h1>
        <Navigation
          sections={sections}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </div>
    </header>
  );
}

export default Header;
