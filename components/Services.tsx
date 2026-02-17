"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web applications built with modern frameworks like React, Next.js, and Node.js for blazing-fast performance.",
    color: "from-blue-500 to-primary-500",
    shadow: "shadow-blue-500/20",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps using Flutter and React Native that deliver seamless user experiences.",
    color: "from-primary-500 to-teal-500",
    shadow: "shadow-primary-500/20",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive and stunning interfaces designed to captivate your users and boost engagement with pixel-perfect precision.",
    color: "from-teal-400 to-accent-500",
    shadow: "shadow-teal-500/20",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud architecture on AWS, Azure, and GCP to ensure your infrastructure grows with your business.",
    color: "from-accent-500 to-blue-500",
    shadow: "shadow-accent-500/20",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent automation and data-driven insights powered by custom AI/ML models tailored to your needs.",
    color: "from-green-500 to-accent-500",
    shadow: "shadow-green-500/20",
  },
  {
    icon: Settings,
    title: "DevOps & Automation",
    description:
      "Streamlined CI/CD pipelines, containerization, and infrastructure-as-code for faster, reliable deployments.",
    color: "from-orange-500 to-red-500",
    shadow: "shadow-orange-500/20",
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

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

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
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="neon-line mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We deliver end-to-end software solutions that empower businesses to
            innovate, scale, and succeed in the digital era.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative glass-card p-8 rounded-xl hover:bg-white/[0.06] transition-all duration-500 glow-effect-hover"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${service.shadow} shadow-lg`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-6 flex items-center gap-2 text-primary-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
