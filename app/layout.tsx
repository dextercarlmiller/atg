import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Managed IT Services | Applied Technology Group | Fort Wayne, IN",
    template: "%s | Applied Technology Group",
  },
  description:
    "ATG has provided managed IT, cybersecurity, VoIP, and security solutions to Midwest businesses since 1996. Schedule a free assessment today.",
  metadataBase: new URL("https://atgfw.com"),
  openGraph: {
    siteName: "Applied Technology Group",
    locale: "en_US",
    type: "website",
    title: "Managed IT Services | Applied Technology Group | Fort Wayne, IN",
    description:
      "ATG has provided managed IT, cybersecurity, VoIP, and security solutions to Midwest businesses since 1996. Schedule a free assessment today.",
    url: "https://atgfw.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Applied Technology Group | Managed IT, Cybersecurity & Technology Solutions",
    description:
      "Fort Wayne's trusted IT partner since 1996. Managed IT, cybersecurity, VoIP, AI, and physical security for Midwest businesses.",
  },
  alternates: {
    canonical: "https://atgfw.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
