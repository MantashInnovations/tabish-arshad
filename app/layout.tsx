import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import ScrollAnimations from "@/components/ScrollAnimations";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Tabish Arshad | 3D Portfolio",
  description: "Exploring the Digital Universe & Building Immersive Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Background />
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
