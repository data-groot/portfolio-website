"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/content";

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
  });

  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-surface py-24 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading number="04" title="Experience" kicker="where I've built" />

        <div ref={trackRef} className="relative pl-8 md:pl-14">
          {/* rail + animated fill that draws in as you scroll */}
          <div
            className="absolute bottom-2 left-2 top-2 w-px bg-line md:left-4"
            aria-hidden="true"
          />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute bottom-2 left-2 top-2 w-px origin-top bg-ember md:left-4"
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-16">
            {experience.map((entry, i) => (
              <motion.li
                key={entry.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: 0.05 * i,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="relative"
              >
                {/* node on the rail */}
                <span
                  className="absolute -left-8 top-2 h-3 w-3 -translate-x-[5px] rotate-45 border border-ember bg-ink md:-left-14 md:-translate-x-[5.5px]"
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-2xl uppercase tracking-wide text-cream sm:text-3xl">
                    {entry.company}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-ember">
                    {entry.dates}
                  </span>
                </div>
                <div className="mt-1 font-mono text-sm text-fog">
                  {entry.role} · {entry.location}
                </div>

                <ul className="mt-5 flex max-w-3xl flex-col gap-3">
                  {entry.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-3 leading-relaxed text-fog"
                    >
                      <span
                        className="mt-2.5 h-1 w-4 shrink-0 bg-ember"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-line px-2.5 py-1 font-mono text-xs text-fog"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
