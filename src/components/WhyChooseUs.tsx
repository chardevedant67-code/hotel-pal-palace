import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  IconRoom,
  IconSnow,
  IconPin,
  IconSparkle,
  IconCheckShield,
  IconUsers,
} from "./icons";

const features = [
  {
    icon: IconRoom,
    title: "Premium Rooms",
    copy: "Comfortable and thoughtfully presented rooms for a pleasant stay.",
  },
  {
    icon: IconSnow,
    title: "Air-Conditioned Comfort",
    copy: "AC rooms designed for a comfortable stay.",
  },
  {
    icon: IconPin,
    title: "Prime Location",
    copy: "Located at Central Avenue Road, Nagpur.",
  },
  {
    icon: IconSparkle,
    title: "Clean & Comfortable",
    copy: "Focus on a clean, comfortable and welcoming stay experience.",
  },
  {
    icon: IconCheckShield,
    title: "Convenient Stay",
    copy: "A practical choice for guests visiting Nagpur.",
  },
  {
    icon: IconUsers,
    title: "Guest-Friendly Experience",
    copy: "Keep the stay simple, comfortable and convenient.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="container-edge py-20 md:py-28">
      <SectionHeading
        eyebrow="The Pal Palace Standard"
        heading="Why Stay at Hotel Pal Palace?"
        align="center"
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06} className="text-center sm:text-left">
            <f.icon className="mx-auto h-7 w-7 text-gold sm:mx-0" />
            <h3 className="mt-4 font-serif text-lg text-ink">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
