import Image from "next/image";
import Link from "next/link";
import type { RoomCategory } from "@/lib/images";
import { whatsappHref } from "@/lib/site-config";
import Reveal from "./Reveal";

export default function RoomCard({ room, delay = 0 }: { room: RoomCategory; delay?: number }) {
  return (
    <Reveal
      delay={delay}
      className="group overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-ink/5 transition-shadow hover:shadow-[0_18px_40px_-16px_rgba(84,27,36,0.28)]"
    >
      <Link href={`/rooms/${room.slug}`} className="block">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={room.images[0].src}
            alt={room.images[0].alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <Link href={`/rooms/${room.slug}`}>
          <h3 className="font-serif text-xl text-ink">{room.name}</h3>
        </Link>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{room.description}</p>

        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
          {room.highlights.slice(0, 3).map((h) => (
            <span key={h} className="text-xs font-medium tracking-wide text-burgundy/80">
              {h}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <Link
            href={`/rooms/${room.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-burgundy"
          >
            View Room
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
          <a
            href={whatsappHref(`Hello Hotel Pal Palace, I would like to enquire about the ${room.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink-soft underline decoration-ink/20 underline-offset-4 hover:text-burgundy"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </Reveal>
  );
}
