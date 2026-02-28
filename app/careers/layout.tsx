import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join Our Team",
  description:
    "Join CodexaSoft! Explore open positions in software development, design, AI/ML, cloud engineering, and more. Remote-friendly, competitive pay, and amazing culture.",
  openGraph: {
    title: "Careers at CodexaSoft - Join Our Team",
    description:
      "We're hiring! Join 50+ talented professionals building cutting-edge software. Remote-friendly roles with competitive compensation.",
    url: "https://codexasoft.com/careers",
  },
  alternates: {
    canonical: "https://codexasoft.com/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
