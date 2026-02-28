import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "CodexaSoft Terms of Service — The terms and conditions governing the use of our website and services.",
  alternates: { canonical: "https://codexasoft.com/terms-of-service" },
};

export default function TermsPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <section className="relative pt-40 pb-20 md:pt-48">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/50 to-dark-900" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-gray-500 text-sm mb-12">
              Last updated: January 1, 2024
            </p>

            <div className="space-y-8 text-gray-400 leading-relaxed text-sm">
              <section>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using the CodexaSoft website and services, you accept and agree to be bound
                  by the terms and provisions of this agreement. If you do not agree to abide by these terms,
                  please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                  2. Services
                </h2>
                <p>
                  CodexaSoft provides custom software development services including web development, mobile app
                  development, UI/UX design, cloud solutions, AI/ML development, and DevOps services. The specific
                  scope, deliverables, and terms for each project are defined in individual project agreements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                  3. Intellectual Property
                </h2>
                <p className="mb-3">
                  Unless otherwise specified in a project agreement, all intellectual property rights in the
                  deliverables produced under a project agreement are transferred to the client upon full payment.
                </p>
                <p>
                  The CodexaSoft name, logo, and website content remain the property of CodexaSoft and may not
                  be used without our prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                  4. Confidentiality
                </h2>
                <p>
                  Both parties agree to maintain the confidentiality of any proprietary or confidential information
                  shared during the course of a project. This obligation extends beyond the termination of any
                  agreement. NDA agreements are available upon request.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                  5. Payment Terms
                </h2>
                <p>
                  Payment terms are defined in individual project agreements. Standard terms include a deposit
                  before work begins, with milestone-based payments throughout the project. Late payments may
                  incur additional charges and may result in work being paused.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                  6. Limitation of Liability
                </h2>
                <p>
                  CodexaSoft shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages, including but not limited to loss of profits, data, use, goodwill, or other intangible
                  losses resulting from the use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                  7. Termination
                </h2>
                <p>
                  Either party may terminate a project agreement with 30 days written notice. Upon termination,
                  the client is responsible for payment for all work completed up to the termination date. All
                  completed deliverables will be handed over to the client upon payment.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                  8. Contact
                </h2>
                <p>
                  For questions about these terms, contact us at{" "}
                  <a href="mailto:legal@codexasoft.com" className="text-primary-400 hover:underline">
                    legal@codexasoft.com
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
