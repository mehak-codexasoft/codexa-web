"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Award,
  Users,
  CheckCircle,
  Calendar,
  Lightbulb,
  Shield,
  Heart,
  Rocket,
  Globe,
  TrendingUp,
  Code2,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly explore emerging technologies and creative approaches to deliver forward-thinking solutions.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparent communication, honest timelines, and ethical practices form the backbone of our business.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in code quality, design, and client satisfaction.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description:
      "Your success is our success. We build deep partnerships and treat every project as our own.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great software is built by great teams. We foster an open, inclusive culture where ideas flow freely.",
  },
  {
    icon: Rocket,
    title: "Growth",
    description:
      "We invest in continuous learning, mentorship, and pushing boundaries — for our team and our clients.",
  },
];

const milestones = [
  {
    year: "2016",
    title: "Founded CodexaSoft",
    description:
      "Started with a small team of 3 passionate developers in a co-working space with a vision to build impactful software.",
  },
  {
    year: "2017",
    title: "First Major Client",
    description:
      "Landed our first enterprise project — a logistics management system that is still in use today.",
  },
  {
    year: "2018",
    title: "Team of 15+",
    description:
      "Expanded the team with designers, QA engineers, and project managers to deliver full-cycle solutions.",
  },
  {
    year: "2019",
    title: "International Expansion",
    description:
      "Opened partnerships with clients in the US, UK, and UAE, taking CodexaSoft global.",
  },
  {
    year: "2020",
    title: "AI/ML Division",
    description:
      "Launched our dedicated AI and Machine Learning division, bringing intelligent automation to our clients.",
  },
  {
    year: "2021",
    title: "100+ Projects Delivered",
    description:
      "Crossed the milestone of 100 successfully delivered projects across 10+ industries.",
  },
  {
    year: "2022",
    title: "Cloud & DevOps Focus",
    description:
      "Strengthened cloud infrastructure offerings with AWS, Azure, and GCP certified engineers.",
  },
  {
    year: "2023",
    title: "50+ Team Members",
    description:
      "Grew to a team of 50+ talented professionals and moved into our new state-of-the-art office.",
  },
  {
    year: "2024",
    title: "500+ Projects",
    description:
      "Reached 500+ delivered projects, serving 200+ clients across the globe with a 98% satisfaction rate.",
  },
];

const stats = [
  { icon: Code2, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Globe, value: "15+", label: "Countries Served" },
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  { icon: Zap, value: "50+", label: "Team Members" },
  { icon: Calendar, value: "8+", label: "Years Experience" },
];

const whyUs = [
  "Agile development methodology with bi-weekly sprints",
  "Dedicated project manager for every client",
  "Transparent pricing with no hidden costs",
  "24/7 support and maintenance packages",
  "Code quality enforced through automated testing & reviews",
  "Post-launch optimization and scaling support",
  "NDA and IP protection guaranteed",
  "On-time delivery track record of 95%+",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/50 to-dark-900" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/15 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/15 rounded-full blur-[128px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm text-gray-300">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              About CodexaSoft
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6">
              We Are{" "}
              <span className="gradient-text">Technology Partners</span>
              <br />
              Not Just Vendors
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-balance">
              Since 2016, CodexaSoft has been transforming businesses through
              innovative software solutions. We don&apos;t just write code — we build
              digital experiences that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-12 border-y border-white/[0.05]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-teal-500/5 to-accent-500/5" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold gradient-text font-[family-name:var(--font-space-grotesk)]">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[128px]" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-6">
                Crafting Software{" "}
                <span className="gradient-text">Excellence</span>
              </h2>
              <div className="neon-line mb-8" />
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                CodexaSoft was founded with a simple belief: technology should empower
                businesses, not complicate them. What started as a small team of 3
                passionate developers in 2016 has grown into a powerhouse of 50+
                talented professionals.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                We specialize in building custom software solutions that solve real
                problems. Whether you&apos;re a startup looking for your MVP or an
                enterprise seeking digital transformation, we bring the expertise,
                creativity, and dedication needed to turn your vision into reality.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our team combines deep technical knowledge with a passion for clean
                design, resulting in products that are not only powerful under the
                hood but also a joy to use.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  description:
                    "To empower businesses with innovative, reliable, and scalable software solutions that drive measurable growth and digital transformation.",
                },
                {
                  icon: Eye,
                  title: "Our Vision",
                  description:
                    "To be recognized globally as the go-to technology partner for companies seeking to shape the future through software.",
                },
                {
                  icon: Award,
                  title: "Our Promise",
                  description:
                    "Deliver on time, every time. Quality code, transparent communication, and results that exceed expectations.",
                },
                {
                  icon: Users,
                  title: "Our Approach",
                  description:
                    "Agile methodology, close collaboration, and iterative development ensures your product evolves with your needs.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover:bg-white/[0.06] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-teal-500/20 flex items-center justify-center mb-4 group-hover:from-primary-500/30 group-hover:to-teal-500/30 transition-all">
                    <item.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <div className="neon-line mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              These principles guide every decision we make, every line of code
              we write, and every relationship we build.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="glass-card p-8 rounded-xl hover:bg-white/[0.06] transition-all duration-300 group glow-effect-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-teal-500/20 flex items-center justify-center mb-5 group-hover:from-primary-500/30 group-hover:to-teal-500/30 transition-all group-hover:scale-110 duration-300">
                  <value.icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[128px]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-4">
              The <span className="gradient-text">Journey</span> So Far
            </h2>
            <div className="neon-line mx-auto mb-6" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-teal-500/30 to-transparent" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary-500 -translate-x-1/2 mt-2 shadow-lg shadow-primary-500/50 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0
                        ? "md:pr-16 md:text-right"
                        : "md:pl-16 md:text-left"
                    }`}
                  >
                    <span className="inline-block text-sm font-bold text-primary-400 font-[family-name:var(--font-space-grotesk)] mb-1">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/[0.02] to-transparent" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
                Why CodexaSoft
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mt-3 mb-6">
                Why Clients{" "}
                <span className="gradient-text">Choose Us</span>
              </h2>
              <div className="neon-line mb-8" />
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We combine technical expertise with genuine care for our clients&apos;
                success. Here&apos;s what sets CodexaSoft apart from the rest.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-10 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-teal-500/5" />
                <div className="relative z-10">
                  <div className="text-6xl md:text-7xl font-bold gradient-text font-[family-name:var(--font-space-grotesk)] mb-4">
                    98%
                  </div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
                    Client Satisfaction Rate
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Our commitment to quality and transparent communication has
                    earned us an industry-leading satisfaction rate across 200+
                    clients worldwide.
                  </p>
                  <div className="space-y-4">
                    {[
                      { label: "On-Time Delivery", value: 95 },
                      { label: "Code Quality Score", value: 97 },
                      { label: "Client Retention", value: 92 },
                    ].map((metric) => (
                      <div key={metric.label}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-300">{metric.label}</span>
                          <span className="text-primary-400 font-semibold">
                            {metric.value}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-white/[0.05] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${metric.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-full rounded-full bg-gradient-to-r from-primary-500 to-teal-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Want to Work With <span className="gradient-text">Us?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
                Let&apos;s discuss how CodexaSoft can help bring your ideas to life.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-teal-500 rounded-full hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
