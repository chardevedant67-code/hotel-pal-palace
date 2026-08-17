import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  IconSnow,
  IconRoom,
  IconBed,
  IconSparkle,
  IconParking,
  IconCctv,
  IconStaff,
  IconPin,
} from "./icons";

const amenities = [
  { icon: IconSnow, label: "AC Rooms" },
  { icon: IconBed, label: "Comfortable Rooms" },
  { icon: IconRoom, label: "Premium Rooms" },
  { icon: IconSparkle, label: "Clean & Hygienic Rooms" },
  { icon: IconParking, label: "Free Parking" },
  { icon: IconCctv, label: "CCTV Security" },
  { icon: IconStaff, label: "Friendly Staff" },
  { icon: IconPin, label: "Prime Location" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-burgundy py-20 text-white md:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Amenities"
          heading="Everything You Need for a Comfortable Stay."
          align="center"
          light
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {amenities.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.05} className="flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
                <a.icon className="h-6 w-6 text-gold-soft" />
              </span>
              <span className="mt-4 text-sm font-medium text-white/90">{a.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
