import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coach Adegoke Olasukanmi | Basketball Coach & Official",
  description:
    "Professional basketball coach, basketball referee, and flag football official based in Nigeria. Elevating athletes and enforcing excellence on every court and field.",
  keywords: [
    "basketball coach",
    "basketball referee",
    "flag football referee",
    "sports official",
    "athletic training",
  ],
  authors: [{ name: "Coach Adegoke Olasukanmi" }],
  openGraph: {
    title: "Coach Adegoke Olasukanmi | Basketball Coach & Official",
    description:
      "Professional basketball coach, basketball referee, and flag football official.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
