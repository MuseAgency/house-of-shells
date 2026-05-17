import type { Metadata } from "next";
import { Cormorant_Garamond, Dancing_Script, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "House of Shells — Themed shell art, handpainted on canvas",
    template: "%s | House of Shells",
  },
  description:
    "Handpainted themed shell art on canvas. Where every shell tells a story. Custom commissions and collectible coastal pieces — launching soon.",
  metadataBase: new URL("https://houseofshells.nl"),
  openGraph: {
    siteName: "House of Shells",
    locale: "en_US",
    type: "website",
    title: "House of Shells — Themed shell art, handpainted on canvas",
    description:
      "Handpainted themed shell art on canvas. Where every shell tells a story.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dancing.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
