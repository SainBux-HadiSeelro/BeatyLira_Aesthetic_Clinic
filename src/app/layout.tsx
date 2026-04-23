import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import NewsletterBar from "@/components/NewsletterBar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BeautyLira — Luxury Aesthetic Clinic",
    template: "%s | BeautyLira",
  },
  description:
    "BeautyLira is a premier luxury aesthetic clinic on Harley Street offering HIFU skin tightening, laser treatments, Endo Fibre Lift, and dermal fillers. Elevate your natural beauty with precision-driven, medically certified treatments.",
  keywords: [
    "aesthetic clinic",
    "HIFU",
    "dermal fillers",
    "laser treatment",
    "Endo Fibre Lift",
    "luxury beauty",
    "Harley Street clinic",
    "non-surgical facelift",
    "skin tightening",
  ],
  authors: [{ name: "BeautyLira" }],
  creator: "BeautyLira",
  metadataBase: new URL("https://beautylira.com"),
  openGraph: {
    title: "BeautyLira — Luxury Aesthetic Clinic",
    description:
      "Precision-driven treatments. Refined beauty. Natural enhancement. Harley Street's premier luxury aesthetic clinic.",
    url: "https://beautylira.com",
    siteName: "BeautyLira",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "BeautyLira Luxury Aesthetic Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeautyLira — Luxury Aesthetic Clinic",
    description: "Precision-driven treatments. Refined beauty. Natural enhancement.",
    images: ["https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#F9F4EF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <NewsletterBar />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
