import { socialLinks } from "../../utils/constants";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="border-t border-slate-200/70 py-8 dark:border-white/10 sm:py-10">
    <div className="section-shell space-y-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-xl text-slate-900 dark:text-white sm:text-2xl">Manish Washimkar</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            MERN Stack Developer crafting reliable web experiences.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-600 shadow-[0_12px_24px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-[0_18px_30px_rgba(138,91,61,0.12)] dark:border-white/10 dark:bg-slate-900/65 dark:text-slate-300 dark:shadow-none"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-slate-200/70 pt-5 text-xs tracking-[0.18em] text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {currentYear} Manish Washimkar. All rights reserved.</p>
        <p>Designed and developed with React, Node.js, and MongoDB.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
