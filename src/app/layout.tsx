import "@/styles/globals.css";
import React from "react";
import { Metadata, Viewport } from "next";
import Script from "next/script";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Chef Salang Yanger | Award-Winning Naga Cuisine",
    template: "%s | Chef Salang Yanger",
  },
  description:
    "Chef Salang Yanger is an award-winning chef specializing in authentic Naga cuisine. Winner of Naga Chef Season 3 and featured at Hornbill Festival 2015.",
  keywords: [
    "Chef Salang Yanger",
    "Naga cuisine",
    "Naga food",
    "Naga Chef",
    "award-winning chef",
    "catering",
    "traditional Naga food",
    "Hornbill Festival",
  ],
  authors: [{ name: "Chef Salang Yanger" }],
  creator: "Chef Salang Yanger",
  publisher: "KAKI",
  icons: {
    icon: [
      { url: "/images/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.png", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [
      { url: "/images/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Chef Salang Yanger",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CE2Q8DR6QH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CE2Q8DR6QH');
          `}
        </Script>
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
