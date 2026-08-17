import Image from "next/image";
import Reveal from "./Reveal";
import { images } from "@/lib/images";
import { siteConfig, whatsappHref, callHref } from "@/lib/site-config";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <Image
          src={images.finalCta.src}
          alt={images.finalCta.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-burgundy/85" />
      </div>

      <div className="container-edge relative z-10 text-center">
        <Reveal>
          <span className="eyebrow text-gold-soft">Plan Your Stay</span>
          <h2 className="mx-auto mt-4 max-w-xl font-serif text-[2.1rem] leading-[1.15] text-white sm:text-4xl md:text-5xl">
            Make Your Stay Comfortable.
          </h2>
          <div className="gold-rule mx-auto mt-5" />
          <p className="mx-auto mt-5 max-w-md text-[1.05rem] leading-relaxed text-white/85">
            Planning a stay in Nagpur? Get in touch with Hotel Pal Palace.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#booking"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-burgundy transition-colors hover:bg-cream"
          >
            Book Your Stay
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            WhatsApp Us
          </a>
          <a
            href={callHref(siteConfig.phones[0].intl)}
            className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Call Now
          </a>
        </Reveal>
      </div>
    </section>
  );
}
