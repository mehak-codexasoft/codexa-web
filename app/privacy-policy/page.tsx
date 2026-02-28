import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "CodexaSoft Privacy Policy — Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://codexasoft.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <section className="relative pt-40 pb-20 md:pt-48">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/50 to-dark-900" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-gray-500 text-sm mb-12">
              Last updated: January 1, 2024
            </p>

            <div className="space-y-8 text-gray-400 leading-relaxed text-sm">
              <section>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                  1. Information We Collect
                </h2>
                <p className="mb-3">
                  We collect information you provide directly to us, such as when you fill out a contact form,
                  request a consultation, subscribe to our newsletter, or communicate with us via email. This
                  information may include your name, email address, company name, phone number, and project details.
                </p>
                <p>
                  We also automatically collect certain information when you visit our website, including your IP address,
                  browser type, operating system, referring URLs, and information about how you interact with our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                  2. How We Use Your Information
                </h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Respond to your inquiries and provide requested services</li>
                  <li>Send you project proposals and communications</li>
                  <li>Send newsletters and marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                  3. Information Sharing
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information with trusted service providers who assist us in operating our website and conducting
                  our business, so long as those parties agree to keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                  4. Data Security
                </h2>
                <p>
                  We implement industry-standard security measures to protect your personal information. However,
                  no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
                  guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                  5. Cookies
                </h2>
                <p>
                  Our website uses cookies to enhance your browsing experience. You can choose to disable cookies
                  through your browser settings, though this may affect the functionality of certain features on
                  our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                  6. Your Rights
                </h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications at any time</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                  7. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@codexasoft.com" className="text-primary-400 hover:underline">
                    privacy@codexasoft.com
                  </a>{" "}
                  or at 123 Tech Street, Silicon Valley, CA 94025.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
