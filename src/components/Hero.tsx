"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";
import { whatsappHref } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92svh] w-full items-end overflow-hidden md:min-h-screen">
      <div className="absolute inset-0">
        <Image
          src={images.heroRoom.src}
          alt={images.heroRoom.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />
      </div>

      <div className="container-edge relative z-10 w-full pb-14 pt-40 sm:pb-20 md:pb-24">
        <div className="max-w-xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="eyebrow text-gold-soft"
          >
            Hotel Pal Palace · Nagpur
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.12}
            className="mt-5 font-serif text-[2.6rem] leading-[1.08] text-white sm:text-6xl md:text-7xl"
          >
            Your Comfort.
            <br />
            Our Priority.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.24}
            className="mt-6 max-w-md text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Premium rooms, comfortable stays and a prime location in Nagpur.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.36}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#booking"
              className="rounded-full bg-burgundy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-burgundy-dark"
            >
              Book Your Stay
            </a>
            <a
              href="#rooms"
              className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Explore Rooms
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              WhatsApp Us
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.48}
            className="mt-8 text-xs font-medium tracking-[0.18em] text-white/70 uppercase"
          >
            Premium Rooms · AC Rooms · Prime Location
          </motion.p>
        </div>
      </div>
    </section>
  );
}
