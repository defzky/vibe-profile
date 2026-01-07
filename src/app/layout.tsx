import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import GridBackground from "@/components/GridBackground";
import SmoothScroller from "@/components/SmoothScroller";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KINETIC // PROFILE",
  description: "A brutalist exploration of code and motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-accent selection:text-black`}
      >
        <SmoothScroller>
          <Cursor />
          <GridBackground />
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
        </SmoothScroller>
      </body>
    </html>
  );
}
