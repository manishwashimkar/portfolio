import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { profile, socialLinks, stats } from "../../utils/constants";

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden pb-14 pt-8 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/20 to-transparent dark:from-slate-200/5" />
    <div className="pointer-events-none absolute inset-x-0 top-10 h-[26rem] bg-[radial-gradient(circle_at_20%_18%,rgba(255,248,240,0.46),transparent_32%),radial-gradient(circle_at_75%_12%,rgba(255,255,255,0.28),transparent_24%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(148,163,184,0.12),transparent_26%),radial-gradient(circle_at_76%_12%,rgba(138,91,61,0.16),transparent_22%)]" />
    <div className="pointer-events-none absolute left-[8%] top-24 hidden h-40 w-40 rounded-full bg-accent/10 blur-3xl lg:block dark:bg-slate-400/10" />
    <div className="pointer-events-none absolute bottom-16 right-[10%] hidden h-52 w-52 rounded-full bg-sky-500/10 blur-3xl lg:block dark:bg-accent/10" />
    <div className="section-shell grid items-center gap-10 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:items-start lg:gap-16">
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
          className="hero-title mt-4 max-w-4xl font-serif text-5xl font-semibold leading-none sm:mt-5 sm:text-6xl lg:text-7xl xl:text-[5rem]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Hi, I'm <span className="hero-gradient-text">{profile.fullName}</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-lg font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-white sm:text-2xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          {profile.role}
        </motion.p>
        <motion.p
          className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-6 sm:text-base sm:leading-8 lg:max-w-3xl lg:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          {profile.description}
        </motion.p>
        <motion.p
          className="mt-5 text-sm font-semibold text-slate-900 dark:text-white sm:text-base"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.23 }}
        >
          {profile.location}
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
        className="flex w-full flex-col items-center justify-self-center text-center lg:mt-14 lg:justify-self-end xl:mt-16"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.2 }}
      >
        <div className="profile-photo-slot h-64 w-64 text-5xl font-bold sm:h-80 sm:w-80 lg:h-80 lg:w-80 xl:h-[22rem] xl:w-[22rem]">
          {profile.image ? (
            <img
              src={profile.image}
              alt={profile.fullName}
              className="profile-photo-image"
              loading="eager"
              decoding="async"
            />
          ) : (
            "MW"
          )}
        </div>
        <div className="mt-8 w-full max-w-md rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-5 text-left shadow-[0_18px_34px_rgba(15,23,42,0.07)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Current Focus</p>
          <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">
            Building polished React interfaces, dependable Express APIs, and MongoDB-backed product
            flows that are easy to use and maintain.
          </p>
        </div>
        <div className="mt-4 grid w-full max-w-md grid-cols-3 gap-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200/80 bg-white/75 p-3 text-left shadow-[0_12px_24px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-slate-900/65 dark:shadow-none"
            >
              <p className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">{item.value}</p>
              <p className="mt-1 text-[0.7rem] leading-4 text-slate-600 dark:text-slate-300 sm:text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
