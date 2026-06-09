import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-start items-start";

  return (
    <Reveal
      className={`flex max-w-2xl flex-col ${alignment} ${className}`}
    >
      {eyebrow && (
        <span className="eyebrow mb-3">
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-extrabold leading-tight text-navy text-balance sm:text-4xl lg:text-[2.7rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-navy/60 sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
