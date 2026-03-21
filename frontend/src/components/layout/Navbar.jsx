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
      className="sticky top-0 z-50 border-b border-slate-200/70 bg-stone-50/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="section-shell py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="font-serif text-xl font-semibold tracking-wide text-slate-900 transition duration-300 hover:text-accent dark:text-white sm:text-2xl"
          >
            Manish
          </a>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-2 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur lg:flex dark:border-white/10 dark:bg-slate-900/65">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition duration-300 hover:bg-stone-100 hover:text-accent dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              onClick={() => setIsMenuOpen((currentState) => !currentState)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:border-accent hover:text-accent dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <FaXmark /> : <FaBarsStaggered />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav className="mt-4 grid gap-2 rounded-3xl border border-slate-200/80 bg-white/95 p-3 shadow-soft dark:border-white/10 dark:bg-slate-900/95 lg:hidden">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:bg-stone-50 hover:text-accent dark:text-slate-200 dark:hover:bg-slate-800"
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
