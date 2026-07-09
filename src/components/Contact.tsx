import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { site } from "@/data/content";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: site.linkedinLabel, href: site.linkedin },
  { label: "GitHub", value: site.githubLabel, href: site.github },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading number="05" title="Contact" kicker="say hello" />

        <Reveal>
          <p className="max-w-2xl text-2xl font-medium leading-snug text-cream md:text-3xl">
            Open to ML engineering and AI architecture roles.
            <span className="text-fog">
              {" "}
              If you&apos;re building something that needs models in
              production, let&apos;s talk.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-14 border-t border-line">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    channel.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-baseline justify-between gap-4 border-b border-line px-2 py-7 transition-colors duration-300 hover:bg-ember md:px-6"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-fog transition-colors group-hover:text-ink">
                    {channel.label}
                  </span>
                  <span className="flex-1 truncate text-right font-display text-xl uppercase tracking-wide text-cream transition-colors group-hover:text-ink sm:text-2xl md:text-3xl">
                    {channel.value}
                  </span>
                  <span
                    className="font-mono text-xl text-ember transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <span className="font-mono text-xs uppercase tracking-widest text-fog">
            © {new Date().getFullYear()} {site.name}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-fog">
            {site.location} · Built with Next.js
          </span>
        </footer>
      </div>
    </section>
  );
}
