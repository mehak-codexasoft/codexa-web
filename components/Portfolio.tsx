"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description:
      "A comprehensive financial analytics dashboard with real-time data visualization and AI-powered insights.",
    tags: ["React", "Node.js", "D3.js", "PostgreSQL"],
    gradient: "from-blue-600 to-primary-600",
    image: "bg-gradient-to-br from-blue-600/20 to-primary-600/20",
  },
  {
    title: "HealthCare Connect",
    category: "Mobile App",
    description:
      "Telemedicine platform connecting patients with doctors through video consultations and health tracking.",
    tags: ["Flutter", "Firebase", "WebRTC", "ML Kit"],
    gradient: "from-green-600 to-accent-600",
    image: "bg-gradient-to-br from-green-600/20 to-accent-600/20",
  },
  {
    title: "EduLearn Platform",
    category: "SaaS Platform",
    description:
      "Interactive e-learning platform with live classes, AI tutoring, and comprehensive progress tracking.",
    tags: ["Next.js", "Python", "AWS", "OpenAI"],
    gradient: "from-teal-600 to-primary-600",
    image: "bg-gradient-to-br from-teal-600/20 to-primary-600/20",
  },
  {
    title: "LogiTrack Pro",
    category: "Enterprise Solution",
    description:
      "End-to-end logistics management system with real-time fleet tracking and route optimization.",
    tags: ["React", "Go", "MongoDB", "Google Maps"],
    gradient: "from-orange-600 to-red-600",
    image: "bg-gradient-to-br from-orange-600/20 to-red-600/20",
  },
  {
    title: "ShopSphere",
    category: "E-Commerce",
    description:
      "Scalable e-commerce platform with AI-powered product recommendations and seamless payment integration.",
    tags: ["Next.js", "Stripe", "Redis", "Elasticsearch"],
    gradient: "from-primary-600 to-teal-600",
    image: "bg-gradient-to-br from-primary-600/20 to-teal-600/20",
  },
  {
    title: "CryptoVault",
    category: "FinTech",
    description:
      "Secure cryptocurrency portfolio management tool with real-time market data and automated trading.",
    tags: ["React", "Rust", "Web3", "TailwindCSS"],
    gradient: "from-accent-600 to-blue-600",
    image: "bg-gradient-to-br from-accent-600/20 to-blue-600/20",
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

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding relative">
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
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="neon-line mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our portfolio of successful projects that showcase our
            expertise and commitment to delivering exceptional results.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group glass-card rounded-xl overflow-hidden hover:bg-white/[0.06] transition-all duration-500 glow-effect-hover"
            >
              {/* Project Image/Gradient */}
              <div
                className={`relative h-48 ${project.image} flex items-center justify-center overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                />
                <div className="relative z-10 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mx-auto shadow-lg opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Github className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mt-1 mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
