import React from "react";

function Navigation({ sections, currentSection, setCurrentSection }) {
  return (
    <nav className="p-2 flex">
      {sections.map((section) => (
        <div
          className={`p-1 ${section === currentSection && "text-amber-300"}`}
          key={section}
          onClick={() => setCurrentSection(section)}
        >
          {section}
        </div>
      ))}
    </nav>
  );
}

export default Navigation;
