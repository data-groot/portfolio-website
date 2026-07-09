"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"
      >
        <a
          href="#main"
          className="font-mono text-sm font-bold tracking-widest text-cream transition-colors hover:text-ember"
        >
          {site.monogram}
          <span className="text-ember">_</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group font-mono text-xs uppercase tracking-widest text-fog transition-colors hover:text-cream"
              >
                <span className="mr-1 text-ember" aria-hidden="true">
                  0{i + 1}.
                </span>
                {link.label}
                <span className="block h-px max-w-0 bg-ember transition-all duration-300 group-hover:max-w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 bg-cream transition-transform ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-cream transition-transform ${
              open ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-line bg-ink/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {links.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-2xl uppercase tracking-wide text-cream transition-colors hover:text-ember"
                  >
                    <span className="mr-3 font-mono text-sm text-ember">
                      0{i + 1}.
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
