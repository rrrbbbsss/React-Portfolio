import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const sections = [
    { name: "About", comp: About },
    { name: "Portfolio", comp: Portfolio },
    { name: "Contact", comp: Contact },
    { name: "Resume", comp: Resume },
  ];
  const [currentSection, setCurrentSection] = useState(sections[0]);
  return (
    <div className="flex flex-col h-screen">
      <Header
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <main className="bg-slate-700 text-white flex-grow overflow-auto">
        <section className="p-4">
          {React.createElement(currentSection.comp, {})}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
