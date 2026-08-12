import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Process Servers in Central Jersey`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "Efficient, reliable, and friendly process serving at your fingertips. Get your legal documents served hassle-free with Central Jersey Process Service.",
  icons: {
    icon: IMAGES.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
