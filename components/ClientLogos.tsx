"use client";

import { motion } from "framer-motion";

const clients = [
  "Capital Metrics",
  "MediBridge",
  "EduLearn Global",
  "SwiftLogistics",
  "RetailMax",
  "BlockSecure",
  "TalentBridge",
  "QuickBite",
  "RealEstate Pro",
  "InnoHealth",
  "CloudScale",
  "EduTech Global",
];

export default function ClientLogos() {
  return (
    <section className="relative py-16 border-y border-white/[0.05] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-primary-500/[0.02] to-dark-900" />

      <div className="container-custom relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mb-10 uppercase tracking-wider font-medium"
        >
          Trusted by 200+ companies worldwide
        </motion.p>

        {/* Scrolling logos - Row 1 */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-dark-900 via-dark-900/80 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-8 animate-scroll">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex-shrink-0 px-8 py-4 rounded-xl glass-card flex items-center justify-center min-w-[180px] hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-teal-500/20 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-teal-500/30 transition-all">
                    <span className="text-sm font-bold text-primary-400">
                      {client.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors whitespace-nowrap">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
