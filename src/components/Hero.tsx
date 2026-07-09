"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/content";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

function RotatingTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % site.taglines.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-6 items-center overflow-hidden font-mono text-sm text-cream sm:text-base">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {site.taglines[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const intro = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const rise = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden">
      <ParticleField />

      {/* fade the field toward the bottom so the next section lands cleanly */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-ink"
        aria-hidden="true"
      />

      <motion.div
        variants={intro}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-28 md:px-8"
      >
        <motion.p
          variants={rise}
          className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-ember sm:text-sm"
        >
          {site.role}
        </motion.p>

        <motion.h1
          variants={rise}
          className="font-display uppercase leading-[0.92] tracking-wide"
        >
          <span className="block text-[17vw] text-cream sm:text-7xl md:text-8xl lg:text-9xl">
            {site.firstName} {site.lastName}
          </span>
          <span className="text-outline block text-[17vw] sm:text-7xl md:text-8xl lg:text-9xl">
            {site.surname}
          </span>
        </motion.h1>

        <motion.div
          variants={rise}
          className="mt-8 flex items-center gap-3 text-fog"
        >
          <span className="h-px w-10 bg-ember" aria-hidden="true" />
          <RotatingTagline />
        </motion.div>

        <motion.div variants={rise} className="mt-12 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-ember px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-ink transition-colors hover:bg-ember-soft"
          >
            View projects
            <span
              className="transition-transform group-hover:translate-y-0.5"
              aria-hidden="true"
            >
              ↓
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-line px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-cream transition-colors hover:border-ember hover:text-ember"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-5 hidden items-center gap-3 font-mono text-xs uppercase tracking-widest text-fog md:left-8 md:flex"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          aria-hidden="true"
          className="text-ember"
        >
          ↓
        </motion.span>
        Scroll
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 right-5 hidden font-mono text-xs uppercase tracking-widest text-fog md:right-8 md:block"
      >
        {site.location} · MS CS @ UMBC
      </motion.div>
    </section>
  );
}
