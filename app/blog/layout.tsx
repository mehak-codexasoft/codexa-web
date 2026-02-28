import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Tech Insights & Industry Trends",
  description:
    "Read the latest insights on software development, AI, cloud computing, mobile apps, UI/UX design, and industry trends from the CodexaSoft engineering team.",
  openGraph: {
    title: "CodexaSoft Blog - Tech Insights & Industry Trends",
    description:
      "Expert articles on software development, AI/ML, cloud architecture, mobile development, and design from a team with 500+ projects delivered.",
    url: "https://codexasoft.com/blog",
  },
  alternates: {
    canonical: "https://codexasoft.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
