import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { rooms } from "@/lib/images";
import { siteConfig, whatsappHref, callHref } from "@/lib/site-config";
import RoomGallery from "@/components/RoomGallery";
import Reveal from "@/components/Reveal";
import RoomCard from "@/components/RoomCard";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return {};
  return {
    title: `${room.name} | Hotel Pal Palace Nagpur`,
    description: `${room.description} Located at ${siteConfig.address.full}.`,
  };
}

export default async function RoomDetailPage({ params }: Props) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) notFound();

  const otherRooms = rooms.filter((r) => r.slug !== slug).slice(0, 3);

  return (
    <div className="pt-16 md:pt-20">
      <div className="container-edge py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-ink-soft">
          <Link href="/#rooms" className="hover:text-burgundy">
            Rooms
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{room.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="lg:col-span-3">
            <RoomGallery images={room.images} roomName={room.name} />
          </Reveal>

          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <span className="eyebrow">Hotel Pal Palace</span>
              <h1 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">{room.name}</h1>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">{room.description}</p>
            </Reveal>

            <Reveal delay={0.18} className="mt-8">
              <h2 className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">
                Room Highlights
              </h2>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {room.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-ink/85">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.24} className="mt-7">
              <h2 className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">
                Amenities
              </h2>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {room.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-ink/85">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy/60" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.3} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#booking"
                className="flex-1 rounded-full bg-burgundy px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-burgundy-dark"
              >
                Book This Room
              </Link>
              <a
                href={whatsappHref(`Hello Hotel Pal Palace, I would like to ask about the ${room.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full border border-burgundy/30 px-6 py-3.5 text-center text-sm font-semibold text-burgundy transition-colors hover:bg-burgundy/5"
              >
                Ask on WhatsApp
              </a>
            </Reveal>
            <Reveal delay={0.34} className="mt-3">
              <a
                href={callHref(siteConfig.phones[0].intl)}
                className="block text-center text-sm font-medium text-ink-soft hover:text-burgundy"
              >
                or call {siteConfig.phones[0].display}
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      {otherRooms.length > 0 && (
        <div className="bg-ivory py-16 md:py-20">
          <div className="container-edge">
            <h2 className="font-serif text-2xl text-ink">Other Rooms</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherRooms.map((r, i) => (
                <RoomCard key={r.slug} room={r} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
