import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/sections/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { ChatSection } from "@/sections/Chat/Chat";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akshaythakur.dev"), // Replace with actual domain
  title: {
    default: "Akshay Thakur | Frontend Architect & AI Engineer",
    template: "%s | Akshay Thakur",
  },
  description:
    "Portfolio of Akshay Thakur, a Frontend Architect specializing in React, Next.js, and building high-performance, AI-driven web applications.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "AI Engineer",
    "Tailwind CSS",
    "Web Performance",
    "Software Architect",
  ],
  authors: [{ name: "Akshay Thakur", url: "https://github.com/Akshaythakur766" }],
  creator: "Akshay Thakur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshaythakur.dev",
    title: "Akshay Thakur | Frontend Architect",
    description:
      "Crafting digital experiences with a focus on performance, accessibility, and user-centric design.",
    siteName: "Akshay Thakur Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "Akshay Thakur Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Thakur | Frontend Architect",
    description: "Building the future of the web with Next.js and AI.",
    images: ["/og-image.png"],
    creator: "@akshay_thakur_03",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        <JsonLd />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            success: {
              style: { background: "#22c55e", color: "#fff" },
              iconTheme: { primary: "white", secondary: "#22c55e" },
            },
            error: {
              style: { background: "#ef4444", color: "#fff" },
            },
          }}
        />
        <div className="relative z-10 flex flex-col min-h-screen font-sans antialiased text-white selection:bg-primary/30 selection:text-white">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ChatSection />
        </div>
      </body>
    </html>
  );
}
