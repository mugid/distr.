import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "distr. | distribution tables and graphs",
  description: "Build distribution tables and graphs with distr.",
  openGraph: {
    title: "distr. | distribution tables and graphs",
    description: "Build distribution tables and graphs with distr.",
    url: 'https://distr.vercel.app',
    siteName: 'distr. ',
    images: [
      {
        url: 'https://distr.vercel.app/image.png',
        width: 800,
        height: 600,
        alt: 'Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "distr. | distribution tables and graphs",
    description: "Build distribution tables and graphs with distr.",
    images: ['https://distr.vercel.app/image.png'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
          <Analytics />
      </body>
    </html>
  );
}
