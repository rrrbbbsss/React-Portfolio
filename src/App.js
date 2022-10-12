import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const sections = ["About Me", "Portfolio", "Contact", "Resume"];
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="bg-slate-700 text-white flex-grow">
        <About />
        <Portfolio />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
