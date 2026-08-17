export const siteConfig = {
  name: "Hotel Pal Palace",
  shortName: "Pal Palace",
  tagline: "Your Comfort. Our Priority.",
  positioning: "Premium rooms and comfortable stays in a prime Nagpur location.",
  description:
    "Hotel Pal Palace, Nagpur offers premium and comfortable rooms at 25, Gitanjali Square, Central Avenue Road, Nagpur. Enquire now for your stay.",
  url: "https://www.hotelpalpalace.com",
  locale: "en_IN",

  address: {
    line1: "25, Gitanjali Square",
    line2: "Central Avenue Road",
    city: "Nagpur",
    state: "Maharashtra",
    postalCode: "440018",
    country: "India",
    full: "25, Gitanjali Square, Central Avenue Road, Nagpur, Maharashtra 440018",
  },

  phones: [
    { display: "72194 58896", raw: "7219458896", intl: "917219458896" },
    { display: "85549 37424", raw: "8554937424", intl: "918554937424" },
  ],

  whatsapp: {
    number: "917219458896",
    defaultMessage:
      "Hello Hotel Pal Palace, I would like to enquire about room availability and booking. Please share the available options.",
  },

  instagram: {
    handle: "@hotel_pal_palace",
    url: "https://www.instagram.com/hotel_pal_palace/",
  },

  maps: {
    embedSrc:
      "https://www.google.com/maps?q=" +
      encodeURIComponent(
        "25 Gitanjali Square, Central Avenue Road, Nagpur, Maharashtra 440018"
      ) +
      "&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent(
        "25 Gitanjali Square, Central Avenue Road, Nagpur, Maharashtra 440018"
      ),
  },

  nav: [
    { label: "Home", href: "/#home" },
    { label: "Rooms", href: "/#rooms" },
    { label: "Amenities", href: "/#amenities" },
    { label: "Gallery", href: "/#gallery" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
};

export function whatsappHref(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}

export function callHref(intl: string) {
  return `tel:+${intl}`;
}

export type SiteConfig = typeof siteConfig;
