"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, ArrowRight, Users, Globe, Award, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const leadership = [
  {
    name: "Ali Hassan",
    role: "Founder & CEO",
    bio: "Visionary leader with 12+ years in software architecture and business strategy. Ali founded CodexaSoft with the mission to build technology that empowers businesses. He oversees company strategy, client relations, and drives innovation across all departments.",
    avatar: "AH",
    color: "from-primary-500 to-teal-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Maria Gonzalez",
    role: "Chief Technology Officer",
    bio: "Full-stack expert with deep passion for scalable systems and emerging technologies. Maria leads the engineering team, defines technical architecture, and ensures CodexaSoft stays ahead of the technology curve.",
    avatar: "MG",
    color: "from-teal-400 to-accent-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Aisha Patel",
    role: "Head of AI/ML",
    bio: "Data scientist with expertise in machine learning, NLP, and computer vision. Aisha leads our AI division, building intelligent solutions that transform raw data into actionable business insights.",
    avatar: "AP",
    color: "from-green-500 to-accent-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
];

const teamMembers = [
  {
    name: "James Wilson",
    role: "Lead UI/UX Designer",
    bio: "Creative mind specializing in user-centered design and brand experiences.",
    avatar: "JW",
    color: "from-accent-500 to-blue-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Omar Farooq",
    role: "Senior Full-Stack Developer",
    bio: "Backend wizard with expertise in microservices, cloud, and DevOps.",
    avatar: "OF",
    color: "from-blue-500 to-primary-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Sophie Chen",
    role: "Project Manager",
    bio: "Agile expert ensuring smooth delivery and exceptional client satisfaction.",
    avatar: "SC",
    color: "from-orange-500 to-red-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "David Kim",
    role: "Mobile Developer",
    bio: "Flutter & React Native specialist building seamless cross-platform apps.",
    avatar: "DK",
    color: "from-primary-500 to-teal-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Fatima Al-Rashid",
    role: "Cloud Architect",
    bio: "AWS & Azure certified engineer designing resilient cloud infrastructure.",
    avatar: "FA",
    color: "from-teal-400 to-accent-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Ryan Brooks",
    role: "QA Lead",
    bio: "Quality champion ensuring every release meets the highest standards.",
    avatar: "RB",
    color: "from-green-500 to-teal-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Priya Sharma",
    role: "Frontend Developer",
    bio: "React & Next.js expert crafting performant and accessible web interfaces.",
    avatar: "PS",
    color: "from-accent-500 to-blue-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Ahmed Malik",
    role: "DevOps Engineer",
    bio: "CI/CD and containerization specialist streamlining development workflows.",
    avatar: "AM",
    color: "from-blue-500 to-primary-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Elena Volkov",
    role: "Data Analyst",
    bio: "Turning complex data into clear insights that drive business decisions.",
    avatar: "EV",
    color: "from-purple-500 to-primary-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
];

const teamStats = [
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Globe, value: "8+", label: "Countries" },
  { icon: Award, value: "15+", label: "Certifications" },
  { icon: Briefcase, value: "8+", label: "Avg Years Exp" },
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

export default function TeamPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/50 to-dark-900" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary-500/15 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-[128px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-gray-300">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              Our People
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6">
              The <span className="gradient-text">Brilliant Minds</span>
              <br />
              Behind CodexaSoft
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              A diverse team of passionate developers, designers, and strategists
              united by a shared mission to build exceptional software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="relative py-12 border-y border-white/[0.05]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-teal-500/5 to-accent-500/5" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, i) => (
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

      {/* Leadership Team */}
      <section className="section-padding relative">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
              Meet Our <span className="gradient-text">Leaders</span>
            </h2>
            <div className="neon-line mx-auto mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center hover:bg-white/[0.06] transition-all duration-300 group glow-effect-hover"
              >
                <div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] group-hover:text-white transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary-400 text-sm font-medium mt-1 mb-4">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={member.socials.linkedin}
                    className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 text-gray-500 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.github}
                    className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 text-gray-500 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 text-gray-500 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Team */}
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
              The Squad
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
              Our <span className="gradient-text">Team</span>
            </h2>
            <div className="neon-line mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              The talented individuals who make the magic happen every day.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="glass-card p-6 rounded-xl text-center hover:bg-white/[0.06] transition-all duration-300 group glow-effect-hover"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {member.avatar}
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] group-hover:text-white transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary-400 text-sm font-medium mt-1">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <a
                    href={member.socials.linkedin}
                    className="w-9 h-9 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 text-gray-500 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.github}
                    className="w-9 h-9 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 text-gray-500 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="w-9 h-9 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 text-gray-500 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
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
                Want to Join Our{" "}
                <span className="gradient-text">Team?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
                We&apos;re always looking for talented people who share our passion
                for building exceptional software.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-teal-500 rounded-full hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
