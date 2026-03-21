import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

import SectionHeading from "../common/SectionHeading";

const ProjectsSection = ({ projects, isLoading, error }) => (
  <section id="projects" className="py-14 sm:py-20">
    <div className="section-shell">
      <div className="section-frame">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work across product interfaces and backend systems."
          description="These projects show how I approach UX, maintainable architecture, and real-world application flows."
        />

        {isLoading ? (
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
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

            <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  className="glass-panel group relative flex h-full flex-col overflow-hidden p-5 shadow-[0_18px_34px_rgba(15,23,42,0.06)] sm:p-6 dark:shadow-none"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl text-slate-900 dark:text-white sm:text-2xl">{project.title}</h3>
                    <div className="flex shrink-0 items-center gap-3">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-500 transition duration-300 hover:border-accent hover:text-accent dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300"
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
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-500 transition duration-300 hover:border-accent hover:text-accent dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300"
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
                        className="rounded-full border border-slate-200 bg-stone-50 px-3 py-1 text-xs font-medium text-slate-700 transition duration-300 group-hover:border-accent/40 dark:border-white/10 dark:bg-slate-950 dark:text-slate-200"
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
    </div>
  </section>
);

export default ProjectsSection;
