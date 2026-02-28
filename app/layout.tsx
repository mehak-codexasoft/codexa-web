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
  metadataBase: new URL("https://codexasoft.com"),
  title: {
    default: "CodexaSoft - Innovative Software Solutions | Web, Mobile & AI Development",
    template: "%s | CodexaSoft",
  },
  description:
    "CodexaSoft delivers cutting-edge software development, web applications, mobile apps, AI solutions, and cloud services. 500+ projects delivered for 200+ clients worldwide.",
  keywords: [
    "software development company",
    "web development",
    "mobile app development",
    "AI solutions",
    "cloud services",
    "UI/UX design",
    "DevOps",
    "custom software",
    "CodexaSoft",
    "React development",
    "Next.js development",
    "Flutter app development",
  ],
  authors: [{ name: "CodexaSoft", url: "https://codexasoft.com" }],
  creator: "CodexaSoft",
  publisher: "CodexaSoft",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codexasoft.com",
    siteName: "CodexaSoft",
    title: "CodexaSoft - Innovative Software Solutions",
    description:
      "We build cutting-edge web apps, mobile apps, AI solutions & cloud services. 500+ projects delivered, 200+ happy clients worldwide.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodexaSoft - Innovative Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodexaSoft - Innovative Software Solutions",
    description:
      "We build cutting-edge web apps, mobile apps, AI solutions & cloud services. 500+ projects delivered, 200+ happy clients worldwide.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://codexasoft.com",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://codexasoft.com/#organization",
      name: "CodexaSoft",
      url: "https://codexasoft.com",
      logo: {
        "@type": "ImageObject",
        url: "https://codexasoft.com/images/logo.png",
      },
      description:
        "CodexaSoft delivers cutting-edge software development, web applications, mobile apps, AI solutions, and cloud services to transform your business.",
      foundingDate: "2016",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 50,
      },
      sameAs: [
        "https://www.linkedin.com/company/codexasoft",
        "https://github.com/codexasoft",
        "https://twitter.com/codexasoft",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Tech Street",
        addressLocality: "Silicon Valley",
        addressRegion: "CA",
        postalCode: "94025",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-234-567-890",
        contactType: "sales",
        email: "hello@codexasoft.com",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://codexasoft.com/#website",
      url: "https://codexasoft.com",
      name: "CodexaSoft",
      publisher: { "@id": "https://codexasoft.com/#organization" },
    },
  ],
};

import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import ChatWidget from "@/components/ChatWidget";
import CookieConsent from "@/components/CookieConsent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}
      >
        <ScrollProgress />
        {children}
        <BackToTop />
        <ChatWidget />
        <CookieConsent />
      </body>
    </html>
  );
}
