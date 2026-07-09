"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/content";

// Headshot with an ember-duotone "graphic" treatment: a color-blended copy
// sits over the original and fades out on hover/focus to reveal the real
// photo. A slow scanline sweep keeps it alive (disabled for reduced motion).
export default function Portrait() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative"
      tabIndex={0}
      aria-label="Portrait of Krishna Mihir Tatavarthi. Interact to see it in full color."
    >
      {/* offset ember frame behind the photo */}
      <div
        className="absolute inset-0 translate-x-3 translate-y-3 border border-ember"
        aria-hidden="true"
      />

      <div className="relative isolate overflow-hidden border border-line">
        {/* original photo underneath */}
        <Image
          src="/headshot.jpg"
          alt="Krishna Mihir Tatavarthi"
          width={683}
          height={1024}
          sizes="(min-width: 768px) 320px, 100vw"
          className="w-full"
          priority={false}
        />

        {/* duotone layer: orange base + grayscale multiply copy */}
        <div
          className="absolute inset-0 isolate bg-ember transition-opacity duration-500 group-hover:opacity-0 group-focus-visible:opacity-0"
          aria-hidden="true"
        >
          <Image
            src="/headshot.jpg"
            alt=""
            width={683}
            height={1024}
            sizes="(min-width: 768px) 320px, 100vw"
            className="h-full w-full object-cover grayscale contrast-125 brightness-95 mix-blend-multiply"
          />
          {/* faint CRT-style line texture */}
          <div className="crt-lines absolute inset-0" />
        </div>

        {/* scanline sweep */}
        <div className="scanline absolute inset-0" aria-hidden="true" />
      </div>

      <figcaption className="mt-4 flex items-baseline justify-between font-mono text-xs uppercase tracking-widest text-fog">
        <span>{site.monogram} · Portrait</span>
        <span className="text-ember transition-opacity duration-300 group-hover:opacity-0">
          Hover for color
        </span>
      </figcaption>
    </motion.figure>
  );
}
