import { motion } from "framer-motion";

import ThemeToggle from "../common/ThemeToggle";
import { navLinks } from "../../utils/constants";

const Navbar = ({ theme, onToggleTheme }) => (
  <motion.header
    className="sticky top-0 z-50 border-b border-slate-200/70 bg-stone-50/85 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/85"
    initial={{ y: -80 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
  >
    <div className="section-shell py-4">
      <div className="flex items-center justify-between gap-4">
        <a href="#home" className="font-serif text-2xl font-semibold tracking-wide text-slate-900 dark:text-white">
          Manish
        </a>

        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>

      <nav className="mt-4 flex gap-5 overflow-x-auto pb-1 md:mt-3 md:justify-end">
        {navLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-accent dark:text-slate-300"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  </motion.header>
);

export default Navbar;
