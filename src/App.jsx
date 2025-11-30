import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Header openContact={() => setContactOpen(true)} />

      <Hero />
      <About />
      <Projects />
      {/* SLIDING CONTACT PANEL */}
      <Contact
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}

export default App;
