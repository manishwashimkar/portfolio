import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { socialLinks, stats } from "../../utils/constants";

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/35 to-transparent dark:from-slate-200/5" />
    <div className="pointer-events-none absolute inset-x-0 top-10 h-[26rem] bg-[radial-gradient(circle_at_20%_18%,rgba(255,248,240,0.72),transparent_32%),radial-gradient(circle_at_75%_12%,rgba(255,255,255,0.38),transparent_24%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(148,163,184,0.12),transparent_26%),radial-gradient(circle_at_76%_12%,rgba(138,91,61,0.16),transparent_22%)]" />
    <div className="pointer-events-none absolute left-[8%] top-24 hidden h-40 w-40 rounded-full bg-accent/10 blur-3xl lg:block dark:bg-slate-400/10" />
    <div className="pointer-events-none absolute bottom-16 right-[10%] hidden h-52 w-52 rounded-full bg-sky-500/10 blur-3xl lg:block dark:bg-accent/10" />
    <div className="section-shell grid items-center gap-10 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
      <div className="max-w-3xl">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm sm:tracking-[0.35em]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          Available for select projects
        </motion.p>
        <motion.h1
          className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:mt-5 sm:text-5xl lg:text-6xl xl:text-[3.75rem]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          I am Manish Washimkar, a{" "}
          <span className="bg-gradient-to-r from-slate-900 via-accent to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-sand dark:to-white">
            MERN Stack Developer
          </span>{" "}
          building clean, thoughtful products for the web.
        </motion.h1>
        <motion.p
          className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-6 sm:text-base sm:leading-8 lg:max-w-3xl lg:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          I design and develop full-stack applications with React, Node.js, Express, and MongoDB,
          balancing elegant interfaces with dependable backend architecture for businesses, founders,
          and teams that value clarity.
        </motion.p>
        <motion.div
          className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 sm:text-sm"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          <span className="rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 dark:border-white/10 dark:bg-slate-900/65">
            React Interfaces
          </span>
          <span className="rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 dark:border-white/10 dark:bg-slate-900/65">
            Express APIs
          </span>
          <span className="rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 dark:border-white/10 dark:bg-slate-900/65">
            MongoDB Workflows
          </span>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
        >
          <a
            href="#projects"
            className="premium-button-primary w-full sm:w-auto"
          >
            View Projects
          </a>
          <a
            href="/manish_washimkar_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="premium-button-secondary w-full gap-2 sm:w-auto"
          >
            <FaArrowUpRightFromSquare className="text-xs" />
            View Resume
          </a>
          <a
            href="#contact"
            className="premium-button-secondary w-full sm:w-auto"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
        >
          {socialLinks.slice(0, 3).map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-2 text-sm text-slate-600 shadow-[0_12px_24px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-[0_18px_30px_rgba(138,91,61,0.12)] dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300"
            >
              <Icon />
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="glass-panel relative overflow-hidden p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10 dark:shadow-[0_24px_70px_rgba(2,6,23,0.4)]"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sand/60 via-white/20 to-transparent dark:from-accent/10 dark:via-transparent dark:to-transparent" />
        <div className="absolute -right-10 top-6 h-28 w-28 rounded-full bg-accent/10 blur-3xl dark:bg-accent/20" />
        <div className="relative space-y-6 lg:space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Profile</p>
            <p className="mt-3 font-serif text-2xl text-slate-900 dark:text-white sm:text-3xl">Manish Washimkar</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">MERN Stack Developer</p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/75 p-4 shadow-[0_18px_32px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/65 dark:shadow-none">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Current Focus
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">
              Building refined React interfaces, dependable Express APIs, and clean Mongo-backed
              product flows for teams that need software to feel polished and production-ready.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_14px_26px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-none">
                <p className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">{item.value}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
