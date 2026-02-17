"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Code2, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/50 to-dark-900" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[128px]" />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[15%] hidden lg:block"
      >
        <div className="glass-card p-3 rounded-xl">
          <Code2 className="w-6 h-6 text-primary-400" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-48 right-[12%] hidden lg:block"
      >
        <div className="glass-card p-3 rounded-xl">
          <Sparkles className="w-6 h-6 text-teal-400" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-15, 25, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-48 left-[10%] hidden lg:block"
      >
        <div className="glass-card p-3 rounded-xl">
          <Zap className="w-6 h-6 text-accent-400" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container-custom relative z-10 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-300">
            Innovating the Future of Software
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6"
        >
          We Build{" "}
          <span className="gradient-text">Digital Solutions</span>
          <br />
          That Drive{" "}
          <span className="relative">
            Growth
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
            >
              <path
                d="M2 8C30 2 60 2 100 6C140 10 170 4 198 2"
                stroke="url(#underline-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#14b8a6" />
                  <stop offset="0.5" stopColor="#2dd4bf" />
                  <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 text-balance"
        >
          From cutting-edge web applications to AI-powered solutions, we
          transform your vision into scalable, high-performance software that
          sets you apart.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-teal-500 rounded-full hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-gray-300 glass-card rounded-full hover:text-white hover:border-white/20 transition-all duration-300"
          >
            <Play className="w-5 h-5 text-primary-400" />
            View Our Work
          </a>
        </motion.div>

        {/* Tech Stack Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 pt-10 border-t border-white/[0.05]"
        >
          <p className="text-sm text-gray-500 mb-6">
            Trusted technologies we work with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-gray-500">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "AWS",
              "Flutter",
              "TypeScript",
              "PostgreSQL",
            ].map((tech) => (
              <span
                key={tech}
                className="text-sm md:text-base font-medium hover:text-gray-300 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
