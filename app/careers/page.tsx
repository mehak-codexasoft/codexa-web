"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  Heart,
  Globe,
  Zap,
  Coffee,
  GraduationCap,
  Laptop,
  Users,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  { icon: Globe, title: "Remote-Friendly", description: "Work from anywhere in the world with flexible hours." },
  { icon: TrendingUp, title: "Career Growth", description: "Clear advancement paths with mentorship from senior leaders." },
  { icon: GraduationCap, title: "Learning Budget", description: "$2,000/year for courses, conferences, and certifications." },
  { icon: Heart, title: "Health Insurance", description: "Comprehensive health, dental, and vision coverage for you and family." },
  { icon: Laptop, title: "Top Equipment", description: "MacBook Pro, 4K monitor, and any tools you need to do your best work." },
  { icon: Coffee, title: "Unlimited PTO", description: "Take the time you need. We trust you to manage your schedule." },
];

const openPositions = [
  {
    title: "Senior React Developer",
    department: "Engineering",
    location: "Remote / Silicon Valley",
    type: "Full-time",
    level: "Senior",
    description:
      "Build high-performance web applications using React, Next.js, and TypeScript for our enterprise clients.",
    tags: ["React", "Next.js", "TypeScript", "Node.js"],
    gradient: "from-blue-500 to-primary-500",
  },
  {
    title: "Flutter Mobile Developer",
    department: "Mobile",
    location: "Remote / Silicon Valley",
    type: "Full-time",
    level: "Mid-Senior",
    description:
      "Create beautiful cross-platform mobile applications using Flutter and Dart for iOS and Android.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs"],
    gradient: "from-primary-500 to-teal-500",
  },
  {
    title: "AI/ML Engineer",
    department: "AI Division",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    description:
      "Design and implement machine learning models, NLP systems, and AI-powered features for client products.",
    tags: ["Python", "TensorFlow", "PyTorch", "NLP"],
    gradient: "from-green-500 to-accent-500",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Silicon Valley",
    type: "Full-time",
    level: "Mid-Senior",
    description:
      "Design intuitive user interfaces and experiences for web and mobile applications across diverse industries.",
    tags: ["Figma", "Prototyping", "User Research", "Design Systems"],
    gradient: "from-accent-500 to-blue-500",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    level: "Mid-Senior",
    description:
      "Build and maintain CI/CD pipelines, manage cloud infrastructure, and implement DevSecOps best practices.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Project Manager",
    department: "Operations",
    location: "Silicon Valley",
    type: "Full-time",
    level: "Senior",
    description:
      "Lead agile project delivery, manage client relationships, and ensure on-time, on-budget project completion.",
    tags: ["Agile", "Scrum", "Jira", "Client Management"],
    gradient: "from-teal-500 to-primary-500",
  },
];

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

export default function CareersPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/50 to-dark-900" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/15 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-[128px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-gray-300">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              We&apos;re Hiring
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6">
              Build Your{" "}
              <span className="gradient-text">Career</span>
              <br />
              With Us
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Join a team of passionate technologists building the future of software.
              Remote-friendly, competitive compensation, and an amazing culture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-12 border-y border-white/[0.05]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-teal-500/5 to-accent-500/5" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "50+", label: "Team Members" },
              { icon: Globe, value: "8+", label: "Countries" },
              { icon: Briefcase, value: "6", label: "Open Positions" },
              { icon: Heart, value: "98%", label: "Employee Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-bold gradient-text font-[family-name:var(--font-space-grotesk)]">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding relative">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
              Perks & Benefits
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
              Why You&apos;ll <span className="gradient-text">Love</span> Working Here
            </h2>
            <div className="neon-line mx-auto mb-6" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="glass-card p-8 rounded-xl hover:bg-white/[0.06] transition-all duration-300 group glow-effect-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-teal-500/20 flex items-center justify-center mb-5 group-hover:from-primary-500/30 group-hover:to-teal-500/30 group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
              Join Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <div className="neon-line mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Find your next opportunity. We&apos;re looking for talented
              individuals who are passionate about building great software.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 max-w-4xl mx-auto"
          >
            {openPositions.map((position) => (
              <motion.div
                key={position.title}
                variants={itemVariants}
                className="glass-card rounded-xl p-6 md:p-8 hover:bg-white/[0.06] transition-all duration-300 group glow-effect-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${position.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] group-hover:text-white transition-colors">
                        {position.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-[10px] font-medium border border-green-500/20">
                        {position.level}
                      </span>
                    </div>

                    <p className="text-sm text-gray-400 mb-3">
                      {position.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" /> {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {position.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {position.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-white/[0.05] text-gray-400 border border-white/[0.05]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-teal-500 rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
                  >
                    Apply
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
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

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
                Don&apos;t See Your <span className="gradient-text">Role?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
                We&apos;re always looking for talented people. Send us your resume
                and we&apos;ll reach out when the right opportunity comes along.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-teal-500 rounded-full hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
              >
                Send Your Resume
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
