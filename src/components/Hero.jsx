import React from "react";
import Container from "./commen/Container";

// import Container from "./common/Container";

function Hero() {
  return (
    <section id="hero" className="py-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Hi, I’m Manish — React Frontend Engineer
          </h1>

          <p className="text-lg text-gray-800 mb-4">
            I build and deploy accessible, performance-focused React
            applications with clean architecture and predictable state
            Management.
          </p>

          <p className="text-sm text-gray-600">
            Currently shipping real-world projects and refining my understanding
            of React internals.
          </p>
          <div className="mt-6 hero-cta">
            <a
              href="#projects"
              className="text-sm font-bold hover:underline  focus-visible:outline focus-visible:outline-offset-2 "
            >
              View Projects →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
