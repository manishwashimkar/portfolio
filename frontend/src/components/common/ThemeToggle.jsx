import { FaMoon, FaSun } from "react-icons/fa6";

const ThemeToggle = ({ theme, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200"
    aria-label="Toggle color theme"
  >
    {theme === "dark" ? <FaSun /> : <FaMoon />}
  </button>
);

export default ThemeToggle;

