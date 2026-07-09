import Reveal from "./Reveal";

type SectionHeadingProps = {
  number: string;
  title: string;
  kicker?: string;
};

export default function SectionHeading({
  number,
  title,
  kicker,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-12 flex items-end gap-4 md:mb-16">
        <span className="font-mono text-sm text-ember" aria-hidden="true">
          {number} /
        </span>
        <h2 className="font-display text-4xl uppercase leading-none tracking-wide text-cream sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {kicker ? (
          <span className="mb-1 hidden font-mono text-xs uppercase tracking-widest text-fog md:inline">
            {kicker}
          </span>
        ) : null}
      </div>
    </Reveal>
  );
}
