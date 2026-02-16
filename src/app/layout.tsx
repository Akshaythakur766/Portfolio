import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/sections/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { ChatSection } from "@/sections/Chat/Chat";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
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
          `bg-gray-900 text-white antialiased font-sans `
        )}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            success: {
              style: { background: '#22c55e', color: '#fff' },
              iconTheme: { primary: 'white', secondary: '#22c55e' },
            },
            error: {
              style: { background: '#ef4444', color: '#fff' },
            },
          }}
        />
        <div className="relative z-10 flex flex-col min-h-screen font-sans antialiased text-white selection:bg-primary/30 selection:text-white">

          <Navigation />

          <main className="flex-grow">
            {children}
          </main>

          <Footer />
          <ChatSection />
        </div>
      </body>
    </html>
  );
}
