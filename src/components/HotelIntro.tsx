import Image from "next/image";
import Reveal from "./Reveal";
import { images } from "@/lib/images";

const details = ["Premium Rooms", "AC Rooms", "Prime Location", "Comfortable Stay"];

export default function HotelIntro() {
  return (
    <section id="about" className="container-edge py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className="relative order-2 md:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src={images.introInterior.src}
              alt={images.introInterior.alt}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden w-40 rounded-xl border border-gold/30 bg-cream p-4 shadow-lg sm:block md:-right-8">
            <p className="font-serif text-3xl text-burgundy">440018</p>
            <p className="mt-1 text-xs tracking-wide text-ink-soft">
              Central Avenue Road, Nagpur
            </p>
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal>
            <span className="eyebrow">Welcome to Hotel Pal Palace</span>
            <h2 className="mt-4 font-serif text-[2rem] leading-[1.15] text-ink sm:text-4xl md:text-[2.75rem]">
              Comfort that feels like home.
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
              Hotel Pal Palace offers comfortable accommodation with premium rooms,
              air-conditioned stays and a convenient location on Central Avenue Road
              in Nagpur.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-9 grid grid-cols-2 gap-x-6 gap-y-4">
            {details.map((d) => (
              <div key={d} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="text-sm font-medium text-ink/85">{d}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
