"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/content";

// Editorial portrait plate. Default state is an ember monochrome (grayscale
// photo tinted via mix-blend-color, so the face stays legible instead of going
// muddy). Hover or focus lifts the tint and desaturation to reveal full color.
// Camera-style corner brackets, an offset frame, and a scanline sweep give it a
// "viewfinder" feel. Motion is disabled under prefers-reduced-motion.
export default function Portrait() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative mx-auto max-w-xs"
      tabIndex={0}
      aria-label="Portrait of Krishna Mihir Tatavarthi. Hover or focus to see it in full color."
    >
      {/* image plate — frame + brackets live inside here so they never touch the caption */}
      <div className="relative">
        {/* offset ember frame, behind the image */}
        <div
          className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 border border-ember/60 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
          aria-hidden="true"
        />

        <div className="relative isolate overflow-hidden border border-line bg-ink">
          <Image
            src="/headshot.jpg"
            alt="Krishna Mihir Tatavarthi"
            width={683}
            height={1024}
            sizes="(min-width: 768px) 320px, 100vw"
            priority={false}
            className="w-full grayscale brightness-110 contrast-110 transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:brightness-100 group-focus-visible:scale-[1.03] group-focus-visible:grayscale-0 group-focus-visible:brightness-100"
          />

          {/* ember tint — mix-blend-color keeps the photo's light/dark, only shifts hue */}
          <div
            className="pointer-events-none absolute inset-0 bg-ember opacity-90 mix-blend-color transition-opacity duration-500 group-hover:opacity-0 group-focus-visible:opacity-0"
            aria-hidden="true"
          />
          {/* subtle vignette for depth */}
          <div
            className="pointer-events-none absolute inset-0 bg-radial from-transparent to-ink/50"
            aria-hidden="true"
          />
          {/* scanline sweep */}
          <div className="scanline absolute inset-0" aria-hidden="true" />

          {/* corner focus brackets */}
          <span
            className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-ember transition-all duration-500 group-hover:left-2 group-hover:top-2"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-ember transition-all duration-500 group-hover:bottom-2 group-hover:right-2"
            aria-hidden="true"
          />

          {/* live-dot status chip, top-right */}
          <span className="pointer-events-none absolute right-4 top-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-cream/90">
            <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_6px_var(--color-ember)]" />
            <span className="transition-opacity duration-300 group-hover:opacity-0">
              REC
            </span>
            <span className="absolute right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              LIVE
            </span>
          </span>
        </div>
      </div>

      {/* caption — separated from the plate, nothing crosses it */}
      <figcaption className="mt-5 flex items-baseline justify-between gap-3 font-mono text-xs uppercase tracking-widest">
        <span className="text-fog">
          {site.monogram} <span className="text-ember">/</span> Portrait
        </span>
        <span className="text-fog transition-colors duration-300 group-hover:text-ember">
          {site.location}
        </span>
      </figcaption>
    </motion.figure>
  );
}
