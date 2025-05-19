import "@/styles/globals.css";
import React from "react";
import { Metadata } from "next";
//import { DevtoolsProvider } from 'creatr-devtools';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Chef Salang Yanger | Award-Winning Naga Cuisine",
    template: "%s | Chef Salang Yanger",
  },
  description: "Chef Salang Yanger is an award-winning chef specializing in authentic Naga cuisine. Winner of Naga Chef Season 3 and featured at Hornbill Festival 2015.",
  keywords: ["Chef Salang Yanger", "Naga cuisine", "Naga food", "Naga Chef", "award-winning chef", "catering", "traditional Naga food", "Hornbill Festival"],
  authors: [{ name: "Chef Salang Yanger" }],
  creator: "Chef Salang Yanger",
  publisher: "KAKI",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
      <body className="min-h-screen flex flex-col">
        
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        
      </body>
    </html>
  );
}
