# Hotel Pal Palace — Website

A premium, mobile-first website for Hotel Pal Palace, Nagpur. Built with
Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Almost everything hotel-specific lives in two files:

- **`src/lib/site-config.ts`** — hotel name, address, phone numbers,
  WhatsApp number/message, Instagram link, nav links, Google Maps query.
- **`src/lib/images.ts`** — every photo used on the site (hero, rooms,
  gallery, Instagram showcase) plus each room category's name,
  description, highlights and amenities.

### Replacing the placeholder photography

The photos currently in `src/lib/images.ts` are **licensed stock images**
(hotlinked from Unsplash), chosen to resemble Hotel Pal Palace's real
interiors as closely as possible. They are stand-ins, not the hotel's
actual photography — this project has no access to the hotel's
Instagram media or logo artwork.

To swap in real photos:

1. Add the image file to `public/images/`.
2. In `src/lib/images.ts`, change the relevant `src` value to
   `"/images/your-file.jpg"` and update the `alt` text.
3. No other file needs to change — every component reads from this file.

### Replacing the logo

`src/components/Logo.tsx` is a text-based wordmark standing in for the
hotel's real logo mark. Once artwork is available, replace its contents
with an `<Image>` of the logo file.

### Adding/removing a room

Edit the `rooms` array in `src/lib/images.ts`. Each room automatically
gets a card on the homepage and a detail page at `/rooms/[slug]`.

### Map / directions

`siteConfig.maps` builds a Google Maps embed and a "Get Directions" link
from the hotel's street address. If Hotel Pal Palace has (or later
claims) a verified Google Business listing, swap this for that listing's
place link/embed for a more precise, business-name pin.

## Production build

```bash
npm run build
npm start
```
