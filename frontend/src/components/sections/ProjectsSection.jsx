import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

import SectionHeading from "../common/SectionHeading";

const ProjectsSection = ({ projects, isLoading, error }) => (
  <section id="projects" className="py-20">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work across product interfaces and backend systems."
        description="These projects show how I approach UX, maintainable architecture, and real-world application flows."
      />

      {isLoading ? (
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="glass-panel animate-pulse p-6">
              <div className="h-5 w-1/2 rounded bg-slate-200 dark:bg-slate-700" />
              <div className="mt-4 h-20 rounded bg-slate-200 dark:bg-slate-700" />
              <div className="mt-5 h-10 rounded bg-slate-200 dark:bg-slate-700" />
            </div>
          ))}
        </div>
      ) : (
        <>
          {error ? (
            <div className="mt-12 glass-panel p-6">
              <p className="text-sm text-rose-600 dark:text-rose-300">
                {error} Showing fallback project content until the backend is available.
              </p>
            </div>
          ) : null}

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="glass-panel flex h-full flex-col p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl text-slate-900 dark:text-white">{project.title}</h3>
                  <div className="flex items-center gap-3">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 transition hover:text-accent dark:text-slate-300"
                        aria-label={`${project.title} GitHub`}
                      >
                        <FaGithub />
                      </a>
                    ) : null}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 transition hover:text-accent dark:text-slate-300"
                        aria-label={`${project.title} live demo`}
                      >
                        <FaArrowUpRightFromSquare />
                      </a>
                    ) : null}
                  </div>
                </div>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-stone-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-slate-950 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </>
      )}
    </div>
  </section>
);

export default ProjectsSection;
