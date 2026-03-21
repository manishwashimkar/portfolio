import { FaMoon, FaSun } from "react-icons/fa6";

const ThemeToggle = ({ theme, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_14px_30px_rgba(138,91,61,0.14)] dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200"
    aria-label="Toggle color theme"
  >
    {theme === "dark" ? <FaSun /> : <FaMoon />}
  </button>
);

export default ThemeToggle;
