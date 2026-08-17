"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Lightbox from "./Lightbox";
import type { HotelImage } from "@/lib/images";

export default function RoomGallery({ images, roomName }: { images: HotelImage[]; roomName: string }) {
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div>
      <button
        type="button"
        onClick={() => setLightboxIndex(active)}
        aria-label={`Open full-screen gallery for ${roomName}`}
        className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[16/10]"
      >
        <Image
          src={images[active].src}
          alt={images[active].alt}
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover"
        />
      </button>

      {images.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={clsx(
                "relative h-16 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition-all sm:h-20 sm:w-28",
                active === i ? "ring-burgundy" : "ring-transparent opacity-70 hover:opacity-100"
              )}
            >
              <Image src={img.src} alt="" fill sizes="112px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(i) => {
          setLightboxIndex(i);
          setActive(i);
        }}
      />
    </div>
  );
}
