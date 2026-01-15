import projects from "../data/projects";
import React from "react";
import Container from "./commen/Container";

function Projects() {
  return (
    <section className="py-12" id="projects">
      <Container>
        <h2 className="text-2xl font-semibold mb-8">Projects</h2>
        <p className="text-sm text-gray-600 mb-8">
          Real-world work & UI engineering practice
        </p>

        <ul className="space-y-8">
          {projects.map((project) => (
            <article key={project.id} className="mb-10 pb-6 border-b">
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-3 max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs border px-2 py-1 rounded-md focus-visible:outline focus-visible:outline-offset-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                {project.liveUrl && (
                  <a
                    href={projects.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo of ${project.title}`}
                    className=" focus-visible:outline focus-visible:outline-offset-2 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Source code for ${project.title}`}
                    className="focus-visible:outline focus-visible:outline-offset-2 hover:underline"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </ul>
      </Container>
    </section>
  );
}
export default Projects;
