"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-teal-500/20 to-accent-500/20" />
          <div className="absolute inset-0 bg-dark-800/80 backdrop-blur-3xl" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

          {/* Glow Orbs */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary-500/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-teal-500/20 rounded-full blur-[100px]" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-gray-300">
                Let&apos;s Build Together
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 max-w-3xl mx-auto leading-tight">
              Ready to Build Something{" "}
              <span className="gradient-text">Amazing?</span>
            </h2>

            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Let&apos;s discuss your project and discover how CodexaSoft can
              help transform your ideas into powerful digital solutions.
            </p>

            {/* CTA Form */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-6 py-4 rounded-full bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
              <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-teal-500 rounded-full hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              We&apos;ll get back to you within 24 hours. No spam, ever.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
