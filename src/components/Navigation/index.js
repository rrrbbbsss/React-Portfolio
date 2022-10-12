import React from "react";

function Navigation({ sections, currentSection, setCurrentSection }) {
  return (
    <nav className="p-2 flex">
      {sections.map(({ name, comp }) => (
        <div
          className={`p-1 cursor-pointer ${
            name === currentSection.name && "text-amber-300"
          }`}
          key={name}
          onClick={() => setCurrentSection({ name, comp })}
        >
          {name}
        </div>
      ))}
    </nav>
  );
}

export default Navigation;
