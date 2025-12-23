
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <main id="home">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;
