import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Consultation",
  description:
    "Get in touch with CodexaSoft for your next software project. Free consultation, 24-hour response time. Email: hello@codexasoft.com | Phone: +1 (234) 567-890.",
  openGraph: {
    title: "Contact CodexaSoft - Let's Build Something Amazing",
    description:
      "Have a project in mind? Get a free consultation with our experts. We respond within 24 hours. Web, mobile, AI & cloud solutions.",
    url: "https://codexasoft.com/contact",
  },
  alternates: {
    canonical: "https://codexasoft.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
