import Hero from "@/components/Hero";
import HotelIntro from "@/components/HotelIntro";
import Rooms from "@/components/Rooms";
import WhyChooseUs from "@/components/WhyChooseUs";
import Amenities from "@/components/Amenities";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import InstagramSection from "@/components/InstagramSection";
import Location from "@/components/Location";
import BookingForm from "@/components/BookingForm";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HotelIntro />
      <Rooms />
      <WhyChooseUs />
      <Amenities />
      <Experience />
      <Gallery />
      <InstagramSection />
      <Location />
      <BookingForm />
      <FinalCTA />
    </>
  );
}
