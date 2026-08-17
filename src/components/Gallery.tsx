"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import { galleryImages } from "@/lib/images";

const categories = ["All", "Rooms", "Interiors", "Hotel", "Comfort", "Details"];

const spanClasses = [
  "sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "",
  "",
  "sm:row-span-2",
  "",
  "",
  "",
  "",
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [index, setIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active)),
    [active]
  );

  return (
    <section id="gallery" className="container-edge py-20 md:py-28">
      <SectionHeading
        eyebrow="Photography"
        heading="Inside Hotel Pal Palace"
        copy="A closer look at our rooms and interiors."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={clsx(
              "rounded-full border px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors",
              active === c
                ? "border-burgundy bg-burgundy text-white"
                : "border-ink/15 text-ink-soft hover:border-burgundy/40 hover:text-burgundy"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:auto-rows-[180px] sm:grid-cols-4 sm:gap-4">
        {filtered.map((img, i) => (
          <Reveal
            key={img.src + img.alt}
            delay={(i % 8) * 0.05}
            className={clsx("relative overflow-hidden rounded-xl", spanClasses[i % spanClasses.length])}
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Open image: ${img.alt}`}
              className="group relative block h-40 w-full sm:h-full"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/15" />
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox images={filtered} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
    </section>
  );
}
