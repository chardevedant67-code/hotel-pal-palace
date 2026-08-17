import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { instagramShowcase } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

export default function InstagramSection() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Instagram"
            heading="Follow Our Stay Experience"
            copy="Discover Hotel Pal Palace, our rooms and the latest updates on Instagram."
            className="max-w-lg"
          />
          <Reveal delay={0.15}>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy"
            >
              Follow {siteConfig.instagram.handle}
              <span aria-hidden>&rarr;</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-2.5 sm:gap-4 md:grid-cols-6">
          {instagramShowcase.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.05} className="relative aspect-square overflow-hidden rounded-lg">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full w-full"
                aria-label="View on Instagram"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 16vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
