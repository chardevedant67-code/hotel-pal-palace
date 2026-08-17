import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import MobileStickyBar from "@/components/MobileStickyBar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Hotel Pal Palace Nagpur | Premium Rooms & Comfortable Stay",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Hotel Pal Palace",
    "Hotel Pal Palace Nagpur",
    "hotel in Nagpur",
    "hotel near Central Avenue Nagpur",
    "hotel near Gitanjali Square",
    "AC rooms in Nagpur",
    "comfortable hotel in Nagpur",
    "rooms in Nagpur",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Hotel Pal Palace Nagpur | Premium Rooms & Comfortable Stay",
    description: siteConfig.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Hotel Pal Palace — premium room interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Pal Palace Nagpur | Premium Rooms & Comfortable Stay",
    description: siteConfig.description,
    images: ["https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&h=630&fit=crop"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: `+${siteConfig.phones[0].intl}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postalCode,
    addressCountry: "IN",
  },
  sameAs: [siteConfig.instagram.url],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppFloatButton />
        <MobileStickyBar />
      </body>
    </html>
  );
}
