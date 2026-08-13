import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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

// Update with your actual production domain
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://felixx-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // Title Template: "Page Title | Felix — Frontend Developer"
  title: {
    default: "Felix | Frontend Developer & Web Architect",
    template: "%s | Felix Portfolio",
  },
  description:
    "Felix portfolio, a Frontend Developer building high-performance and visually stunning web and mobile applications with React, Next.js, and React Native.",

  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Web Developer Portfolio",
    "Mobile App Developer",
  ],

  authors: [{ name: "Felix" }],
  creator: "Felix",

  // Canonical URL configuration
  alternates: {
    canonical: "/",
  },

  // Search Engine Robot Directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (For Facebook, LinkedIn, Discord previews)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Felix | Frontend Developer Portfolio",
    description:
      "Felix portfolio, a Frontend Developer building high-performance and visually stunning web and mobile applications with React, Next.js, and React Native.",
    siteName: "Felix Portfolio",
    images: [
      {
        url: "/front.webp",
        width: 1356,
        height: 592,
        alt: "Felix - Frontend Developer Portfolio",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Felix | Frontend Developer Portfolio",
    description:
      "Felix portfolio, a Frontend Developer building high-performance and visually stunning web and mobile applications with React, Next.js, and React Native.",
    images: ["/front.webp"],
    creator: "@Felixx_jnr",
  },

  // Favicons / Icons`
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      className={`
        ${inter.variable}
        ${spaceGrotesk.variable}
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
