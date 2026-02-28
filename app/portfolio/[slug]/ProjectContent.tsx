"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Calendar,
  Target,
  Lightbulb,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function ProjectContent({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/50 to-dark-900" />
        <div className={`absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-[128px]`} />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-medium border border-primary-500/20">
                {project.category}
              </span>
              <span className="text-xs text-gray-500">
                Client: {project.client}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
              {project.longDescription}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-xl text-center">
                <Clock className="w-5 h-5 text-primary-400 mx-auto mb-2" />
                <div className="text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
                  {project.duration}
                </div>
                <div className="text-xs text-gray-500">Duration</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <Users className="w-5 h-5 text-primary-400 mx-auto mb-2" />
                <div className="text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
                  {project.teamSize}
                </div>
                <div className="text-xs text-gray-500">Team Size</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <Calendar className="w-5 h-5 text-primary-400 mx-auto mb-2" />
                <div className="text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
                  {project.year}
                </div>
                <div className="text-xs text-gray-500">Year</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Banner */}
      <section className="relative py-12 border-y border-white/[0.05]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-teal-500/5 to-accent-500/5" />
        <div className="container-custom relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {project.results.map((result, i) => (
              <motion.div
                key={result}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-xl md:text-2xl font-bold gradient-text font-[family-name:var(--font-space-grotesk)]">
                  {result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding relative">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
                  The Challenge
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-teal-500" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary-400" />
                </div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
                  Our Solution
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
              What We Built
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
              Key <span className="gradient-text">Features</span>
            </h2>
            <div className="neon-line mx-auto" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {project.features.map((feature) => (
              <motion.div
                key={feature}
                variants={itemVariants}
                className="glass-card p-6 rounded-xl hover:bg-white/[0.06] transition-all duration-300 group glow-effect-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-teal-500/20 flex items-center justify-center shrink-0 group-hover:from-primary-500/30 group-hover:to-teal-500/30 transition-all">
                    <CheckCircle className="w-5 h-5 text-primary-400" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed pt-2">
                    {feature}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding relative">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
              Technologies Used
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <div className="neon-line mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-6 py-3 rounded-full bg-white/[0.05] text-gray-300 border border-white/[0.08] hover:border-primary-500/30 hover:text-white transition-all cursor-default font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="relative py-12 border-t border-white/[0.05]">
        <div className="container-custom relative z-10">
          <div className="flex items-center justify-between">
            {prevProject ? (
              <Link
                href={`/portfolio/${prevProject.slug}`}
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs text-gray-500 mb-1">Previous Project</div>
                  <div className="text-sm font-medium font-[family-name:var(--font-space-grotesk)]">
                    {prevProject.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/portfolio"
              className="hidden md:flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              <Zap className="w-4 h-4" />
              All Projects
            </Link>

            {nextProject ? (
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-right"
              >
                <div>
                  <div className="text-xs text-gray-500 mb-1">Next Project</div>
                  <div className="text-sm font-medium font-[family-name:var(--font-space-grotesk)]">
                    {nextProject.title}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
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
                Want Similar{" "}
                <span className="gradient-text">Results?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
                Let&apos;s discuss how CodexaSoft can build a solution tailored
                to your business needs.
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
