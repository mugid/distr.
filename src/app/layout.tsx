import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  description: "Build distribution tables and graphs with distr.",
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
          className={`${geistSans.variable} ${geistMono.variable} antialiased my-4`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div>{children}</div>
            <footer className="mt-8 pb-4 text-center text-sm text-gray-300">
              problem solved by{" "}
              <a
                href="https://instagram.com/sbek22"
                target="_blank"
                rel="noopener noreferrer"
                className="italic font-bold hover:underline text-blue-400"
              >
                bek slambek
              </a>
            </footer>
          </ThemeProvider>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
