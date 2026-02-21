"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from "lucide-react";
import TiltCard from "./TiltCard";

const team = [
  {
    name: "Ali Hassan",
    role: "Founder & CEO",
    bio: "Visionary leader with 12+ years in software architecture and business strategy.",
    avatar: "AH",
    color: "from-primary-500 to-teal-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Maria Gonzalez",
    role: "CTO",
    bio: "Full-stack expert passionate about scalable systems and emerging technologies.",
    avatar: "MG",
    color: "from-teal-400 to-accent-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "James Wilson",
    role: "Lead Designer",
    bio: "Creative mind specializing in user-centered design and brand experiences.",
    avatar: "JW",
    color: "from-accent-500 to-blue-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Aisha Patel",
    role: "Head of AI/ML",
    bio: "Data scientist driving intelligent solutions with machine learning and NLP.",
    avatar: "AP",
    color: "from-green-500 to-accent-500",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Omar Farooq",
    role: "Lead Developer",
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
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function Team() {
  return (
    <section id="team" className="section-padding relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
            Our People
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <div className="neon-line mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The talented individuals behind CodexaSoft who make the magic
            happen every day.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={itemVariants}>
              <TiltCard className="h-full glass-card rounded-xl glow-effect-hover" tiltAmount={10}>
                <div className="p-8 text-center group h-full">
                  {/* 3D Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotateY: 15, z: 30 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-5 text-2xl font-bold text-white shadow-lg`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {member.avatar}
                  </motion.div>

                  {/* Info */}
                  <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] group-hover:text-white transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary-400 text-sm font-medium mt-1">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Socials with 3D pop */}
                  <div className="flex items-center justify-center gap-3 mt-5">
                    {[
                      { icon: Linkedin, href: member.socials.linkedin },
                      { icon: Github, href: member.socials.github },
                      { icon: Twitter, href: member.socials.twitter },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        whileHover={{ y: -4, scale: 1.15 }}
                        className="w-9 h-9 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 text-gray-500 transition-all duration-200"
                      >
                        <social.icon className="w-4 h-4" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
