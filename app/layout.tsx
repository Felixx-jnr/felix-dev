import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono, Roboto } from "next/font/google";

import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Felix Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${inter.variable}
        ${geistMono.variable}
        ${spaceGrotesk.variable}
        ${roboto.variable}
        scroll-smooth
        antialiased
      `}
    >
      <body className="flex flex-col dark">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
