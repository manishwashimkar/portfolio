import { motion } from "framer-motion";

import { socialLinks, stats } from "../../utils/constants";

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden py-20 sm:py-24">
    <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <motion.p
          className="text-sm font-semibold uppercase tracking-[0.35em] text-accent"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          Available for select projects
        </motion.p>
        <motion.h1
          className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-6xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Manish Washimkar, a MERN Stack Developer building clean, thoughtful products for the web.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          I design and develop full-stack applications with React, Node.js, Express, and MongoDB,
          balancing elegant interfaces with dependable backend architecture for businesses, founders,
          and teams that value clarity.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent dark:bg-white dark:text-slate-950"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-white/10 dark:text-slate-100"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
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
              className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-accent dark:text-slate-300"
            >
              <Icon />
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="glass-panel relative overflow-hidden p-8"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sand/60 via-white/20 to-transparent dark:from-accent/10 dark:via-transparent dark:to-transparent" />
        <div className="relative space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Profile</p>
            <p className="mt-3 font-serif text-3xl text-slate-900 dark:text-white">Manish Washimkar</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">MERN Stack Developer</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-white/10 dark:bg-slate-900/70">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{item.value}</p>
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
