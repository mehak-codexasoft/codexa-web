import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Story, Mission & Values",
  description:
    "Learn about CodexaSoft — founded in 2016, we are a team of 50+ experts delivering innovative software solutions. 500+ projects, 200+ clients, 98% satisfaction rate.",
  openGraph: {
    title: "About CodexaSoft - Our Story, Mission & Values",
    description:
      "Founded in 2016, CodexaSoft has grown from 3 developers to 50+ experts. Learn about our mission, values, and the journey behind 500+ successful projects.",
    url: "https://codexasoft.com/about",
  },
  alternates: {
    canonical: "https://codexasoft.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
