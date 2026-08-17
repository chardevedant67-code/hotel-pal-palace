"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { siteConfig, whatsappHref } from "@/lib/site-config";

export default function Navbar() {
  const pathname = usePathname();
  const hasDarkHero = pathname === "/";
  const [scrolledPast, setScrolledPast] = useState(false);
  const [open, setOpen] = useState(false);
  const scrolled = !hasDarkHero || scrolledPast;

  useEffect(() => {
    if (!hasDarkHero) return;
    const onScroll = () => setScrolledPast(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasDarkHero]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-cream/95 backdrop-blur border-b border-ink/10 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "bg-gradient-to-b from-black/35 to-transparent border-b border-transparent"
      )}
    >
      <nav className="container-edge flex h-16 md:h-20 items-center justify-between">
        <Logo variant={scrolled || open ? "dark" : "light"} />

        <div className="hidden lg:flex items-center gap-9">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={clsx(
                "relative text-sm font-medium tracking-wide transition-colors group",
                scrolled ? "text-ink/80 hover:text-burgundy" : "text-white/90 hover:text-white"
              )}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "text-sm font-medium transition-colors",
              scrolled ? "text-ink/80 hover:text-burgundy" : "text-white/90 hover:text-white"
            )}
          >
            WhatsApp
          </a>
          <Link
            href="/#booking"
            className="rounded-full bg-burgundy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-burgundy-dark"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full"
        >
          <span className="relative block h-4 w-6">
            <span
              className={clsx(
                "absolute left-0 top-0 h-[1.5px] w-6 transition-all duration-300",
                scrolled || open ? "bg-ink" : "bg-white",
                open && "top-[7px] rotate-45"
              )}
            />
            <span
              className={clsx(
                "absolute left-0 top-[7px] h-[1.5px] w-6 transition-all duration-300",
                scrolled || open ? "bg-ink" : "bg-white",
                open && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "absolute left-0 bottom-0 h-[1.5px] w-6 transition-all duration-300",
                scrolled || open ? "bg-ink" : "bg-white",
                open && "bottom-[7px] -rotate-45"
              )}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-cream border-b border-ink/10"
          >
            <div className="container-edge flex flex-col gap-1 py-4">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink/85 hover:bg-ivory"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex gap-3 px-3">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full border border-burgundy/30 py-3 text-center text-sm font-semibold text-burgundy"
                >
                  WhatsApp
                </a>
                <Link
                  href="/#booking"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full bg-burgundy py-3 text-center text-sm font-semibold text-white"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
