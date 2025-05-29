import type { Metadata } from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "distr.",
  description:
    "Save time spent on calculations required to build the table, problify will count everything for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main
          className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-3xl mx-auto my-4 px-4`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div>{children}</div>
            <footer className="mt-8 pb-4 text-center text-sm text-gray-300">
              Problem solved by{" "}
              <a
                href="https://instagram.com/sbek22"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline text-blue-400"
              >
                Bek Slambek
              </a>
            </footer>
          </ThemeProvider>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
