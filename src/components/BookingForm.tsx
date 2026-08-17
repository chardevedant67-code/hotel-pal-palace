"use client";

import { useState, type FormEvent } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { rooms } from "@/lib/images";
import { siteConfig, whatsappHref } from "@/lib/site-config";

const inputClasses =
  "w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-burgundy focus:ring-2 focus:ring-burgundy/15";
const labelClasses = "mb-1.5 block text-xs font-semibold tracking-wide text-ink-soft uppercase";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => (data.get(k) as string) || "";

    const message = [
      `Hello Hotel Pal Palace, I would like to send a booking enquiry.`,
      ``,
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Check-in: ${get("checkin") || "—"}`,
      `Check-out: ${get("checkout") || "—"}`,
      `Guests: ${get("guests") || "—"}`,
      `Room preference: ${get("room") || "—"}`,
      get("request") ? `Special request: ${get("request")}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section id="booking" className="bg-ivory py-20 md:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Booking"
          heading="Send a Booking Enquiry"
          copy="Share your dates and details — we'll confirm availability directly with you."
          align="center"
        />

        <Reveal delay={0.15} className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-ink/5 sm:p-9">
            {submitted ? (
              <div className="py-10 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-burgundy/10 text-2xl text-burgundy">
                  ✓
                </span>
                <h3 className="mt-5 font-serif text-2xl text-ink">
                  Thank you! Your booking enquiry has been received.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  We&apos;ve opened WhatsApp with your details pre-filled — send the
                  message and our team at Hotel Pal Palace will confirm availability
                  shortly. You can also reach us directly at{" "}
                  <a href={`tel:+${siteConfig.phones[0].intl}`} className="font-medium text-burgundy">
                    {siteConfig.phones[0].display}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-burgundy underline underline-offset-4"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="checkin" className={labelClasses}>
                      Check-in
                    </label>
                    <input id="checkin" name="checkin" type="date" required className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="checkout" className={labelClasses}>
                      Check-out
                    </label>
                    <input id="checkout" name="checkout" type="date" required className={inputClasses} />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="guests" className={labelClasses}>
                      Guests
                    </label>
                    <select id="guests" name="guests" required defaultValue="" className={inputClasses}>
                      <option value="" disabled>
                        Select guests
                      </option>
                      {["1 Guest", "2 Guests", "3 Guests", "4+ Guests"].map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="room" className={labelClasses}>
                      Room Preference
                    </label>
                    <select id="room" name="room" defaultValue="" className={inputClasses}>
                      <option value="">No preference</option>
                      {rooms.map((r) => (
                        <option key={r.slug} value={r.name}>
                          {r.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Full Name
                    </label>
                    <input id="name" name="name" type="text" required className={inputClasses} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClasses}>
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      pattern="[0-9+\s]{7,15}"
                      className={inputClasses}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="request" className={labelClasses}>
                    Special Request (optional)
                  </label>
                  <textarea
                    id="request"
                    name="request"
                    rows={3}
                    className={inputClasses}
                    placeholder="Anything we should know ahead of your stay?"
                  />
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    className="flex-1 rounded-full bg-burgundy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-burgundy-dark"
                  >
                    Send Booking Enquiry
                  </button>
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full border border-burgundy/30 px-6 py-3.5 text-center text-sm font-semibold text-burgundy transition-colors hover:bg-burgundy/5"
                  >
                    WhatsApp for Booking
                  </a>
                </div>
                <p className="text-center text-xs text-ink-soft">
                  This sends your enquiry via WhatsApp — availability is confirmed
                  directly by the hotel, not booked automatically.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
