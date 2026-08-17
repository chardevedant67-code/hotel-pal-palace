import Image from "next/image";
import Reveal from "./Reveal";
import { images } from "@/lib/images";

const points = ["Comfort", "Cleanliness", "Convenience", "Hospitality"];

export default function Experience() {
  return (
    <section className="container-edge py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow">The Stay Experience</span>
            <h2 className="mt-4 font-serif text-[2rem] leading-[1.15] text-ink sm:text-4xl md:text-[2.75rem]">
              A Stay Designed Around Comfort.
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
              From comfortable rooms to a convenient location, Hotel Pal Palace is
              designed to make your stay in Nagpur simple, comfortable and memorable.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-9 grid grid-cols-2 gap-4">
            {points.map((p) => (
              <div
                key={p}
                className="rounded-xl border border-ink/10 bg-white/60 px-5 py-4 text-center"
              >
                <span className="font-serif text-lg text-burgundy">{p}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:aspect-[3/4]">
          <Image
            src={images.experienceWide.src}
            alt={images.experienceWide.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
