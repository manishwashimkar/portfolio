// import project from "../data/project";

import React from "react";
import projects from "../data/projects";

function Home() {
  return (
    <main>
      <section>
        <h1>Hi, I’m Manish 👋</h1>
        <p>
          Frontend Engineer | React & Modern JavaScript I design and build
          scalable SPAs with performance, accessibility, and UX in mind.
        </p>
      </section>
      <section>
        <ol>
          {projects.map((project) => (
            <li key={project.title}>{project.title}</li>
          ))}
        </ol>
      </section>
      <section>
        I enjoy working close to UI logic and understanding how state changes
        affect rendering. I focus on writing simple, readable code and improving
        performance where it matters. I’m actively building projects and
        refining my understanding of React internals.
      </section>
      <section>Contact</section>
    </main>
  );
}

export default Home;
