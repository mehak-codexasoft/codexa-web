import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "CodexaSoft - Innovative Software Solutions",
  description:
    "CodexaSoft delivers cutting-edge software development, web applications, mobile apps, AI solutions, and cloud services to transform your business.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "AI solutions",
    "cloud services",
    "CodexaSoft",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
