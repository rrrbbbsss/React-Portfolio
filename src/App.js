import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="bg-slate-700 text-white flex-grow">todo</main>
      <Footer />
    </div>
  );
}

export default App;
