"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

const categories = ["All", "Web App", "Mobile App", "SaaS", "E-Commerce", "AI/ML"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-10 md:pt-48 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/50 to-dark-900" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary-500/15 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-[128px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-gray-300">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              Our Work
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6">
              Projects That{" "}
              <span className="gradient-text">Speak Volumes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our portfolio of successful projects that showcase our
              expertise across industries and technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="relative pt-10 pb-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-primary-500 to-teal-500 text-white shadow-lg shadow-primary-500/25"
                    : "glass-card text-gray-400 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative pt-6 pb-20 md:pt-8 md:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                layout
              >
                <Link href={`/portfolio/${project.slug}`} className="block group h-full">
                  <div className="glass-card rounded-xl overflow-hidden hover:bg-white/[0.06] transition-all duration-500 glow-effect-hover h-full">
                    {/* Project Image */}
                    <div
                      className={`relative h-52 ${project.image} flex items-center justify-center overflow-hidden`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                      />
                      <div className="relative z-10">
                        <div
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}
                        >
                          <span className="text-3xl font-bold text-white">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium flex items-center gap-2">
                          View Case Study
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-primary-400 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-xs text-gray-500">{project.client}</span>
                      </div>
                      <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Results */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.results.map((result) => (
                          <span
                            key={result}
                            className="text-xs px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                          >
                            {result}
                          </span>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-white/[0.05] text-gray-400 border border-white/[0.05]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-teal-500/20 to-accent-500/20" />
            <div className="absolute inset-0 bg-dark-800/80 backdrop-blur-3xl" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary-500/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-teal-500/20 rounded-full blur-[100px]" />

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
                Have a Project in{" "}
                <span className="gradient-text">Mind?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
                Let&apos;s build something amazing together. Share your idea and
                we&apos;ll turn it into reality.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-teal-500 rounded-full hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
