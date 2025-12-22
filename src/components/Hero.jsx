import React from "react";
import Container from "./commen/Container";

// import Container from "./common/Container";


function Hero() {
  return (
    <section className="py-16">
      <Container>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Hi, I’m Manish 👋
        </h1>

        <p className="text-lg text-gray-700 mb-3">
          Frontend Engineer | React & Modern JavaScript. I design and build
          scalable SPAs with performance, accessibility, and UX in mind.
        </p>
      </Container>
    </section>
  );
}

export default Hero;
