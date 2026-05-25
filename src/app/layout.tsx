import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "blajar.com — Platform Produk Digital UMKM Indonesia",
  description: "Toko digital terpercaya untuk SOP dan panduan operasional UMKM Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${playfair.variable} ${jakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
