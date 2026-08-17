import clsx from "clsx";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  heading: string;
  copy?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  heading,
  copy,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={clsx(
          "mt-4 font-serif text-[2rem] leading-[1.15] sm:text-4xl md:text-[2.75rem]",
          light ? "text-white" : "text-ink"
        )}
      >
        {heading}
      </h2>
      <div className={clsx("gold-rule mt-5", align === "center" && "mx-auto")} />
      {copy && (
        <p
          className={clsx(
            "mt-5 text-[1.05rem] leading-relaxed",
            light ? "text-white/80" : "text-ink-soft"
          )}
        >
          {copy}
        </p>
      )}
    </Reveal>
  );
}
