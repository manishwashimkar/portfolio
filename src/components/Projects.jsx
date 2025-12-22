import projects from "../data/projects";
import React from "react";
import Container from "./commen/Container";

function Projects() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-2xl font-semibold mb-8">Projects</h2>

        <ul className="space-y-8">
          {projects.map((project) => (
            <li key={project.id} className="border-b pb-6">
              <h3 className="text-xl font-medium mb-2">
                {project.title}
              </h3>

              <p className="text-gray-700 mb-3">
                {project.description}
              </p>

              <div className="flex gap-4">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Source Code
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
export default Projects;
