import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaBarsStaggered, FaXmark } from "react-icons/fa6";

import ThemeToggle from "../common/ThemeToggle";
import { navLinks, profile, stats } from "../../utils/constants";

const Navbar = ({ theme, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navLinks[0]?.href || "#home");
  const profileMenuRef = useRef(null);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  };

  useEffect(() => {
    if (!isProfileOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (profileMenuRef.current?.contains(event.target)) {
        return;
      }

      setIsProfileOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isProfileOpen]);

  useEffect(() => {
    const sectionElements = navLinks
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const updateActiveSection = () => {
      const scrollTarget = window.scrollY + 140;
      let currentSection = navLinks[0]?.href || "#home";

      sectionElements.forEach((section) => {
        if (section.offsetTop <= scrollTarget) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-slate-200/70 bg-stone-50/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="section-shell relative py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div ref={profileMenuRef} className="relative flex min-w-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => {
                setIsProfileOpen((currentState) => !currentState);
                setIsMenuOpen(false);
              }}
              className="profile-photo-slot h-10 w-10 text-xs font-bold transition duration-300 hover:-translate-y-0.5 hover:border-accent sm:h-11 sm:w-11"
              aria-label="Open profile summary"
              aria-expanded={isProfileOpen}
            >
              {profile.image ? (
                <img src={profile.image} alt={profile.fullName} className="h-full w-full object-cover" />
              ) : (
                "MW"
              )}
            </button>
            <a href="#home" onClick={handleNavClick} className="group hidden min-w-0 sm:block">
              <span className="block truncate font-serif text-lg font-semibold tracking-wide text-slate-900 transition duration-300 group-hover:text-accent dark:text-white sm:text-xl">
                {profile.fullName}
              </span>
              <span className="block truncate text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-sm">
                {profile.role}
              </span>
            </a>

            {isProfileOpen ? (
              <motion.div
                className="absolute left-0 top-[calc(100%+0.75rem)] z-50 w-[min(21rem,calc(100vw-2rem))] rounded-3xl border border-slate-200/80 bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-slate-950 sm:w-[23rem] sm:p-5"
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.18 }}
              >
                <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4 dark:border-white/10">
                  <div className="profile-photo-slot h-14 w-14 text-sm font-bold">
                    {profile.image ? (
                      <img src={profile.image} alt={profile.fullName} className="h-full w-full object-cover" />
                    ) : (
                      "MW"
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Profile</p>
                    <p className="mt-1 truncate font-serif text-xl text-slate-900 dark:text-white">
                      {profile.fullName}
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{profile.role}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200/80 bg-stone-50/80 p-4 dark:border-white/10 dark:bg-slate-900/80">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    Current Focus
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
                    Building refined React interfaces, dependable Express APIs, and clean Mongo-backed
                    product flows for polished production-ready software.
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-200/80 bg-white p-3 dark:border-white/10 dark:bg-slate-900"
                    >
                      <p className="text-lg font-bold text-slate-900 dark:text-white">{item.value}</p>
                      <p className="mt-1 text-[0.68rem] leading-4 text-slate-600 dark:text-slate-300">{item.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <nav className="hidden items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-2 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur xl:flex dark:border-white/10 dark:bg-slate-900/65">
              {navLinks.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                      isActive
                        ? "bg-slate-900 text-white shadow-[0_12px_24px_rgba(15,23,42,0.14)] dark:bg-white dark:text-slate-950"
                        : "text-slate-600 hover:bg-stone-100 hover:text-accent dark:text-slate-300 dark:hover:bg-slate-800"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <div className="hidden xl:block">
              <a
                href="/manish_washimkar_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="premium-button-secondary gap-2 px-5 py-2.5"
              >
                <FaArrowUpRightFromSquare className="text-xs" />
                View Resume
              </a>
            </div>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              onClick={() => setIsMenuOpen((currentState) => !currentState)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:border-accent hover:text-accent dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200 xl:hidden"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <FaXmark /> : <FaBarsStaggered />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav className="mt-4 grid gap-2 rounded-3xl border border-slate-200/80 bg-white/95 p-3 shadow-soft dark:border-white/10 dark:bg-slate-900/95 xl:hidden">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition duration-300 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-[0_12px_24px_rgba(15,23,42,0.14)] dark:bg-white dark:text-slate-950"
                      : "text-slate-700 hover:bg-stone-50 hover:text-accent dark:text-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="/manish_washimkar_resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={handleNavClick}
              className="premium-button-secondary mt-2 w-full gap-2"
            >
              <FaArrowUpRightFromSquare className="text-xs" />
              View Resume
            </a>
          </nav>
        ) : null}
      </div>
    </motion.header>
  );
};

export default Navbar;
