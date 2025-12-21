import projects from "../data/projects";
import React from "react";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
