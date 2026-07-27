import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://fortivex.ai";
const TITLE = "Fortivex AI — Intelligence. Automated. Empowered.";
const DESCRIPTION =
  "Fortivex AI builds intelligent products, platforms, and AI-powered automation systems that help businesses operate, scale, and evolve.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Fortivex AI",
  },
  description: DESCRIPTION,
  applicationName: "Fortivex AI",
  keywords: [
    "Fortivex AI",
    "artificial intelligence company",
    "AI automation",
    "business automation",
    "AI agents",
    "custom software engineering",
    "digital transformation",
    "AI product development",
    "Bengaluru technology company",
  ],
  authors: [{ name: "Fortivex AI Private Limited" }],
  creator: "Fortivex AI Private Limited",
  publisher: "Fortivex AI Private Limited",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Fortivex AI",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fortivex AI — Intelligence. Automated. Empowered.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060a16" },
    { media: "(prefers-color-scheme: light)", color: "#fafbfc" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
