import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - Meet the Brilliant Minds",
  description:
    "Meet the 50+ talented developers, designers, and strategists behind CodexaSoft. A diverse team from 8+ countries with 15+ certifications driving innovation.",
  openGraph: {
    title: "Our Team - The Brilliant Minds Behind CodexaSoft",
    description:
      "A diverse team of 50+ passionate professionals from 8+ countries, united by a shared mission to build exceptional software solutions.",
    url: "https://codexasoft.com/team",
  },
  alternates: {
    canonical: "https://codexasoft.com/team",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
