import { useState } from "react";
import { motion } from "framer-motion";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

import ThemeToggle from "../common/ThemeToggle";
import { navLinks } from "../../utils/constants";

const Navbar = ({ theme, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-slate-200/70 bg-stone-50/90 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/90"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="section-shell py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="font-serif text-xl font-semibold tracking-wide text-slate-900 dark:text-white sm:text-2xl">
            Manish
          </a>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 lg:flex">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-accent dark:text-slate-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              onClick={() => setIsMenuOpen((currentState) => !currentState)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 transition hover:border-accent hover:text-accent dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <FaXmark /> : <FaBarsStaggered />}
            </button>
          </div>
        </div>

        <div className="mt-3 hidden gap-3 overflow-x-auto pb-1 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-transparent px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-200 hover:bg-white/80 hover:text-accent dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-slate-900/80"
            >
              {item.label}
            </a>
          ))}
        </div>

        {isMenuOpen ? (
          <nav className="mt-4 grid gap-2 rounded-3xl border border-slate-200/80 bg-white/95 p-3 shadow-soft dark:border-white/10 dark:bg-slate-900/95 lg:hidden">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-stone-50 hover:text-accent dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </motion.header>
  );
};

export default Navbar;
