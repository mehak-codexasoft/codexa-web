import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Our Work & Case Studies",
  description:
    "Explore CodexaSoft's portfolio of 500+ successful projects including web apps, mobile apps, SaaS platforms, e-commerce solutions, and AI/ML projects across industries.",
  openGraph: {
    title: "Portfolio - Projects That Speak Volumes",
    description:
      "From FinTech dashboards to healthcare platforms — explore our portfolio of successful projects across web, mobile, SaaS, e-commerce, and AI/ML.",
    url: "https://codexasoft.com/portfolio",
  },
  alternates: {
    canonical: "https://codexasoft.com/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
