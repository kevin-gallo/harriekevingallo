'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About me", href: "/about" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Work", href: "/work" },
  { label: "Tools", href: "/tools" },
  { label: "Services", href: "/services" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 50);

      if (y > lastY && y > 120) {
        setHidden(true);
        setIsOpen(false);
      } else if (y < lastY) {
        setHidden(false);
      }
      lastY = y;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerColors = isOpen
    ? "bg-grey-600 text-white"
    : atTop
      ? "bg-transparent text-white"
      : "bg-off-white text-black";

  return (
    <header
      className={`px-space fixed top-0 z-50 w-full transition-[background-color,color,transform] duration-300 ${headerColors} ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-container flex items-center justify-between border-b border-current/40">
        <Link href="/" className="block py-5" aria-label="Home">
          <span className="font-headline text-xl font-medium lg:text-2xl">
            Harrie Kevin Gallo
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="group relative py-2 body-3">
                  {item.label}
                  <i className="absolute bottom-0 left-0 h-px w-0 bg-current transition-all duration-300 ease-out group-hover:w-full"></i>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="btn btn-yellow max-lg:hidden">
            Get in touch
          </a>

          {/* Mobile menu toggle */}
          <button
            className="p-2 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        inert={!isOpen}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 lg:hidden ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 py-6" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="display-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="btn btn-yellow mt-5 self-start"
              onClick={() => setIsOpen(false)}
            >
              Get in touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
