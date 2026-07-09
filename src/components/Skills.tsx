"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillCategories } from "@/data/content";

const filters = [{ id: "all", label: "Everything" }, ...skillCategories];

export default function Skills() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? skillCategories.flatMap((c) =>
          c.skills.map((s) => ({ skill: s, category: c.id }))
        )
      : skillCategories
          .filter((c) => c.id === active)
          .flatMap((c) => c.skills.map((s) => ({ skill: s, category: c.id })));

  return (
    <section id="stack" className="scroll-mt-20 bg-surface py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading number="02" title="Stack" kicker="tools I reach for" />

        <Reveal>
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="mb-10 flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={active === f.id}
                onClick={() => setActive(f.id)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                  active === f.id
                    ? "bg-ember text-ink"
                    : "border border-line text-fog hover:border-ember hover:text-cream"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.ul layout className="flex flex-wrap gap-3">
          <AnimatePresence mode="popLayout">
            {visible.map(({ skill, category }) => (
              <motion.li
                layout
                key={skill + category}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25 }}
              >
                <span className="group flex cursor-default items-center gap-2 border border-line bg-ink px-4 py-2.5 text-sm text-cream transition-all duration-200 hover:-translate-y-0.5 hover:border-ember">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-fog transition-colors group-hover:bg-ember"
                    aria-hidden="true"
                  />
                  {skill}
                </span>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
