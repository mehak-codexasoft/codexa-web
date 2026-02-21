"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
});

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

      {/* Three.js 3D Scene */}
      <HeroScene />

      {/* Main Content */}
      <div className="container-custom relative z-10 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-300">
            Innovating the Future of Software
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6"
        >
          We Build{" "}
          <span className="gradient-text relative inline-block">
            Digital Solutions
          </span>
          <br />
          That Drive{" "}
          <span className="relative">
            Growth
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
            >
              <motion.path
                d="M2 8C30 2 60 2 100 6C140 10 170 4 198 2"
                stroke="url(#underline-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
              <defs>
                <linearGradient
                  id="underline-gradient"
                  x1="0"
                  y1="0"
                  x2="200"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
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
          <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-teal-500 rounded-full shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-gray-300 glass-card rounded-full hover:text-white hover:border-white/20 transition-all duration-300"
            >
              <Play className="w-5 h-5 text-primary-400" />
              View Our Work
            </Link>
          </motion.div>
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
            ].map((tech, i) => (
              <motion.span
                key={tech}
                whileHover={{
                  y: -4,
                  color: "#ffffff",
                  textShadow: "0 0 20px rgba(20,184,166,0.5)",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.05 }}
                className="text-sm md:text-base font-medium cursor-default transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
