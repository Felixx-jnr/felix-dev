import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono, Roboto } from "next/font/google";
import Cursor from "@/components/cursor/Cursor";
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
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
        h-full
        antialiased
      `}
    >
      <body className="flex flex-col min-h-full">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
