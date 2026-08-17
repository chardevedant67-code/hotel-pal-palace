"use client";

import { callHref, siteConfig } from "@/lib/site-config";
import { IconHome, IconRoom, IconGrid, IconPhone, IconCheckShield } from "./icons";

const links = [
  { label: "Home", href: "#home", icon: IconHome },
  { label: "Rooms", href: "#rooms", icon: IconRoom },
  { label: "Gallery", href: "#gallery", icon: IconGrid },
];

export default function MobileStickyBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream/95 backdrop-blur md:hidden"
    >
      <div className="grid grid-cols-5 items-stretch">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="flex flex-col items-center justify-center gap-1 py-2.5 text-ink-soft"
          >
            <l.icon className="h-5 w-5" />
            <span className="text-[10px] font-medium tracking-wide">{l.label}</span>
          </a>
        ))}

        <a
          href={callHref(siteConfig.phones[0].intl)}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-ink-soft"
        >
          <IconPhone className="h-5 w-5" />
          <span className="text-[10px] font-medium tracking-wide">Call</span>
        </a>

        <a
          href="#booking"
          className="flex flex-col items-center justify-center gap-1 bg-burgundy py-2.5 text-white"
        >
          <IconCheckShield className="h-5 w-5" />
          <span className="text-[10px] font-semibold tracking-wide">Book Now</span>
        </a>
      </div>
    </nav>
  );
}
