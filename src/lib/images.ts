/**
 * Curated stand-in photography for Hotel Pal Palace.
 *
 * These are licensed stock photographs (Unsplash) selected to match the hotel's
 * real interiors as closely as possible — they are placeholders only. Swap each
 * `src` for the hotel's own photography as it becomes available; nothing else
 * in the codebase needs to change since every component reads from this file.
 */

export type HotelImage = {
  src: string;
  alt: string;
};

export const images = {
  heroRoom: {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
    alt: "Premium hotel room at Hotel Pal Palace with a comfortable bed and warm evening lighting",
  },
  introInterior: {
    src: "https://images.unsplash.com/photo-1587985064135-0366536eab42",
    alt: "Elegant hotel room interior with warm ambient lighting at Hotel Pal Palace",
  },
  experienceWide: {
    src: "https://images.unsplash.com/photo-1519449556851-5720b33024e7",
    alt: "Guest enjoying a comfortable stay by the window in a premium room",
  },
  finalCta: {
    src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
    alt: "Comfortable double room with soft evening lighting at Hotel Pal Palace",
  },
  lobby: {
    src: "https://images.unsplash.com/photo-1621293954908-907159247fc8",
    alt: "Hotel Pal Palace lobby seating area",
  },
} satisfies Record<string, HotelImage>;

export type RoomCategory = {
  slug: string;
  name: string;
  description: string;
  highlights: string[];
  amenities: string[];
  images: HotelImage[];
};

export const rooms: RoomCategory[] = [
  {
    slug: "premium-room",
    name: "Premium Room",
    description:
      "Comfortable and thoughtfully presented rooms with a calm, contemporary interior — a pleasant base for your stay in Nagpur.",
    highlights: ["Premium interiors", "Comfortable bedding", "Air-conditioned", "Clean & hygienic"],
    amenities: ["Air Conditioning", "Free Parking", "CCTV Security", "Friendly Staff"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
        alt: "Premium Room at Hotel Pal Palace with crisp white and gold-toned bedding",
      },
      {
        src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
        alt: "Bedside detail in the Premium Room showing warm lamp lighting",
      },
      {
        src: "https://images.unsplash.com/photo-1590490359683-658d3d23f972",
        alt: "Premium Room work desk and seating area",
      },
    ],
  },
  {
    slug: "ac-room",
    name: "AC Room",
    description:
      "Air-conditioned rooms designed for a comfortable stay, with an elegant, understated interior suited to both leisure and business travel.",
    highlights: ["Air-conditioned comfort", "Elegant furnishings", "Quiet & restful", "Prime location"],
    amenities: ["Air Conditioning", "Free Parking", "CCTV Security", "Friendly Staff"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
        alt: "AC Room at Hotel Pal Palace with a comfortable seating nook",
      },
      {
        src: "https://images.unsplash.com/photo-1521783988139-89397d761dce",
        alt: "AC Room headboard and bedside detail",
      },
      {
        src: "https://images.unsplash.com/photo-1591088398332-8a7791972843",
        alt: "AC Room seating corner with soft natural light",
      },
    ],
  },
  {
    slug: "comfortable-stay",
    name: "Comfortable Stay",
    description:
      "A practical, well-appointed room designed around comfort and cleanliness — a convenient choice for guests visiting Nagpur.",
    highlights: ["Comfortable bedding", "Clean & hygienic", "Convenient stay", "Guest-friendly"],
    amenities: ["Air Conditioning", "Free Parking", "CCTV Security", "Friendly Staff"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
        alt: "Comfortable Stay room with dark wood accents at Hotel Pal Palace",
      },
      {
        src: "https://images.unsplash.com/photo-1631049035182-249067d7618e",
        alt: "Comfortable Stay room wide view with mirrored wardrobe",
      },
      {
        src: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c",
        alt: "Clean, modern bathroom vanity in the Comfortable Stay room",
      },
    ],
  },
  {
    slug: "family-larger-room",
    name: "Family / Larger Room",
    description:
      "A more spacious room for families or small groups, with twin beds and a relaxed, air-conditioned interior.",
    highlights: ["Extra space", "Twin bed layout", "Air-conditioned", "Suited to families"],
    amenities: ["Air Conditioning", "Free Parking", "CCTV Security", "Friendly Staff"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061",
        alt: "Family room at Hotel Pal Palace with twin beds and air conditioning",
      },
      {
        src: "https://images.unsplash.com/photo-1560448075-bb485b067938",
        alt: "Clean en-suite bathroom in the Family / Larger Room",
      },
    ],
  },
];

export const galleryImages: (HotelImage & { category: string })[] = [
  { ...rooms[0].images[0], category: "Rooms" },
  { src: "https://images.unsplash.com/photo-1587985064135-0366536eab42", alt: "Warm, elegant room interior with gold-toned lighting", category: "Interiors" },
  { ...rooms[3].images[0], category: "Rooms" },
  { src: "https://images.unsplash.com/photo-1621293954908-907159247fc8", alt: "Hotel Pal Palace lobby seating and interior detail", category: "Hotel" },
  { ...rooms[1].images[0], category: "Rooms" },
  { src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af", alt: "Bedside lighting detail, part of the comfort-focused room design", category: "Details" },
  { src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32", alt: "Premium room with warm evening lighting", category: "Comfort" },
  { ...rooms[2].images[1], category: "Rooms" },
  { src: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8", alt: "Plant-filled interior courtyard at Hotel Pal Palace", category: "Interiors" },
  { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a", alt: "Clean, well-appointed bathroom detail", category: "Details" },
  { ...rooms[1].images[1], category: "Rooms" },
  { src: "https://images.unsplash.com/photo-1519449556851-5720b33024e7", alt: "A quiet, comfortable moment in a Hotel Pal Palace room", category: "Comfort" },
];

export const instagramShowcase: HotelImage[] = [
  { src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39", alt: "Room styling inspired by Hotel Pal Palace's Instagram presence" },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427", alt: "Interior detail inspired by Hotel Pal Palace's Instagram presence" },
  { src: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061", alt: "Room layout inspired by Hotel Pal Palace's Instagram presence" },
  { src: "https://images.unsplash.com/photo-1587985064135-0366536eab42", alt: "Warm lighting styling inspired by Hotel Pal Palace's Instagram presence" },
  { src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a", alt: "Room interior inspired by Hotel Pal Palace's Instagram presence" },
  { src: "https://images.unsplash.com/photo-1621293954908-907159247fc8", alt: "Lobby styling inspired by Hotel Pal Palace's Instagram presence" },
];
