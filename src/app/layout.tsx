import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Problify",
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
