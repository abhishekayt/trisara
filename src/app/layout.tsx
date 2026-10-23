import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trisarajewellers.com"),
  title: "Trisara Jewellers | Timeless Elegance — By Soni Bhanwarlal Somdev Arya",
  description:
    "Trisara is a luxury jewellery house celebrating the grandeur of India's royal heritage through timeless craftsmanship. BIS Hallmark Certified 100% hallmarked gold, polki, and temple jewellery.",
  keywords: [
    "Trisara Jewellers",
    "Jodhpur Jewellers",
    "Royal Indian Jewellery",
    "Heritage Polki",
    "Kundan Jewellery",
    "Temple Jewellery",
    "Rahul Soni",
    "Soni Bhanwarlal Somdev Arya",
    "Hallmarked Gold",
  ],
  authors: [{ name: "Trisara Jewellers" }],
  openGraph: {
    title: "Trisara Jewellers | Timeless Elegance",
    description: "Gold for Generations. Where every jewel carries the essence of timeless beauty.",
    url: "https://www.trisarajewellers.com",
    siteName: "Trisara Jewellers",
    images: [
      {
        url: "/images/hero_model.jpg",
        width: 1200,
        height: 630,
        alt: "Trisara Jewellers Luxury Heritage Collection",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#1e140f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#1e140f] text-[#ece2d0] font-sans antialiased selection:bg-[#c5a059] selection:text-[#1e140f] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
