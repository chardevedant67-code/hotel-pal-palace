import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { IconPin } from "./icons";
import { siteConfig, whatsappHref, callHref } from "@/lib/site-config";

export default function Location() {
  return (
    <section id="contact" className="container-edge py-20 md:py-28">
      <SectionHeading eyebrow="Location" heading="Find Us in Nagpur" />

      <div className="mt-12 grid gap-8 md:grid-cols-5 md:gap-12">
        <Reveal delay={0.1} className="md:col-span-2">
          <div className="flex items-start gap-3">
            <IconPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
            <address className="not-italic text-[1.05rem] leading-relaxed text-ink">
              {siteConfig.address.line1},
              <br />
              {siteConfig.address.line2},
              <br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.postalCode}
            </address>
          </div>

          <div className="mt-6 space-y-1.5 border-t border-ink/10 pt-6">
            {siteConfig.phones.map((p) => (
              <a
                key={p.raw}
                href={callHref(p.intl)}
                className="block text-[1.05rem] font-medium text-ink hover:text-burgundy"
              >
                {p.display}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-burgundy px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-burgundy-dark"
            >
              Get Directions
            </a>
            <a
              href={callHref(siteConfig.phones[0].intl)}
              className="rounded-full border border-burgundy/30 px-6 py-3 text-center text-sm font-semibold text-burgundy transition-colors hover:bg-burgundy/5"
            >
              Call Hotel
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/15 px-6 py-3 text-center text-sm font-semibold text-ink-soft transition-colors hover:border-burgundy/30 hover:text-burgundy"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-3">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-ink/10 sm:aspect-[16/10]">
            <iframe
              title="Hotel Pal Palace location map"
              src={siteConfig.maps.embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
