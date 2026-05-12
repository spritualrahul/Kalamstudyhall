import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kalamstudyhall.com"),
  title: {
    default: "Kalam Study Hall - Learn, Create, Grow",
    template: "%s | Kalam Study Hall",
  },
  description:
    "A creative after-school enrichment space where children learn with confidence, communication, creativity, and joy.",
  keywords: [
    "classes Pune",
    "learning center for kids",
    "maths classes",
    "science classes",
    "creative workshops for kids",
    "Kalam Study Hall",
    "after school classes",
  ],
  icons: {
    icon: [
      { url: "/kalam-logo-transparent.png", type: "image/png" },
    ],
    apple: [
      { url: "/kalam-logo-transparent.png", type: "image/png" },
    ],
    shortcut: "/kalam-logo-transparent.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Kalam Study Hall",
    title: "Kalam Study Hall - Learn, Create, Grow",
    description:
      "Creative academic programs, communication development, weekend workshops, and meaningful learning experiences for young minds.",
    images: [
      {
        url: "/kalam-assets/mockup-1.jpg",
        width: 1379,
        height: 920,
        alt: "Kalam Study Hall website preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.10/dist/dotlottie-wc.js"
          type="module"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
