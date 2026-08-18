'use client'

import { Moon, Sun } from "lucide-react";

/*
 * Icons swap via CSS (.dark) instead of state so the server render
 * never mismatches the class set by the inline theme script.
 */
const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isDark ? "#101010" : "#faf7f1");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* private mode */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={`inline-flex size-8 items-center justify-center rounded-lg transition-colors ${className}`}
    >
      <Sun className="hidden size-4 dark:block" strokeWidth={1.75} />
      <Moon className="size-4 dark:hidden" strokeWidth={1.75} />
    </button>
  );
};

export default ThemeToggle;
