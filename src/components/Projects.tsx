"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "@/data/content";

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(projects[0].id);

  return (
    <section id="projects" className="scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading number="03" title="Projects" kicker="selected work" />

        <div className="flex flex-col">
          {projects.map((project, i) => {
            const open = openId === project.id;
            const panelId = `project-panel-${project.id}`;
            return (
              <Reveal key={project.id} delay={0.05 * i}>
                <article
                  className={`border-t border-line transition-colors last:border-b ${
                    open ? "bg-surface" : "hover:bg-surface/60"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : project.id)}
                    className="group flex w-full items-baseline gap-4 px-2 py-7 text-left md:gap-8 md:px-6"
                  >
                    <span
                      className="font-mono text-sm text-ember"
                      aria-hidden="true"
                    >
                      {project.index}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`font-display text-2xl uppercase tracking-wide transition-colors sm:text-3xl md:text-4xl ${
                          open
                            ? "text-ember"
                            : "text-cream group-hover:text-ember"
                        }`}
                      >
                        {project.title}
                      </span>
                      <span className="mt-1 block font-mono text-xs uppercase tracking-widest text-fog">
                        {project.tag}
                      </span>
                    </span>
                    <span
                      className={`font-mono text-xl text-fog transition-transform duration-300 ${
                        open ? "rotate-45 text-ember" : "group-hover:text-ember"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-8 px-2 pb-10 md:grid-cols-12 md:px-6">
                          <div className="md:col-span-7">
                            <p className="text-lg font-medium text-cream">
                              {project.blurb}
                            </p>
                            <ul className="mt-4 flex flex-col gap-3">
                              {project.details.map((detail, j) => (
                                <li
                                  key={j}
                                  className="flex gap-3 leading-relaxed text-fog"
                                >
                                  <span
                                    className="mt-2.5 h-1 w-4 shrink-0 bg-ember"
                                    aria-hidden="true"
                                  />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                            {project.links?.length ? (
                              <div className="mt-6 flex flex-wrap items-center gap-3">
                                {project.links.map((link) => (
                                  <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group/link inline-flex items-center gap-2 px-4 py-2.5 font-mono text-sm uppercase tracking-widest transition-colors ${
                                      link.primary
                                        ? "bg-ember text-ink hover:bg-ember-soft"
                                        : "border border-line text-cream hover:border-ember hover:text-ember"
                                    }`}
                                  >
                                    {link.primary ? (
                                      <span
                                        className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink"
                                        aria-hidden="true"
                                      />
                                    ) : null}
                                    {link.label}
                                    <span
                                      className="transition-transform group-hover/link:translate-x-1"
                                      aria-hidden="true"
                                    >
                                      →
                                    </span>
                                  </a>
                                ))}
                              </div>
                            ) : null}
                          </div>

                          <div className="md:col-span-4 md:col-start-9">
                            <div className="mb-6 flex flex-col gap-4">
                              {project.metrics.map((m) => (
                                <div
                                  key={m.label}
                                  className="border-l-2 border-ember pl-4"
                                >
                                  <div className="font-display text-3xl text-cream">
                                    {m.value}
                                  </div>
                                  <div className="font-mono text-xs uppercase tracking-widest text-fog">
                                    {m.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {project.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="border border-line px-2.5 py-1 font-mono text-xs text-fog"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
