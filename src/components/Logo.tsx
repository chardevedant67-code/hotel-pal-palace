import Link from "next/link";
import clsx from "clsx";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

/**
 * Text-based wordmark. Standing in for the hotel's real logo mark until
 * artwork is supplied — swap this component out once a logo file exists.
 */
export default function Logo({ variant = "dark", className }: LogoProps) {
  const ink = variant === "dark" ? "text-ink" : "text-white";
  const sub = variant === "dark" ? "text-burgundy" : "text-gold-soft";

  return (
    <Link
      href="/#home"
      aria-label="Hotel Pal Palace — Home"
      className={clsx("flex items-center gap-2.5 shrink-0", className)}
    >
      <span
        className={clsx(
          "flex h-9 w-9 items-center justify-center rounded-full border font-serif text-sm",
          variant === "dark"
            ? "border-burgundy/30 text-burgundy"
            : "border-white/40 text-white"
        )}
      >
        PP
      </span>
      <span className="leading-tight">
        <span className={clsx("block font-serif text-[0.95rem] tracking-wide", ink)}>
          Hotel Pal Palace
        </span>
        <span className={clsx("block text-[0.6rem] font-semibold tracking-[0.24em] uppercase", sub)}>
          Nagpur
        </span>
      </span>
    </Link>
  );
}
