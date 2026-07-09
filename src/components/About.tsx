import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Portrait from "./Portrait";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading number="01" title="About" kicker="who I am" />

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-2xl font-medium leading-snug text-cream md:text-3xl">
                {about.statement.split("production").map((part, i) =>
                  i === 0 ? (
                    <span key={i}>
                      {part}
                      <span className="text-ember">production</span>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
            </Reveal>
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)}>
                <p className="mt-6 leading-relaxed text-fog">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <div className="mx-auto mb-12 max-w-xs md:mx-0">
              <Portrait />
            </div>
            <Reveal delay={0.2}>
              <dl className="border-t border-line">
                {about.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="group border-b border-line py-5 transition-colors hover:border-ember"
                  >
                    <dt className="font-mono text-xs uppercase tracking-widest text-fog">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 font-medium text-cream">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
