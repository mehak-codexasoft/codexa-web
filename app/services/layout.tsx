import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Web, Mobile, AI & Cloud Solutions",
  description:
    "CodexaSoft offers web development, mobile app development, UI/UX design, cloud solutions, AI & machine learning, and DevOps services. End-to-end software solutions.",
  openGraph: {
    title: "Our Services - Web, Mobile, AI & Cloud Solutions",
    description:
      "End-to-end software solutions: web development, mobile apps, UI/UX design, cloud architecture, AI/ML, and DevOps automation. Built with React, Next.js, Flutter & more.",
    url: "https://codexasoft.com/services",
  },
  alternates: {
    canonical: "https://codexasoft.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
