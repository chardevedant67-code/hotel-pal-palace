import SectionHeading from "./SectionHeading";
import RoomCard from "./RoomCard";
import { rooms } from "@/lib/images";

export default function Rooms() {
  return (
    <section id="rooms" className="bg-ivory py-20 md:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Accommodation"
          heading="Stay Your Way"
          copy="Comfortable rooms designed for a relaxed and convenient stay in Nagpur."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room, i) => (
            <RoomCard key={room.slug} room={room} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
