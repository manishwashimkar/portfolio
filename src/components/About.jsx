import React from "react";
import Container from "./commen/Container";


function About() {
  return (
    <section className="py-12" id="about">
      <Container>
        <h2 className="text-2xl font-semibold mb-4">About</h2>

        <p className="text-gray-700 leading-relaxed">
          I enjoy working close to UI logic and understanding how state changes
          affect rendering. I focus on writing simple, readable code and improving
          performance where it matters. I’m actively building projects and
          refining my understanding of React internals.
        </p>
      </Container>
    </section>
  );
}

export default About;
