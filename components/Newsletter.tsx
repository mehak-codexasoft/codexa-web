"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative py-20 border-y border-white/[0.05] overflow-hidden">
      <div className="absolute inset-0 bg-dark-800/40" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-5 h-5 text-primary-400" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
              Stay Ahead with{" "}
              <span className="gradient-text">Tech Insights</span>
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
              Weekly articles on software development, AI trends, and cloud
              architecture. Join 5,000+ developers.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="flex-1 px-5 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 text-sm transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold text-dark-900 bg-primary-400 rounded-xl hover:bg-primary-300 transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Done!
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-gray-600 mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
